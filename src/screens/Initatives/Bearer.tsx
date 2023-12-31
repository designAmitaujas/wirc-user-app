import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";
import RenderHtml from "react-native-render-html";
import { downloadPath, windowWidth } from "../../constant";
import { useGetAllPodcastQuery } from "../../gql/graphql";

const RestHeader = () => {
  const { goBack } = useNavigation();

  return (
    <>
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
          Member Bearers
        </Text>
      </HStack>
    </>
  );
};

const Bearer = () => {
  const { data, loading } = useGetAllPodcastQuery();

  if (loading) {
    return (
      <>
        <RestHeader />

        <HStack
          flex={1}
          alignSelf={"center"}
          display="flex"
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
        {data?.getAllPodcast.length === 0 ? (
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
                No Profile Available !
              </Text>
            </VStack>
          </>
        ) : (
          <>
            <VStack>
              {data?.getAllPodcast.map((item, index) => {
                console.log(item.img);
                return (
                  <>
                    <Text textAlign="center" fontWeight="bold" fontSize="lg">
                      {item.name}
                    </Text>
                    <HStack
                      key={item._id}
                      flex={1}
                      alignItems="center"
                      justifyContent="center"
                      space={2}
                    >
                      <Image
                        mt={4}
                        borderWidth={2}
                        borderColor={"#0f045d"}
                        bg="white"
                        size={"2xl"}
                        source={{ uri: downloadPath(item.img) }}
                        alt="image"
                      />
                    </HStack>
                    <Box alignItems="center" mt={4}>
                      <Text fontWeight="bold" fontSize="lg">
                        Member Details
                      </Text>

                      {item.cms && (
                        <RenderHtml
                          contentWidth={windowWidth - 40}
                          source={{ html: item.cms }}
                        />
                      )}
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

export default Bearer;
