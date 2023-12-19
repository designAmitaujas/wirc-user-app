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
} from "native-base";
//@ts-ignore
import { downloadPath } from "../../constant";
import {
  ICreateBusinesslisting,
  useGetAllBusinessListingQuery,
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
          fontSize="20"
          fontWeight="bold"
          mb={1}
          // w={"40%"}
        >
          Business Listing
        </Text>
      </HStack>
    </>
  );
};
const ProductCard: React.FC<{
  img: string;
  whatid: string;
  name: string;
}> = ({ img, name, whatid }) => {
  const { navigate } = useNavigation();
  const handledetails = () => {
    //@ts-ignore
    navigate("presentationdetails", { whatid, name, img });
  };

  return (
    <>
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

const Business = () => {
  const { data, loading } = useGetAllBusinessListingQuery();

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
      <ScrollView mt={3} bg="white">
        {data?.getAllBusinessListing && (
          <FlatList
            scrollEnabled={false}
            numColumns={2}
            data={data.getAllBusinessListing.filter(
              (item) => item.isActive === true
            )}
            keyExtractor={(item) => item._id}
            renderItem={({ item }: { item: ICreateBusinesslisting }) => (
              <ProductCard
                img={item.sponserimg}
                name={item.name}
                whatid={item._id || ""}
                key={item._id}
              />
            )}
          />
        )}
      </ScrollView>
    </>
  );
};

export default Business;
