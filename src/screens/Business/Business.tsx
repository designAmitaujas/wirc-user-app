import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  HStack,
  Icon,
  Image,
  Spinner,
  Text,
  VStack,
  View,
} from "native-base";
import { useEffect, useState } from "react";
//@ts-ignore
import { FlatListSlider } from "react-native-flatlist-slider";
import { downloadPath } from "../../constant";
import { useGetAllBusinessListingQuery } from "../../gql/graphql";

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
          WIRC Business Sponsers
        </Text>
      </HStack>
    </>
  );
};

const Business = () => {
  const { data, loading } = useGetAllBusinessListingQuery();
  const [imgList, setImgList] = useState<{ image: string }[]>([]);
  const { navigate } = useNavigation();
  useEffect(() => {
    if (data) {
      const arr = data.getAllBusinessListing.map((x) => ({
        image: downloadPath(x.sponserimg),
      }));
      setImgList(arr);
    }
  }, [data]);

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
      <View backgroundColor="white" flex={1}>
        <VStack justifyContent="center" alignItems="center" mt={4}>
          <Text fontWeight="bold" w="90%" textAlign="justify">
            "Discover the backbone of our success – the extraordinary sponsors
            of WIRC. These dynamic partners, including industry giants and
            innovators, fuel our mission for excellence. With WIRC, they embark
            on a shared journey of impact and innovation. Their invaluable
            support propels us forward, shaping the future of our endeavors.
            Proudly sponsored by visionaries, powered by WIRC."
          </Text>
        </VStack>
        <HStack
          justifyContent="center"
          alignItems="center"
          mt={10}
          borderRadius="lg"
          borderWidth="2"
          p={4}
          ml={2}
          mr={2}
          borderColor={"#0f045d"}
        >
          {Array.isArray(imgList) && imgList.length !== 0 && (
            <FlatListSlider
              data={imgList}
              onPress={(item: { image: string }) => (
                <Image
                  source={{ uri: downloadPath(item.image) }}
                  borderRadius="lg"
                  borderColor={"#0f045d"}
                  borderWidth="2"
                  alt="img"
                />
              )}
            />
          )}
        </HStack>
      </View>
    </>
  );
};

export default Business;
