import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  ScrollView,
  Spinner,
  Stack,
  Text,
} from "native-base";
import { Linking, Pressable } from "react-native";
import { downloadPath } from "../../constant";
import {
  useGetAllYoutubeLinksQuery,
  useGetWhatWeBrignToYouByIdQuery,
} from "../../gql/graphql";

const RestHeader = () => {
  const { goBack } = useNavigation();

  const { params } = useRoute();

  const { name } = params as { name: string };

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
          fontSize="24"
          fontWeight="bold"
          mb={1}
          // w={"40%"}
        >
          {name}
        </Text>
      </HStack>
    </>
  );
};

const Details = () => {
  const { params } = useRoute();
  const { whatid } = params as { whatid?: string };
  const { img } = params as { img?: string };

  const { data, loading: l1 } = useGetWhatWeBrignToYouByIdQuery({
    variables: { options: { id: whatid || "" } },
  });

  const { data: youtube, loading: l2 } = useGetAllYoutubeLinksQuery();

  if (l1 || l2) {
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
        <Box alignItems="center" mt={4} p={4}>
          <Box
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.400"
            borderWidth="2"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: downloadPath(
                      data?.getWhatWeBrignToYouById.image || img || ""
                    ),
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="#00388D"
                _text={{
                  color: "warmGray.50",
                  fontWeight: "bold",
                  fontSize: "md",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                {data?.getWhatWeBrignToYouById.name}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Text fontSize="md" fontWeight="semibold" ml="-0.5" mt="-1">
                  {data?.getWhatWeBrignToYouById.name}
                </Text>
              </Stack>
              <Text fontWeight="semibold">
                {data?.getWhatWeBrignToYouById.description}
              </Text>
              <Text fontWeight="semibold">
                {data?.getWhatWeBrignToYouById.icon}
              </Text>
            </Stack>
          </Box>
        </Box>
        <Box alignItems="center" mt={4} p={4}>
          <Box
            p={2}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.400"
            borderWidth="2"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <Stack>
                <Text
                  fontSize="4xl"
                  fontWeight="bold"
                  textAlign="center"
                  color="#00388D"
                >
                  Youtube Links
                </Text>
              </Stack>
              {youtube?.getAllYoutubeLinks
                .filter((item) => item.isActive === true)
                .filter((item) => item.category?._id === whatid)
                .map((item, index) => {
                  return (
                    <>
                      <Pressable
                        onPress={() => {
                          Linking.openURL(item.redirectlink);
                        }}
                      >
                        <HStack
                          p={3}
                          space={2}
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Icon
                            size="2xl"
                            as={
                              <MaterialCommunityIcons
                                name="youtube"
                                size={24}
                                color="black"
                              />
                            }
                            color="#00388D"
                          />
                          <Text fontWeight="semibold">{item.name}</Text>
                        </HStack>
                        <Divider
                          my="2"
                          _light={{
                            bg: "muted.800",
                          }}
                          _dark={{
                            bg: "muted.50",
                          }}
                        />
                      </Pressable>
                    </>
                  );
                })}
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Details;
