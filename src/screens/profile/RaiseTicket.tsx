import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  HStack,
  Heading,
  Icon,
  Input,
  ScrollView,
  Text,
  TextArea,
} from "native-base";
import React from "react";
import {} from "react-native";

const RestHeader = () => {
  const { goBack } = useNavigation();
  return (
    <HStack
      backgroundColor="#0f045d"
      borderBottomLeftRadius="25"
      borderBottomRightRadius="25"
      py="3"
      space={5}
      alignItems="center"
      w="100%"
    >
      <Button
        bg="transparent"
        colorScheme={"white"}
        w="12%"
        ml={2}
        onPress={goBack}
        leftIcon={
          <Icon
            size="md"
            as={<FontAwesome5 name="arrow-left" />}
            color="white"
          />
        }
      />
      <Text color="white" fontSize="22" fontWeight="bold" mb={1} w={"80%"}>
        Raise Ticket
      </Text>
    </HStack>
  );
};

const RaiseTicket = () => {
  return (
    <>
      <RestHeader />
      <ScrollView bg={"white"} h={"100%"} showsVerticalScrollIndicator={false}>
        <Box
          m={10}
          p={5}
          borderRadius={10}
          borderWidth={1}
          w={80}
          alignSelf={"center"}
        >
          <Heading mb={5}>Raise Ticket</Heading>
          <Text mb={1}>Ticket Title</Text>
          <Input mb={5} borderRadius={10} borderColor={"#0f045d"} />
          <Text mb={1}>Ticket Category</Text>
          <Input mb={5} borderRadius={10} borderColor={"#0f045d"} />
          <Text mb={1}>Description</Text>
          <TextArea
            borderColor={"#0f045d"}
            borderRadius={10}
            autoCompleteType={undefined}
          />

          <Button
            mt={10}
            alignSelf={"center"}
            w={"50%"}
            borderRadius={10}
            bg={"#0f045d"}
          >
            <Text color={"white"}>Submit</Text>
          </Button>
        </Box>
      </ScrollView>
    </>
  );
};

export default RaiseTicket;
