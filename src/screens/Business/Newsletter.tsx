import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import {
  Button,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  View,
} from "native-base";
import { Linking } from "react-native";
import FastImage from "react-native-fast-image";
import { downloadPath } from "../../constant";
import { useGetAllWicasaNewsLatterQuery } from "../../gql/graphql";
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
            fontSize="20"
            fontWeight="bold"
            mb={1}
            // w={"40%"}
          >
            WIRC Newsletter
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
  pdf: string;
  key: string;
  desc1: string;
}> = ({ img, key, name, whatid, desc1, pdf }) => {
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
      <Pressable onPress={handlePress} key={key}>
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
          {/* <Image
            w="24"
            h="24"
            source={{ uri: downloadPath(img), cache: "reload" }}
            alt="image"
            borderRadius="full"
          /> */}
          <FastImage
            style={{ width: 70, height: 70, borderRadius: 100, opacity: 1 }}
            source={{
              uri: downloadPath(img),
              priority: FastImage.priority.normal,
            }}
          />

          <Text
            color="black"
            fontSize="lg"
            textAlign="center"
            fontWeight={"bold"}
            w="45%"
          >
            {name} {moment(whatid).format("YYYY")}
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
          bg="white"
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
            const dateA = moment(a.date).toDate();
            const dateB = moment(b.date).toDate();

            return dateB.getTime() - dateA.getTime();
          })
          .map((item) => {
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
