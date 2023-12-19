import { FontAwesome5 } from "@expo/vector-icons";
import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import * as Location from "expo-location";
import _ from "lodash";
import Lottie from "lottie-react-native";
import {
  Box,
  Button,
  HStack,
  Icon,
  Input,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import { useEffect, useState } from "react";
import {
  useAddAttendenceMutation,
  useGetCpeEventByIdQuery,
  useMyProfileInformationQuery,
} from "../gql/graphql";

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
          fontSize="20"
          fontWeight="bold"
          mb={1}
          // w={"40%"}
        >
          Mark Attendance
        </Text>
      </HStack>
    </>
  );
};

const QRScanner: React.FC = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  return isFocused ? <QRScreen /> : null;
};

const QRScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const [responsedata, setResponsedata] = useState("");

  const [scanned, setScanned] = useState(false);
  const [info, setInfo] = useState("");
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  const { data: events } = useGetCpeEventByIdQuery({
    //@ts-ignore
    variables: { options: { id: params?.eventId || "" } },
  });

  const { data: profile } = useMyProfileInformationQuery();
  const [addAttendence] = useAddAttendenceMutation();

  const handlehome = () => {
    //@ts-ignore
    navigate("EventHome");
  };
  const toast = useToast();
  useEffect(() => {
    (async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          throw new Error("Location permission not granted");
        }

        const location = await Location.getCurrentPositionAsync({});
        setLocation(location);
      } catch (error) {
        console.error("Error getting location:", error);
      }
    })();
  }, []);

  const isWithinGeoFence = () => {
    if (!location || !events) {
      return false;
    }

    let withinGeoFence = false;

    const R = 6371;
    const lat2 = _.toNumber(events.getCpeEventById.lati);
    const lon2 = _.toNumber(events.getCpeEventById.longi);
    console.log(lat2);
    console.log(lon2);

    const dLat = (lat2 - location.coords.latitude) * (Math.PI / 180);
    const dLon = (lon2 - location.coords.longitude) * (Math.PI / 180);

    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(location.coords.latitude * (Math.PI / 180)) *
        Math.cos(lat2 * (Math.PI / 180)) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distance = R * c;

    const roundedDistance = Math.round(distance * 1000); // in meters

    const geoFenceRadius = 1500; // 1 kilometer
    console.log(
      "Event:",
      events.getCpeEventById.name,
      "Lat:",
      location.coords.latitude,
      "Long:",
      location.coords.longitude,
      "EventLat:",
      lat2,
      "EventLong:",
      lon2,
      "Distance:",
      roundedDistance
    );

    if (roundedDistance < geoFenceRadius) {
      console.log("Within geo-fence!");
      withinGeoFence = true;
    } else {
      console.log("Not within geo-fence!");
    }

    if (withinGeoFence) {
      return true;
    }
  };

  const handleBarCodeScanned = async () => {
    try {
      // Check if already scanned
      if (scanned) {
        toast.show({
          title: "Attendance already marked",
          placement: "top",
        });
        return;
      }
      if (!info.trim()) {
        toast.show({
          title: "Please enter a valid QR code",
          placement: "top",
        });
        return;
      }
      // Check geofence
      if (!isWithinGeoFence()) {
        toast.show({
          title: "Kindly mark your CPE Attendance only at the Venue...",
          placement: "top",
        });
        return;
      }

      const response = await addAttendence({
        variables: {
          options: {
            eventId: info,
            memberId: profile?.myProfileInformation?.membershipNo || "",
          },
        },
      });

      // Check if successful response
      if (response.data?.addAttendence.success) {
        toast.show({
          title: _.capitalize(response.data.addAttendence.msg),
          placement: "top",
        });
        setResponsedata(response.data.addAttendence.msg);
        setScanned(true);
      } else {
        toast.show({
          title: _.capitalize(response.data?.addAttendence.msg),
          placement: "top",
        });
      }
    } catch (error) {
      console.error("Error handling barcode scan:", error);
    }
  };

  if (!scanned) {
    return (
      <>
        <RestHeader />
        <View flex={1} alignItems={"center"} justifyContent="center">
          <Text fontSize={"25"} mb={3} fontWeight={"bold"} textAlign={"center"}>
            Enter the code For Attendance
          </Text>

          <VStack space={2}>
            <Input
              w={"72"}
              placeholder="Enter QR Code"
              value={info}
              onChangeText={(value) => setInfo(value)}
            />
            <Button
              onPress={handleBarCodeScanned}
              disabled={!info.trim()}
              mt="10"
              mb="2"
              borderRadius={25}
              size={"lg"}
              w={"40"}
              alignSelf={"center"}
              bgColor={"#0f045d"}
            >
              Mark Attendance
            </Button>
          </VStack>
        </View>
      </>
    );
  }

  return (
    <>
      <View bg={"white"} flex={1}>
        <Box h={"32"} w={"48"} alignSelf={"center"} mt={"10"}>
          <Lottie
            source={require("../../assets/91068-message-sent-successfully-plane.json")}
            autoPlay
            loop
          />
        </Box>

        <VStack
          bg={"white"}
          borderRadius={10}
          shadow={5}
          mx={5}
          p={3}
          space={2}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Text fontSize={"xl"} fontWeight={"semibold"}>
            Attendance Marked For
          </Text>
          <HStack w={"100%"}>
            <Text w={"25%"} fontSize={"md"} fontWeight={"semibold"}>
              Seminar
            </Text>
            <Text w={"5%"}>:</Text>

            <Text w={"70%"} fontSize={"md"}>
              {events?.getCpeEventById.name}
            </Text>
          </HStack>
          <HStack w={"100%"}>
            <Text w={"25%"} fontSize={"md"} fontWeight={"semibold"}>
              Message
            </Text>
            <Text w={"5%"}>:</Text>

            <Text w={"70%"} fontSize={"md"}>
              {responsedata}
            </Text>
          </HStack>

          <HStack w={"100%"}>
            <Text w={"25%"} fontSize={"md"} fontWeight={"semibold"}>
              Name
            </Text>
            <Text w={"5%"}>:</Text>
            <Text w={"70%"} fontSize={"md"}>
              {profile?.myProfileInformation?.firstName}{" "}
              {profile?.myProfileInformation?.middleName}{" "}
              {profile?.myProfileInformation?.lastName}
            </Text>
          </HStack>
        </VStack>

        <HStack alignItems="center" justifyContent="center" flex={1} space={4}>
          <Button
            borderRadius={10}
            bg={"#0f045d"}
            onPress={() => setScanned(false)}
          >
            Enter Code Again
          </Button>
          <Button borderRadius={10} bg={"#0f045d"} onPress={handlehome}>
            Event Home
          </Button>
        </HStack>
      </View>
    </>
  );
};

export default QRScanner;
