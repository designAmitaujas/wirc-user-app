import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {
  Avatar,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  VStack,
  View,
} from "native-base";
import { downloadPath } from "../../constant";
import { useGetAllEventSpeakerQuery } from "../../gql/graphql";

const RestHeader = () => {
  const { goBack } = useNavigation();

  return (
    <>
      <View bg={"white"}>
        <HStack
          backgroundColor="#0f045d"
          borderBottomRadius={40}
          // justifyContent={"space-between"}
          py="3"
          // h={16}
          px={4}
          alignItems="center"
          alignSelf={"center"}
          w={"100%"}
        >
          <Button
            bg="transparent"
            colorScheme={"white"}
            // w="14%"
            onPress={goBack}
            leftIcon={
              <Icon
                size="md"
                as={<FontAwesome5 name="arrow-left" />}
                color="white"
              />
            }
          />
          <Text
            color="white"
            ml={8}
            fontSize="20"
            fontWeight="bold"
            mb={1}
            // w={"40%"}
          >
            Speaker Profiles
          </Text>
        </HStack>
      </View>
    </>
  );
};

const EventSpeaker = () => {
  const { data, loading } = useGetAllEventSpeakerQuery();
  const { params } = useRoute();
  const { eventId } = params as { eventId?: string };
  const { navigate } = useNavigation();

  if (loading) {
    return (
      <>
        <RestHeader />
        <HStack
          flex={1}
          alignSelf={"center"}
          justifyContent="center"
          alignItems="center"
        >
          <Spinner
            accessibilityLabel="Loading participants"
            size="lg"
            color="#0f045d"
          />
          <Text color="#0f045d" fontSize="lg" fontWeight="bold">
            Loading
          </Text>
        </HStack>
      </>
    );
  }
  return (
    <>
      <RestHeader />
      <ScrollView bg="white">
        {data?.getAllEventSpeaker.filter(
          (item) => item.cpeEvent?._id === eventId
        ).length === 0 ? (
          <>
            <VStack
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <LottieView
                source={require("../../../assets/animation_loeanypk.json")}
                autoPlay
                loop
                style={{ width: "50%" }}
              />

              <Text fontSize="2xl" fontWeight="semibold">
                No Speaker Profile For The Current Event !
              </Text>
            </VStack>
          </>
        ) : (
          <>
            <VStack>
              {data?.getAllEventSpeaker
                .filter((item) => item.cpeEvent?._id === eventId)
                .map((item, index) => {
                  console.log("image", item.detailsimg);
                  return (
                    <>
                      <Text ml={4} fontWeight="bold">
                        {index + 1} {")"} Event Speaker
                      </Text>
                      <HStack
                        key={item._id}
                        flex={1}
                        alignItems="center"
                        justifyContent="center"
                        space={2}
                      >
                        <Avatar
                          mt={4}
                          borderWidth={2}
                          borderColor={"#0f045d"}
                          bg="white"
                          size={"xl"}
                          source={{ uri: downloadPath(item.speakerimg) }}
                        />
                      </HStack>
                      <Box alignItems="center" mt={4}>
                        <Text fontWeight="bold" fontSize="lg">
                          Speaker Details
                        </Text>

                        <Pressable
                          onPress={() => {
                            //@ts-ignore
                            navigate("ViewImage", {
                              imageUrl: downloadPath(item.detailsimg),
                            });
                          }}
                        >
                          <Image
                            mt={3}
                            width="56"
                            height="56"
                            source={{ uri: downloadPath(item.detailsimg) }}
                            alt="img"
                          />
                        </Pressable>

                        {/* <ImagePanZoom
                      cropWidth={300}
                      cropHeight={300}
                      imageWidth={200}
                      imageHeight={200}
                    >
                      <Image
                        source={{ uri: downloadPath(item.detailsimg) }}
                        style={{ width: 200, height: 200 }}
                      />
                    </ImagePanZoom> */}
                      </Box>
                      <Divider
                        my="2"
                        _light={{
                          bg: "muted.800",
                        }}
                        _dark={{
                          bg: "muted.50",
                        }}
                      />
                    </>
                  );
                })}
            </VStack>
          </>
        )}
      </ScrollView>
    </>
  );
};

export default EventSpeaker;
