import { Entypo, FontAwesome, FontAwesome5, Zocial } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import moment from "moment";

import _ from "lodash";
import {
  Box,
  Button,
  HStack,
  Heading,
  ScrollView,
  Spinner,
  Text,
  VStack,
} from "native-base";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { useInterval } from "usehooks-ts";
import {
  useGetAllCpeEventQuery,
  useGetMyAttendedEventQuery,
  useGetMyMobileEventListQuery,
} from "../../gql/graphql";

const logo = require("../../../assets/wirclogo.png");

const Home = () => {
  const { navigate, goBack } = useNavigation();

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
            <TouchableOpacity onPress={goBack}>
              <FontAwesome5 name="arrow-left" size={22} color="white" />
            </TouchableOpacity>
            <Text
              color="white"
              // ml={16}
              fontSize="22"
              fontWeight="bold"
              // mb={1}
              // w={"40%"}
            >
              Event Home
            </Text>
            <HStack display="flex" space={10}>
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
          <RegisteredEvent />

          <UpcomingEvent />
          <Seminar />
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
  const handlelist = () => {
    // @ts-ignore
    navigate("MemberAttendance", { id });
  };

  return (
    <>
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
        <HStack w={"100%"} flex={1} justifyContent="center" space="2">
          <Button
            bg={"#0f045d"}
            onPress={Attendance}
            size={"sm"}
            borderRadius={12}
            alignSelf={"center"}
            leftIcon={
              <FontAwesome name="pencil-square-o" size={24} color="white" />
            }
          >
            Feedback
          </Button>
          <Button
            bg={"#0f045d"}
            size={"sm"}
            borderRadius={12}
            alignSelf={"center"}
            onPress={handlelist}
            leftIcon={<Zocial name="persona" size={24} color="white" />}
          >
            participation
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export const Seminar = () => {
  const { data, refetch, loading } = useGetMyAttendedEventQuery();
  const [refreshing, setRefreshing] = React.useState(false);
  const isFocused = useIsFocused();
  // const [list, setList] = useState<Array<EventAttendence>>([]); // Initialize as an empty array

  // useEffect(() => {
  //   if (data?.getMyAttendedEvent) {
  //     setList(data?.getMyAttendedEvent);
  //   }
  // }, [data]);

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

  // if (loading) {
  //   return (
  //     <>
  //       <Box>
  //         <LottieView
  //           autoPlay
  //           source={require("../../assets/participants-loader/76352-people-brainstorming-and-get-feedback.json")}
  //         />
  //       </Box>
  //     </>
  //   );
  // }

  return (
    <>
      <VStack space={4} pl={4} pr={4} pb={4}>
        <HStack alignItems={"center"} space={2}>
          <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
            Attended Events
          </Text>
        </HStack>
        {loading ? (
          <>
            <HStack
              flex={1}
              justifyContent="center"
              space="2"
              alignItems="center"
            >
              <Spinner
                accessibilityLabel="Loading posts"
                size="lg"
                color="#0f045d"
              />
              <Heading color="#0f045d" fontSize="lg" fontWeight="bold">
                Loading
              </Heading>
            </HStack>
          </>
        ) : (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              // refreshControl={
              //   <RefreshControl refreshing={refreshing} onRefresh={newRefetch} />
              // }
            >
              <HStack space={15} ml={1} mr={1} mt={2} mb={2}>
                {data?.getMyAttendedEvent
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
                        key={`${item._id}_${item.cpeEvent?._id.replace(
                          /\s+/g,
                          "_"
                        )}`}
                        name={item.cpeEvent?.name || ""}
                        duration={item.cpeEvent?.cpehrs || ""}
                        startdatetime={
                          moment(item.cpeEvent?.date1).format("DD-MM-YYYY") ||
                          ""
                        }
                        enddatetime={
                          moment(item.cpeEvent?.date2).format("DD-MM-YYYY") ||
                          ""
                        }
                        vanue={item.cpeEvent?.location || ""}
                      />
                    );
                  })}
              </HStack>
            </ScrollView>
          </>
        )}
      </VStack>
    </>
  );
};

