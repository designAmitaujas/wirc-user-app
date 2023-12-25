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
  Spinner,
  Text,
  View,
} from "native-base";
import { downloadPath } from "../../constant";
import {
  ICreateWhatWeBrignToYou,
  useGetAllWhatWeBrignToYouQuery,
} from "../../gql/graphql";

const RestHeader = () => {
  const { goBack } = useNavigation();

  return (
    <>
      <View bg="white">
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
      </View>
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

      <Pressable onPress={handledetails} flex={1}>
        <HStack
          p={2}
          mx="2"
          borderColor={"#00388D"}
          borderWidth="1"
          borderRadius="lg"
        >
          <Box flex={1} mb={2}>
            <AspectRatio flex={1} ratio={16 / 10}>
              <Image
                source={{ uri: downloadPath(img), cache: "reload" }}
                alt="image"
              />
            </AspectRatio>
          </Box>
        </HStack>
        <Text flex="1" textAlign={"center"} fontWeight={"bold"} mt="2" mb={3}>
          {name}
        </Text>
      </Pressable>
    </>
  );
};

const Whatwe = () => {
  const { data, loading } = useGetAllWhatWeBrignToYouQuery();

  if (loading) {
    return (
      <>
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
      <ScrollView pt={3} bg="white">
        {data?.getAllWhatWeBrignToYou && (
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data.getAllWhatWeBrignToYou
              .filter((item) => item.isActive === true)
              .filter((item) => item.isWIRC === false)}
            keyExtractor={(item) => item._id}
            renderItem={({ item }: { item: ICreateWhatWeBrignToYou }) => (
              <ProductCard
                img={item.image}
                name={item.name}
                whatid={item._id || ""}
                desc1={item.description}
                desc2={item.icon}
              />
            )}
          />
        )}
      </ScrollView>
    </>
  );
};

export default Whatwe;
