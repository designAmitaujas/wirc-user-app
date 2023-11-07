import { Entypo, Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import moment from "moment";
import {
  Box,
  Button,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useInterval } from "usehooks-ts";
import {
  EventAttendence,
  useGetAllCpeEventQuery,
  useGetMyAttendedEventQuery,
} from "../gql/graphql";

const logo = require("../../assets/wirclogo.png");

const Home = () => {
  const { navigate } = useNavigation();

  const networking = () => {
    // @ts-ignore
    navigate("Networking");
  };

  const handleSkill = () => {
    // @ts-ignore
    navigate("SkillSection");
  };

  return (
    <>
      <VStack bg={"white"} flex={1}>
        <Box
          bg={"#0f045d"}
          h={"16"}
          // py={1.5}
          w={"full"}
          borderBottomRadius={40}
          justifyContent={"center"}
        >
          <HStack mx={8} justifyContent={"space-between"} alignItems={"center"}>
            <Image
              source={logo}
              alt="logo"
              resizeMode="contain"
              h={12}
              w={12}
            />
            <Text
              color="white"
              // ml={16}
              fontSize="22"
              fontWeight="bold"
              // mb={1}
              // w={"40%"}
            >
              WIRC
            </Text>
            <HStack display="flex" space={10}>
              <TouchableOpacity onPress={networking}>
                <Ionicons name="earth" size={24} color="white" />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={handleSkill}
                style={{ justifyContent: "center", display: "flex" }}
              >
                <Entypo name="trophy" size={24} color="white" />
              </TouchableOpacity>
            </HStack>
          </HStack>
        </Box>
        <ScrollView pt={5} pb={5}>
          {/* Seminar */}
          <Seminar />

          {/* Upcoming Event */}
          <UpcomingEvent />
        </ScrollView>
      </VStack>
    </>
  );
};

const AttendedCard: React.FC<{
  name: string;
  duration: string;
  startdatetime: string;
  enddatetime: string;
  vanue: string;
  id: string;
}> = ({ name, duration, startdatetime, enddatetime, vanue, id }) => {
  const { navigate } = useNavigation();
  const Attendance = () => {
    //@ts-ignore
    navigate("Feedback", { eventId: id });
  };
  return (
    <>
      {/* <TouchableOpacity onPress={feedback}> */}
      <VStack
        space={2}
        p={2}
        w={"72"}
        borderWidth={0.5}
        borderColor={"#0f045d"}
        style={{ shadowColor: "blue" }}
        borderRadius={"15"}
        bg={"white"}
      >
        <Text
          fontWeight={"medium"}
          fontSize={"lg"}
          color={"amber.600"}
          alignSelf={"center"}
          textAlign={"center"}
        >
          {name}
        </Text>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Duration
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"65%"}>{duration}</Text>
        </HStack>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Date & Time
          </Text>
          <Text w={"5%"}>:</Text>
          <VStack>
            <HStack space={3}>
              <Text>{startdatetime}</Text>
              <Text>to</Text>
            </HStack>
            <Text>{enddatetime}</Text>
          </VStack>
        </HStack>
        <HStack w={"100%"} flex={1}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Venue
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"65%"}>{vanue}</Text>
        </HStack>
        <Button
          bg={"#0f045d"}
          onPress={Attendance}
          size={"sm"}
          borderRadius={12}
          alignSelf={"center"}
        >
          Feedback
        </Button>
      </VStack>
      {/* </TouchableOpacity> */}
    </>
  );
};

