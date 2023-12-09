import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  AspectRatio,
  Box,
  Button,
  FlatList,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
} from "native-base";
import { useCallback } from "react";
import { downloadPath } from "../../constant";
import {
  ICreateWhatWeBrignToYou,
  useGetAllWhatWeBrignToYouQuery,
} from "../../gql/graphql";

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
          fontSize="24"
          fontWeight="bold"
          mb={1}
          // w={"40%"}
        >
          WIRC Initiatives
        </Text>
      </HStack>
    </>
  );
};

const ProductCard: React.FC<{
  img: string;
  whatid: string;
  name: string;
  desc1: string;
  desc2: string;
}> = ({ img, name, whatid, desc1, desc2 }) => {
  const { navigate } = useNavigation();
  const handledetails = () => {
    //@ts-ignore
    navigate("Whatwebringdetails", { whatid, name, img });
  };

  return (
    <>
      {/* <Card>
        <HStack
          key={whatid}
          maxW="40"
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
          <HStack>
            <AspectRatio w="100%" ratio={16 / 9}>
              <Image
                source={{
                  uri: downloadPath(img),
                }}
                alt="image"
              />
            </AspectRatio>
          </HStack>
          <Stack p="4" space={3}>
            <Stack space={2}>
              <Heading size="md" ml="-1">
                {name}
              </Heading>
            </Stack>
          </Stack>
        </HStack>
      </Card> */}
      <ScrollView mt={3}>
        <Pressable onPress={handledetails} flex={1}>
          <HStack space="2" mx="2" mb="2">
            <Box flex={1} mb={2}>
              <AspectRatio flex={1} ratio={16 / 10}>
                <Image
                  source={{ uri: downloadPath(img), cache: "reload" }}
                  alt="image"
                />
              </AspectRatio>
              <Text flex="1" textAlign={"center"} fontWeight={"bold"} mt="2">
                {name}
              </Text>
            </Box>
          </HStack>
        </Pressable>
      </ScrollView>
    </>
  );
};

const Whatwe = () => {
  const { data } = useGetAllWhatWeBrignToYouQuery();

  const renderItem = useCallback(
    ({ item }: { item: ICreateWhatWeBrignToYou }) => {
      return (
        <ProductCard
          img={item.image}
          name={item.name}
          whatid={item._id || ""}
          desc1={item.description}
          desc2={item.icon}
        />
      );
    },
    []
  );

  return (
    <>
      <RestHeader />

      {Array.isArray(data?.getAllWhatWeBrignToYou) && (
        <FlatList
          numColumns={2}
          data={data.getAllWhatWeBrignToYou}
          keyExtractor={(item) => item._id}
          renderItem={renderItem}
        />
      )}
    </>
  );
};

export default Whatwe;
