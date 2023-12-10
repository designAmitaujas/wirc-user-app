import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Divider,
  HStack,
  Icon,
  ScrollView,
  Text,
  useToast,
} from "native-base";
import React from "react";
import {
  NetworkingInvite,
  useAcceptInviteMutation,
  useGetAllInvitationQuery,
  useRejectInviteMutation,
} from "../../gql/graphql";

const RestHeader = () => {
  // const { goBack } = useNavigation();
  const { goBack } = useNavigation();
  const { navigate } = useNavigation();

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
          Notifications
        </Text>
      </HStack>
    </>
  );
};

const Rendercard: React.FC<{ item: NetworkingInvite; refetch: Function }> = ({
  item,
  refetch,
}) => {
  const [accpet] = useAcceptInviteMutation();
  const [reject] = useRejectInviteMutation();
  const toast = useToast();
  const handleAccpet = async () => {
    const hello2 = await accpet({
      variables: {
        eventId: item._id,
        inviteTo: "",
      },
    });
    await refetch();

    if (hello2.data?.acceptInvite) {
      toast.show({
        title: "Accpeted successfully",
        placement: "top",
      });
    }
  };

  const handleReject = async () => {
    const hello2 = await reject({
      variables: {
        eventId: item._id,
        inviteTo: "",
      },
    });

    await refetch();
    console.log("reject", hello2.data?.rejectInvite);

    if (hello2.data?.rejectInvite) {
      toast.show({
        title: "Rejected successfully",
        placement: "top",
      });
    }
  };

  if (item.isActive === false) {
    return <></>;
  }

  return (
    <>
      <HStack w={"100%"} space={2} px={2} py={3}>
        <Text
          color={"blue.900"}
          fontWeight={"bold"}
          fontSize="xl"
          textAlign={"center"}
          w="55%"
        >
          Name
        </Text>

        <Text color={"blue.900"} fontWeight={"bold"} fontSize="xl">
          Action
        </Text>
      </HStack>

      <Divider thickness="2" backgroundColor="#0f045d" />
      <HStack space={2} p={6} w="96%" ml="2" mt="4">
        <Text
          fontSize="lg"
          fontWeight="bold"
          width="55%"
          textTransform="capitalize"
        >
          {item.inviteTo?.memberRegistration.firstName}{" "}
          {item.inviteTo?.memberRegistration.middleName}{" "}
          {item.inviteTo?.memberRegistration.lastName}
        </Text>
        <Button backgroundColor="#0f045d" onPress={handleAccpet}>
          <Text fontWeight="semibold" color="white" textAlign="center">
            Accept
          </Text>
        </Button>
        <Button
          backgroundColor="#a70e0b"
          onPress={handleReject}
          fontWeight="semibold"
        >
          <Text fontWeight="semibold" color="white" textAlign="center">
            Reject
          </Text>
        </Button>
      </HStack>
      <Divider thickness="2" backgroundColor="#0f045d" />
    </>
  );
};

const Notification = () => {
  const { data, refetch } = useGetAllInvitationQuery();

  return (
    <>
      <RestHeader />
      <ScrollView>
        {data?.getAllInvitation.map((item) => {
          return (
            <>
              <Rendercard
                // @ts-ignore
                item={item}
                refetch={refetch}
              />
            </>
          );
        })}
      </ScrollView>
    </>
  );
};

export default Notification;
