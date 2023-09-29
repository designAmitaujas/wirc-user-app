import { Ionicons } from "@expo/vector-icons";
import {
  Box,
  Button,
  HStack,
  Image,
  ScrollView,
  Text,
  VStack,
  useToast,
} from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";



const logo = require("../../assets/wirclogo.png");

import { useNavigation } from "@react-navigation/native";

const Home = () => {
  const { navigate } = useNavigation();

  const networking = () => {
    // @ts-ignore
    navigate("Networking");
  };

  return (
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
          <Image source={logo} alt="logo" resizeMode="contain" h={12} w={12} />
          <TouchableOpacity onPress={networking}>
            <Ionicons name="earth" size={32} color="white" />
          </TouchableOpacity>
        </HStack>
      </Box>
      <ScrollView pt={5} pb={5}>
        {/* Seminar */}
        <Seminar />

        {/* Upcoming Event */}
        <UpcomingEvent />
      </ScrollView>
    </VStack>
  );
};

export default Home;

const AttendedCard: React.FC<{
  name: string;
  duration: string;
  startdatetime: string;
  enddatetime: string;
  vanue: string;
}> = ({ name, duration, startdatetime, enddatetime, vanue }) => {
  const { navigate } = useNavigation();
  const Attendance = () => {
    //@ts-ignore
    navigate("Attendancesheet");
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
  return (
    <>
      <VStack space={4} pl={4} pr={4} pb={4}>
        <HStack alignItems={"center"} space={2}>
          <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
            Attended Events
          </Text>
        </HStack>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={15} ml={1} mr={1} mt={2} mb={2}>
            <AttendedCard
              name="Direct Tax Refresher Course (Physical)"
              duration="40 Minute"
              startdatetime="20-06-2023, 7:30 AM"
              enddatetime="22-06-2023, 9:30 AM"
              vanue="Nakshtra Party Ploat Harni, Vadodara - 360002"
            />

            <AttendedCard
              name="Two days Workshop on Excel Skills for Real World Business
                  Operations"
              duration="45 Minute"
              startdatetime="20-06-2023, 7:30 AM"
              enddatetime="22-06-2023, 9:30 AM"
              vanue="NarayanWadi Atladara, Vadodara - 360002"
            />
          </HStack>
        </ScrollView>
      </VStack>
    </>
  );
};

//Upcoming Seminar

const UpcomingCard: React.FC<{
  name: string;
  // duration: string;
  startdatetime: string;
  enddatetime: string;
  // vanue: string;
}> = ({ name, startdatetime, enddatetime }) => {
  const toast = useToast();
  const [calendar, setCalendar] = useState(1);
  const { navigate } = useNavigation();
  const RegisteredEvents = () => {
    //@ts-ignore
    navigate("RegisteredEvents");
  };

  // useEffect(() => {
  //   (async () => {
  //     const { status } = await Calendar.requestCalendarPermissionsAsync();
  //     if (status === "granted") {
  //       const calendars = await Calendar.getCalendarsAsync(
  //         Calendar.EntityTypes.EVENT
  //       );
  //     }
  //   })();
  // }, []);

  // async function getDefaultCalendarSource() {
  //   const defaultCalendar = await Calendar.getDefaultCalendarAsync();
  //   return defaultCalendar.source;
  // }

  // const addEventToCalender = async () => {
  //   if (calendar === 1) {
  //     toast.show({
  //       render: () => (
  //         <Alert status="success">
  //           <HStack space={2} alignItems={"center"} justifyContent={"center"}>
  //             <Alert.Icon />
  //             <Text>ADDED TO CALENDAR</Text>
  //           </HStack>
  //         </Alert>
  //       ),
  //       placement: "top",
  //     });
  //     setCalendar(0);

  //     console.log("???");

  //     const defaultCalendarSource =
  //       Platform.OS === "ios"
  //         ? await getDefaultCalendarSource()
  //         : { isLocalAccount: true, name: "WIRC" };

  //     const newCalendarID = await Calendar.createCalendarAsync({
  //       title: name,

  //       color: "green",
  //       entityType: Calendar.EntityTypes.REMINDER,
  //       //@ts-ignore
  //       sourceId: defaultCalendarSource.id,
  //       //@ts-ignore
  //       source: defaultCalendarSource,
  //       name: "internalCalendarName",
  //       ownerAccount: "personal",
  //       accessLevel: Calendar.CalendarAccessLevel.OWNER,
  //     });

  //     await Calendar.createEventAsync(newCalendarID, {
  //       startDate: moment().toISOString(),
  //       endDate: moment().toISOString(),
  //       // "2023-06-24 17:00:00"
  //       title: name,
  //       location: vanue,

  //       alarms: [{ relativeOffset: -60, method: Calendar.AlarmMethod.ALERT }],
  //     });
  //   } else {
  //     toast.show({
  //       render: () => (
  //         <Alert status="info">
  //           <HStack space={2} alignItems={"center"} justifyContent={"center"}>
  //             <Alert.Icon />
  //             <Text>ALREADY ADDED TO CALENDAR</Text>
  //           </HStack>
  //         </Alert>
  //       ),
  //       placement: "top",
  //     });
  //   }
  // };

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
        {/* <TouchableOpacity onPress={addEventToCalender}>
            {calendar === 1 ? (
              <>
                <MaterialCommunityIcons
                  name="calendar-plus"
                  size={24}
                  color="black"
                />
              </>
            ) : (
              <>
                <MaterialCommunityIcons
                  name="calendar-check"
                  size={24}
                  color="green"
                />
              </>
            )}
          </TouchableOpacity> */}

        {/* <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Duration
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"65%"}>{duration}</Text>
        </HStack> */}
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
        {/* <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Venue
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"60%"}>{vanue}</Text>
        </HStack> */}
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
  return (
    <>
      <VStack space={4} p={4} mb={5}>
        <HStack alignItems={"center"} space={3}>
          <Text fontWeight={"semibold"} fontSize={"xl"} color={"gray.400"}>
            Upcoming Events
          </Text>
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={5}>
            <UpcomingCard
              name="Direct Tax Refresher Course (Physical)"
              // duration="40 Minute"
              startdatetime="20-06-2023, 7:30 AM"
              enddatetime="22-06-2023, 9:30 AM"
              // vanue="Nakshtra Party Ploat Harni, Vadodara - 360002"
            />
            <UpcomingCard
              name="Two days Workshop on Excel Skills for Real World Business
                  Operations"
              // duration="40 Minute"
              startdatetime="22-06-2023, 7:30 AM"
              enddatetime="24-06-2023, 10:30 AM"
              // vanue="Nakshtra Party Ploat Harni, Vadodara - 360002"
            />
            <UpcomingCard
              name="Tech Edge Series (Virtual)"
              // duration="40 Minute"
              startdatetime="24-06-2023, 7:30 AM"
              enddatetime="26-06-2023, 7:30 AM"
              // vanue="Nakshtra Party Ploat Harni, Vadodara - 360002"
            />
          </VStack>
        </ScrollView>
      </VStack>
    </>
  );
};
