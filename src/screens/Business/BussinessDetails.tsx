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

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import RenderHtml from "react-native-render-html";
import { downloadPath, windowWidth } from "../../constant";
import { useGetBusinesslistingByIdQuery } from "../../gql/graphql";

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

const BussinessDetails = () => {
  const { params } = useRoute();

  const { whatid } = params as { whatid: string };
  const { img } = params as { img: string };
  const { data } = useGetBusinesslistingByIdQuery({
    variables: { options: { id: whatid } },
  });
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
                      data?.getBusinesslistingById.sponserimg || img
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
                {data?.getBusinesslistingById.name}
              </Center>
            </Box>
            <Stack p="4" space={3}>
              <Stack space={2}>
                <Text fontSize="md" fontWeight="semibold" ml="-0.5" mt="-1">
                  {data?.getBusinesslistingById.name}
                </Text>
              </Stack>
              <Text fontWeight="semibold">hi</Text>
              {data?.getBusinesslistingById?.cms && (
                <RenderHtml
                  contentWidth={windowWidth - 40}
                  source={{ html: data.getBusinesslistingById.cms }}
                />
              )}
            </Stack>
          </Box>
        </Box>
      </ScrollView>
    </>
  );
};

export default BussinessDetails;
