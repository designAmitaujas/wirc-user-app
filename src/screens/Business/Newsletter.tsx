import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import {
  Button,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  Text,
} from "native-base";
import { Linking } from "react-native";
import { downloadPath } from "../../constant";
import { useGetAllWicasaNewsLatterQuery } from "../../gql/graphql";

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
          WIRC NewsLetter
        </Text>
      </HStack>
    </>
  );
};

const ProductCard: React.FC<{
  img: string;
  whatid: string;
  name: string;
  pdf: string;
  desc1: string;
}> = ({ img, name, whatid, desc1, pdf }) => {
  const { navigate } = useNavigation();

  const handlePress = async () => {
    // Check if the URL ends with '.pdf' to determine if it's a PDF file
    if (pdf) {
      Linking.openURL(downloadPath(pdf));
    } else {
      Linking.openURL(desc1);
    }
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

      <Pressable onPress={handlePress}>
        <HStack
          p={4}
          alignItems="center"
          borderColor={"#00388D"}
          borderWidth="4"
          w="95%"
          ml={3}
          mt={4}
          borderRadius="lg"
        >
          <Image
            w="32"
            h="32"
            source={{ uri: downloadPath(img), cache: "reload" }}
            alt="image"
            borderRadius="full"
          />

          <Text
            color="black"
            fontSize="lg"
            textAlign="center"
            fontWeight={"bold"}
          >
            {name} {moment(whatid).format("DD-MM-YYYY")}
          </Text>
          <Button
            bg="transparent"
            colorScheme={"white"}
            // w="14%"
            onPress={handlePress}
            leftIcon={
              <Icon
                size="md"
                as={
                  pdf ? (
                    <>
                      <FontAwesome name="download" size={24} color="black" />
                    </>
                  ) : (
                    <>
                      <FontAwesome name="link" size={24} color="black" />
                    </>
                  )
                }
                color="white"
              />
            }
          />
        </HStack>
      </Pressable>
    </>
  );
};

const Newsletter = () => {
  const { data, loading } = useGetAllWicasaNewsLatterQuery();
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
        {data?.getAllWicasaNewsLatter
          .filter((item) => item.isActive === true)
          .filter((item) => item.iswirc === true)
          .sort((a, b) => {
            return (
              moment(b.date).toDate().getTime() -
              moment(a.date).toDate().getTime()
            );
          })
          .map((item) => {
            console.log(item.pdf);
            return (
              <>
                <ProductCard
                  key={item._id}
                  img={item.img}
                  name={item.name}
                  whatid={item.date}
                  pdf={item.pdf}
                  desc1={item.redirectlink}
                />
              </>
            );
          })}
      </ScrollView>
    </>
  );
};

export default Newsletter;
