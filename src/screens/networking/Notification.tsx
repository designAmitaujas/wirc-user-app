import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Button, HStack, Icon, Text, useToast } from "native-base";
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
          Members Networking
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
      <Text>
        {item.inviteTo?.memberRegistration.firstName}
        {item.inviteTo?.memberRegistration.middleName}
        {item.inviteTo?.memberRegistration.lastName}
      </Text>
      <Button onPress={handleAccpet}>Accept</Button>
      <Button onPress={handleReject}>Reject</Button>
    </>
  );
};

const Notification = () => {
  const { data, refetch } = useGetAllInvitationQuery();

  console.log("hello", data?.getAllInvitation);
  return (
    <>
      <RestHeader />
      {data?.getAllInvitation.map((item) => {
        return (
          <>
            <HStack>
              <Rendercard
                // @ts-ignore
                item={item}
                refetch={refetch}
              />
            </HStack>
          </>
        );
      })}
    </>
  );
};

export default Notification;