export const Seminar = () => {
  const { data, refetch } = useGetMyAttendedEventQuery();
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();
  const [list, setList] = useState<Array<EventAttendence>>([]); // Initialize as an empty array

  useEffect(() => {
    if (data?.getMyAttendedEvent) {
      setList(data.getMyAttendedEvent);
    }
  }, [data]);

  const newRefetch = async () => {
    setRefreshing(true);

    try {
      await refetch(); // Refetch the data
      setRefreshing(false);
    } catch (error) {
      // Handle any errors that may occur during refetch
      console.error("Error while refetching data:", error);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      newRefetch(); // Trigger a refresh when the component is focused
    }
  }, [isFocused]);

  useInterval(() => {
    if (!refreshing) {
      newRefetch(); // Trigger a refresh at regular intervals only if not already refreshing
    }
  }, 10 * 1000);

  return (
    <>
      <VStack space={4} pl={4} pr={4} pb={4}>
        <HStack alignItems={"center"} space={2}>
          <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
            Attended Events
          </Text>
        </HStack>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          // refreshControl={
          //   <RefreshControl refreshing={refreshing} onRefresh={newRefetch} />
          // }
        >
          <HStack space={15} ml={1} mr={1} mt={2} mb={2}>
            {list
              ?.sort((a, b) => {
                return (
                  moment(a.cpeEvent?.date2).toDate().getTime() -
                  moment(b.cpeEvent?.date2).toDate().getTime()
                );
              })
              .reverse()
              .map((item) => {
                return (
                  <AttendedCard
                    id={item.cpeEvent?._id || ""}
                    key={item._id}
                    name={item.cpeEvent?.name || ""}
                    duration={item.cpeEvent?.cpehrs || ""}
                    startdatetime={
                      moment(item.cpeEvent?.date1).format("DD-MM-YYYY") || ""
                    }
                    enddatetime={
                      moment(item.cpeEvent?.date2).format("DD-MM-YYYY") || ""
                    }
                    vanue={item.cpeEvent?.location || ""}
                  />
                );
              })}
          </HStack>
        </ScrollView>
      </VStack>
    </>
  );
};

const UpcomingCard: React.FC<{
  name: string;
  startdatetime: string;
  enddatetime: string;
  eventId: string;
}> = ({ name, startdatetime, enddatetime, eventId }) => {
  const { navigate } = useNavigation();

  const RegisteredEvents = () => {
    //@ts-ignore
    navigate("RegisteredEvents", { eventId });
  };

  return (
    <>
      <VStack
        space={2}
        p={2}
        shadow={3}
        borderWidth={0.5}
        borderColor={"amber.600"}
        style={{ shadowColor: "#FFD54F" }}
        borderRadius={"15"}
        bg={"white"}
      >
        <Text
          textAlign={"center"}
          fontWeight={"medium"}
          fontSize={"lg"}
          color={"#0f045d"}
          alignSelf={"center"}
        >
          {name}
        </Text>

        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"} ml={3}>
            Date & Time
          </Text>
          <Text ml={2} mr={2} w={"5%"}>
            :
          </Text>
          <VStack>
            <HStack space={3}>
              <Text>{startdatetime}</Text>
              <Text>to</Text>
            </HStack>
            <Text>{enddatetime}</Text>
          </VStack>
        </HStack>

        <Button
          bg={"#0f045d"}
          onPress={RegisteredEvents}
          size={"sm"}
          borderRadius={12}
          alignSelf={"center"}
        >
          View Details
        </Button>
      </VStack>
    </>
  );
};

export const UpcomingEvent = () => {
  const { data, loading } = useGetAllCpeEventQuery();

  return (
    <>
      <VStack space={4} p={4} mb={5}>
        <HStack alignItems={"center"} space={3}>
          <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
            Upcoming CPE Events (Members)
          </Text>
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={5}>
            {data?.getAllCpeEvent
              ?.filter((item) => item.isActive === true)
              .filter((item) => item.isForStudent === false)
              .filter((item) =>
                moment().isBefore(moment(item.date2).startOf("D").add(1, "d"))
              )
              .sort((a, b) => {
                return (
                  moment(a.date1).toDate().getTime() -
                  moment(b.date1).toDate().getTime()
                );
              })
              .map((item) => {
                return (
                  <UpcomingCard
                    key={item._id}
                    eventId={item._id}
                    name={item.name}
                    startdatetime={moment(item.date1).format("DD-MM-YYYY")}
                    enddatetime={moment(item.date2).format("DD-MM-YYYY")}
                  />
                );
              })}
          </VStack>
        </ScrollView>
      </VStack>
    </>
  );
};

export default Home;
