import { Platform } from "react-native";
import React, { useEffect, useState } from "react";
import {
  Alert,
  Box,
  Button,
  CheckIcon,
  HStack,
  Image,
  Input,
  Modal,
  ScrollView,
  Select,
  Text,
  TextArea,
  VStack,
  View,
  useToast,
} from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { CustomInput } from "../components/CustomForm";
import { FlatListSlider } from "react-native-flatlist-slider";
import * as Calendar from "expo-calendar";
import moment from "moment";

const UpcomingCard: React.FC<{
  name: string;
  duration: string;
  startdatetime: string;
  enddatetime: string;
  vanue: string;
}> = ({ name, duration, startdatetime, enddatetime, vanue }) => {
  const toast = useToast();
  const [calendar, setCalendar] = useState(1);
  const { navigate } = useNavigation();
  const RegisteredEvents = () => {
    //@ts-ignore
    navigate("RegisteredEvents");
  };

  useEffect(() => {
    (async () => {
      const { status } = await Calendar.requestCalendarPermissionsAsync();
      if (status === "granted") {
        const calendars = await Calendar.getCalendarsAsync(
          Calendar.EntityTypes.EVENT
        );
      }
    })();
  }, []);

  async function getDefaultCalendarSource() {
    const defaultCalendar = await Calendar.getDefaultCalendarAsync();
    return defaultCalendar.source;
  }

  const addEventToCalender = async () => {
    if (calendar === 1) {
      toast.show({
        render: () => (
          <Alert status="success">
            <HStack space={2} alignItems={"center"} justifyContent={"center"}>
              <Alert.Icon />
              <Text>ADDED TO CALENDAR</Text>
            </HStack>
          </Alert>
        ),
        placement: "top",
      });
      setCalendar(0);

      console.log("???");

      const defaultCalendarSource =
        Platform.OS === "ios"
          ? await getDefaultCalendarSource()
          : { isLocalAccount: true, name: "WIRC" };

      const newCalendarID = await Calendar.createCalendarAsync({
        title: name,

        color: "green",
        entityType: Calendar.EntityTypes.REMINDER,
        //@ts-ignore
        sourceId: defaultCalendarSource.id,
        //@ts-ignore
        source: defaultCalendarSource,
        name: "internalCalendarName",
        ownerAccount: "personal",
        accessLevel: Calendar.CalendarAccessLevel.OWNER,
      });

      await Calendar.createEventAsync(newCalendarID, {
        startDate: moment().toISOString(),
        endDate: moment().toISOString(),
        // "2023-06-24 17:00:00"
        title: name,
        location: vanue,

        alarms: [{ relativeOffset: -60, method: Calendar.AlarmMethod.ALERT }],
      });
    } else {
      toast.show({
        render: () => (
          <Alert status="info">
            <HStack space={2} alignItems={"center"} justifyContent={"center"}>
              <Alert.Icon />
              <Text>ALREADY ADDED TO CALENDAR</Text>
            </HStack>
          </Alert>
        ),
        placement: "top",
      });
    }
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
        <HStack justifyContent={"space-between"} alignItems={"center"}>
          <Text
            w={"90%"}
            fontWeight={"medium"}
            fontSize={"lg"}
            color={"#0f045d"}
            alignSelf={"center"}
          >
            {name}
          </Text>
          <TouchableOpacity onPress={addEventToCalender}>
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
          </TouchableOpacity>
        </HStack>

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
        <HStack w={"100%"}>
          <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
            Venue
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"60%"}>{vanue}</Text>
        </HStack>
      </VStack>
    </>
  );
};

const UpcomingEvents = () => {
  const { goBack } = useNavigation();
  // const [service, setService] = React.useState("");
  const images = [
    {
      banner: require("../../assets/banner.jpg"),
    },
    {
      banner: require("../../assets/banner2.jpg"),
    },
    {
      banner: require("../../assets/banner3.jpg"),
    },
  ];

  return (
    <>
      <View bg={"white"} flex={1}>
        <Box
          bg={"#0f045d"}
          h={"16"}
          w={"full"}
          borderBottomRadius={40}
          justifyContent={"center"}
        >
          <HStack mx={7} alignItems={"center"}>
            <TouchableOpacity onPress={goBack}>
              <FontAwesome5 name="arrow-left" size={22} color="white" />
            </TouchableOpacity>
            <Text
              color={"white"}
              fontSize={"xl"}
              fontWeight={"semibold"}
              ml={16}
            >
              Upcoming Event
            </Text>
          </HStack>
        </Box>
        <VStack
          w={"100%"}
          alignItems={"center"}
          justifyContent={"center"}
          my={5}
          p={3}
          space={5}
          bg={"white"}
        >
          {/* <ScrollView horizontal showsHorizontalScrollIndicator={false}> */}
          <HStack>
            <FlatListSlider
              data={images}
              imageKey={"banner"}
              local
              loop={true}
              timer={3000}
            />

            {/* <Image
                borderRadius={10}
                w={"72"}
                h={"40"}
                // resizeMode="contain"
                alt="Image not found"
                source={require("../../assets/banner2.jpg")}
              /> */}
          </HStack>
          {/* </ScrollView> */}
          <UpcomingCard
            name="Direct Tax Refresher Course (Physical)"
            duration="40 Minute"
            startdatetime="20-06-2023, 7:30 AM"
            enddatetime="22-06-2023, 9:30 AM"
            vanue="Nakshtra Party Ploat Harni, Vadodara - 360002"
          />
          <Button bg={"#0f045d"} mt={5} borderRadius={10}>
            Registration
          </Button>
        </VStack>
      </View>
    </>
  );
};

export default UpcomingEvents;
