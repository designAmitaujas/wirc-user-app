import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  AspectRatio,
  Box,
  Button,
  Center,
  HStack,
  Icon,
  Image,
  ScrollView,
  Stack,
  Text,
} from "native-base";
import { Linking } from "react-native";
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

  const { data } = useGetWhatWeBrignToYouByIdQuery({
    variables: { options: { id: whatid || "" } },
  });

  const { data: youtube } = useGetAllYoutubeLinksQuery();

  return (
    <>
      <RestHeader />
      <ScrollView bg="white">
        <Box alignItems="center" mt={4} p={4}>
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
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
                bg="violet.500"
                _dark={{
                  bg: "violet.400",
                }}
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs",
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
                <Text
                  fontSize="xs"
                  _light={{
                    color: "violet.500",
                  }}
                  _dark={{
                    color: "violet.400",
                  }}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  {data?.getWhatWeBrignToYouById.name}
                </Text>
              </Stack>
              <Text fontWeight="400">
                {data?.getWhatWeBrignToYouById.description}
              </Text>
              <Text fontWeight="400">{data?.getWhatWeBrignToYouById.icon}</Text>
            </Stack>
            <Box
              maxW="80"
              p={4}
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
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
                {youtube?.getAllYoutubeLinks
                  .filter((item) => item.isActive === true)
                  .filter((item) => item.category?._id === whatid)
                  .map((item, index) => {
                    return (
                      <>
                        <Stack space={2}>
                          <Text
                            fontSize="2xl"
                            fontWeight="500"
                            textAlign="center"
                          >
                            Youtube Links
                          </Text>
                        </Stack>

                        <Button
                          justifyContent="flex-start"
                          bg="transparent"
                          colorScheme={"violet.500"}
                          leftIcon={
                            <Icon
                              size="2xl"
                              as={
                                <MaterialCommunityIcons
                                  name="youtube"
                                  size={24}
                                  color="black"
                                />
                              }
                              color="violet.500"
                            />
                          }
                          onPress={() => {
                            Linking.openURL(item.redirectlink);
                          }}
                        >
                          <Text width="70%">{item.name}</Text>
                        </Button>
                      </>
                    );
                  })}
              </Box>
            </Box>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default Details;