const UpcomingCard: React.FC<{
  name: string;
  startdatetime: string;
  enddatetime: string;
  eventId: string;
  start: string;
  endtime: string;
}> = ({ name, startdatetime, enddatetime, eventId, start, endtime }) => {
  const { navigate } = useNavigation();

  const handleEvents = () => {
    //@ts-ignore
    navigate("RegisteredEvents", { eventId });
  };
  return (
    <>
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
          <Text color={"gray.500"} fontWeight={"semibold"} w={"15%"}>
            Date
          </Text>
          <Text w={"5%"}>:</Text>
          <VStack>
            <HStack space={3}>
              <Text>{startdatetime}</Text>
              <Text>to</Text>
              <Text>{enddatetime}</Text>
            </HStack>
          </VStack>
        </HStack>
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"15%"}>
            Time
          </Text>
          <Text w={"5%"}>:</Text>
          <VStack>
            <HStack space={3}>
              <Text>{start}</Text>
              <Text>to</Text>
              <Text>{endtime}</Text>
            </HStack>
          </VStack>
        </HStack>

        <Button
          bg={"#0f045d"}
          onPress={handleEvents}
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

  // if (loading) {
  //   return (
  //     <>
  //     </>
  //   );
  // }

  return (
    <>
      <VStack space={4} p={4} mb={5}>
        <HStack alignItems={"center"} space={3}>
          <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
            Upcoming CPE Events (Members)
          </Text>
        </HStack>

        {loading ? (
          <>
            <HStack
              flex={1}
              justifyContent="center"
              space="2"
              alignItems="center"
            >
              <Spinner
                accessibilityLabel="Loading posts"
                size="lg"
                color="#0f045d"
              />
              <Heading color="#0f045d" fontSize="lg" fontWeight="bold">
                Loading
              </Heading>
            </HStack>
          </>
        ) : (
          <>
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              // refreshControl={
              //   <RefreshControl refreshing={refreshing} onRefresh={newRefetch} />
              // }
            >
              <HStack space={15} ml={1} mr={1} mt={2} mb={2}>
                {data?.getAllCpeEvent
                  ?.filter((item) => item.isActive === true)
                  .filter((item) => item.isForStudent === false)
                  .filter((item) =>
                    moment().isBefore(
                      moment(item.date2).startOf("D").add(1, "d")
                    )
                  )
                  .sort((a, b) => {
                    return (
                      _.toNumber(moment(a.date1).toDate()) -
                      _.toNumber(moment(b.date1).toDate())
                    );
                  })
                  .map((item) => {
                    return (
                      <UpcomingCard
                        key={`${item._id}_${item.name.replace(/\s+/g, "_")}`}
                        endtime={item.time2}
                        start={item.time1}
                        eventId={item._id}
                        name={item.name}
                        startdatetime={moment(item.date1).format("DD-MMM-YYYY")}
                        enddatetime={moment(item.date2).format("DD-MMM-YYYY")}
                      />
                    );
                  })}
              </HStack>
            </ScrollView>
          </>
        )}
      </VStack>
    </>
  );
};

const RegisterdCard: React.FC<{
  name: string;
  startdatetime: string;
  enddatetime: string;
  eventId: string;
}> = ({ name, startdatetime, enddatetime, eventId }) => {
  const [showModal, setShowModal] = useState(false);
  const { navigate } = useNavigation();

  const handleEvents = () => {
    //@ts-ignore
    navigate("EventsDetails", { eventId });

    setShowModal(false);
  };

  const handleSpeaker = () => {
    //@ts-ignore
    navigate("Eventspeaker", { eventId });
    setShowModal(false);
  };

  const handleQrscan = () => {
    //@ts-ignore
    navigate("QRcode", { eventId });
    setShowModal(false);
  };

  const networking = () => {
    // @ts-ignore
    navigate("Networking", { eventId });
    setShowModal(false);
  };

  const handlelist = () => {
    // @ts-ignore
    navigate("MemberAttendance", { eventId });
    setShowModal(false);
  };

  return (
    <>
      {/* <Center>
        <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
          <Modal.Content maxWidth="400px">
            <Modal.CloseButton />
            <Modal.Header>Contact Us</Modal.Header>
            <Modal.Body>
            
            </Modal.Body>
          </Modal.Content>
        </Modal>
      </Center> */}

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
        <HStack justifyContent="center" space="3" mt="4">
          <Button
            bg={"#0f045d"}
            onPress={handleEvents}
            size={"sm"}
            borderRadius={12}
          >
            View Details
          </Button>
          <Button
            bg={"#0f045d"}
            size={"sm"}
            borderRadius={12}
            onPress={handleQrscan}
          >
            Attendance Scan
          </Button>
        </HStack>
      </VStack>
    </>
  );
};

export const RegisteredEvent = () => {
  const { data, refetch, loading } = useGetMyMobileEventListQuery();

  return (
    <>
      <VStack space={4} p={4} mb={5}>
        <HStack alignItems={"center"} space={3}>
          <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
            Registered CPE Events (Members)
          </Text>
        </HStack>

        {loading ? (
          <>
            <HStack
              flex={1}
              justifyContent="center"
              space="2"
              alignItems="center"
            >
              <Spinner
                accessibilityLabel="Loading posts"
                size="lg"
                color="#0f045d"
              />
              <Heading color="#0f045d" fontSize="lg" fontWeight="bold">
                Loading
              </Heading>
            </HStack>
          </>
        ) : (
          <>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <HStack space={15} ml={1} mr={1} mt={2} mb={2}>
                {data?.getMyMobileEventList

                  .sort((a, b) => {
                    return (
                      _.toNumber(moment(a.startDate).toDate()) -
                      _.toNumber(moment(b.startDate).toDate())
                    );
                  })
                  .map((item) => {
                    const startDate = moment(item.startDate, "DD-MM-YYYY");
                    const endDate = moment(item.endDate, "DD-MM-YYYY");

                    return (
                      <RegisterdCard
                        key={`${item.eventId}_${item.eventId.replace(
                          /\s+/g,
                          "_"
                        )}`}
                        eventId={item.eventId}
                        name={item.eventName}
                        startdatetime={startDate.format("DD-MMM-YYYY")}
                        enddatetime={endDate.format("DD-MMM-YYYY")}
                      />
                    );
                  })}
              </HStack>
            </ScrollView>
          </>
        )}
      </VStack>
    </>
  );
};

export default Home;
