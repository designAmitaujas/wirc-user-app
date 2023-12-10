import {
  Button,
  Divider,
  HStack,
  Icon,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";

import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import moment from "moment";
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
  const { navigate } = useNavigation();
  const handledetails = () => {
    //@ts-ignore
    navigate("presentationdetails", { preID });
  };
  return (
    <>
      <Pressable onPress={handledetails}>
        <HStack space={2} p={4}>
          <Text justifyContent="flex-start" fontSize="md" fontWeight="semibold">
            {date}
          </Text>
          <Divider orientation="vertical" thickness="2" bg="gray.800" />
          <Text fontSize="md" fontWeight="semibold" w="80%">
            {name}
          </Text>
        </HStack>
      </Pressable>
    </>
  );
};
const Presentation = () => {
  const { data, loading } = useGetAllCpeResourceCategoryQuery();

  return (
    <>
      <RestHeader />
      <ScrollView p={2}>
        <VStack borderWidth="1" borderColor="gray.400" w="100%">
          {data?.getAllCpeResourceCategory.map((item) => {
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
