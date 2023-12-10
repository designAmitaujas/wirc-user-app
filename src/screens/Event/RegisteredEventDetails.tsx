import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import * as Calendar from "expo-calendar";
import _ from "lodash";
import moment from "moment";
import {
  Alert,
  Box,
  Button,
  HStack,
  Spinner,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Platform, ScrollView, TouchableOpacity } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";
import RenderHtml from "react-native-render-html";
import { downloadPath, windowWidth } from "../../constant";
import {
  GetCpeEventByIdQuery,
  useGetCpeEventByIdLazyQuery,
} from "../../gql/graphql";

const UpcomingCard: React.FC<{
  name: string;
  startdatetime: string;
  enddatetime: string;
  vanue: string;
}> = ({ name, startdatetime, enddatetime, vanue }) => {
  const toast = useToast();
  const [calendar, setCalendar] = useState(1);

  const { show } = useToast();

  async function getDefaultCalendarSource() {
    const { status } = await Calendar.requestCalendarPermissionsAsync();
    if (status === "granted") {
      const defaultCalendar = await Calendar.getDefaultCalendarAsync();
      return defaultCalendar.source;
    } else {
      show({
        title: _.capitalize(
          "Please allow calendar access to add events to the calendar."
        ),
        placement: "top",
      });
    }
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

const RegisterdEventDetails = () => {
  const { goBack, navigate } = useNavigation();
  const { params } = useRoute();

  const [getEventInformation, { loading }] = useGetCpeEventByIdLazyQuery();

  const [eventInformation, setEventInformation] = useState<
    GetCpeEventByIdQuery["getCpeEventById"] | null | undefined
  >();

  useEffect(() => {
    const { eventId } = params as { eventId?: string };

    if (eventId) {
      (async () => {
        const response = await getEventInformation({
          variables: { options: { id: eventId } },
        });

        if (response.data?.getCpeEventById) {
          setEventInformation(response.data.getCpeEventById);
        }
      })();
    }
  }, [params]);

  const handleSpeaker = () => {
    const { eventId } = params as { eventId?: string };
    //@ts-ignore
    navigate("Eventspeaker", { eventId });
  };

  const handlepresentation = () => {
    //@ts-ignore
    navigate("presentation");
  };
  const handleqna = (id: string) => {
    console.log("helo", id);
    //@ts-ignore
    navigate("question", { id });
  };

  const networking = () => {
    const { eventId } = params as { eventId?: string };
    // @ts-ignore
    navigate("Networking", { eventId });
  };

  if (loading || !eventInformation)
    return (
      <>
        <HStack
          flex={1}
          alignSelf={"center"}
          display="flex"
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
              ml={4}
            >
              {eventInformation?.name.length > 25
                ? eventInformation?.name.slice(0, 25) + "..."
                : eventInformation?.name}
            </Text>
          </HStack>
        </Box>
        <ScrollView
          style={{
            marginTop: 20,
            paddingLeft: 20,
            paddingRight: 20,
          }}
        >
          <UpcomingCard
            name={eventInformation.name}
            startdatetime={moment(eventInformation.date1).format("DD-MMM-YYYY")}
            enddatetime={moment(eventInformation.date2).format("DD-MMM-YYYY")}
            vanue={eventInformation.location}
          />
          {eventInformation.flyer && (
            <AutoHeightImage
              width={windowWidth - 40}
              style={{ marginTop: 20 }}
              source={{ uri: downloadPath(eventInformation.flyer) }}
            />
          )}

          {eventInformation?.cms && (
            <RenderHtml
              contentWidth={windowWidth - 40}
              source={{ html: eventInformation.cms }}
              tagsStyles={{
                table: {
                  borderWidth: 1,
                  borderColor: "#2c333d",
                  paddingLeft: 4,
                  paddingRight: 4,
                  paddingBottom: 4,
                },
              }}
            />
          )}

          <VStack space={4} mt="8">
            <HStack alignItems="center" space="10">
              <Button bg="#00388D" w="45%" onPress={handleSpeaker}>
                Speaker Profile
              </Button>
              <Button bg="#00388D" w="45%" onPress={handlepresentation}>
                Presentation
              </Button>
            </HStack>

            <HStack alignItems="center" space="10">
              <Button
                bg="#00388D"
                w="45%"
                onPress={() => handleqna(eventInformation._id)}
              >
                Question & Answer
              </Button>
              <Button bg="#00388D" w="45%" onPress={networking}>
                Participants List
              </Button>
            </HStack>
          </VStack>
        </ScrollView>
      </View>
    </>
  );
};

export default RegisterdEventDetails;
