import {
  Button,
  Divider,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
import { Linking } from "react-native";
import { useGetAllCpeResourceCategoryQuery } from "../../gql/graphql";

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
          Event Archives
        </Text>
      </HStack>
    </>
  );
};

const PresenationCard: React.FC<{
  name: string;
  date: string;
  preID: string;
}> = ({ name, date, preID }) => {
  const handledetails = () => {
    Linking.openURL(
      `https://wirc-icai.org/members/cperesources-download/${preID}/${name}`
    );
  };
  return (
    <>
      <Pressable onPress={handledetails}>
        <HStack space={2} p={4} mb={4} mt={2}>
          <Text
            w="30%"
            fontSize="sm"
            fontWeight="semibold"
            textAlign="center"
            justifyContent="center"
            alignItems="center"
          >
            {date}
          </Text>
          <Divider orientation="vertical" thickness="2" bg="gray.800" />
          <Text
            fontSize="sm"
            fontWeight="semibold"
            w="70%"
            justifyContent="center"
            alignItems="center"
          >
            {name}
          </Text>
        </HStack>
        <Divider thickness="2" bg="gray.800" />
      </Pressable>
    </>
  );
};
const Presentation = () => {
  const { data, loading } = useGetAllCpeResourceCategoryQuery();

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
      <ScrollView p={2}>
        <VStack borderWidth="1" borderColor="gray.400" w="100%">
          {data?.getAllCpeResourceCategory
            .sort((a, b) => {
              return (
                moment(b.date).toDate().getTime() -
                moment(a.date).toDate().getTime()
              );
            })
            .map((item) => {
              return (
                <>
                  <PresenationCard
                    preID={item._id}
                    date={moment(item.date).format("DD-MMM-YYYY")}
                    name={item.name}
                  />
                </>
              );
            })}
        </VStack>
      </ScrollView>
    </>
  );
};

export default Presentation;
