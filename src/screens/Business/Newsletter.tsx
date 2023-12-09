import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import {
  Button,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
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

      <HStack space="2" mx="2" mb="2">
        <Pressable onPress={handlePress}>
          <Image
            w="56"
            h="56"
            borderRadius="full"
            source={{ uri: downloadPath(img), cache: "reload" }}
            alt="image"
          />

          <Text fontWeight={"bold"}>
            {name} {moment(whatid).format("DD-MM-YYYY")}
          </Text>
        </Pressable>
      </HStack>
    </>
  );
};

const Newsletter = () => {
  const { data, loading } = useGetAllWicasaNewsLatterQuery();
  return (
    <>
      <RestHeader />
      <ScrollView>
        {data?.getAllWicasaNewsLatter
          .filter((item) => item.isActive === true)
          .filter((item) => item.iswirc === false)
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
