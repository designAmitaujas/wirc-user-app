import {
  useIsFocused,
  useNavigation,
  useRoute,
} from "@react-navigation/native";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import * as Location from "expo-location";
import _, { debounce } from "lodash";
import Lottie from "lottie-react-native";
import { Box, Button, HStack, Text, VStack, View, useToast } from "native-base";
import { useEffect, useState } from "react";
import {
  useAddAttendenceMutation,
  useGetCpeEventByIdQuery,
  useMyProfileInformationQuery,
} from "../gql/graphql";

const QRScanner: React.FC = () => {
  const isFocused = useIsFocused();
  const navigation = useNavigation();

  return isFocused ? <QRScreen /> : null;
};

const QRScreen: React.FC = () => {
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
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

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);

  const isWithinGeoFence = () => {
    if (!location || !events) {
      return false;
    }

    let withinGeoFence = false;

    const R = 6371;
    const lat2 = events.getCpeEventById.lati;
    const lon2 = events.getCpeEventById.longi;
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

    const geoFenceRadius = 500; // 1 kilometer
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

  const handleBarCodeScanned = debounce(async ({ data }: { data: string }) => {
    try {
      // Check if already scanned
      if (scanned) {
        toast.show({
          title: "Attendance already marked",
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

      const currentDateTime = new Date();
      const eventStartTime = events?.getCpeEventById.time1
        ? new Date(events.getCpeEventById.time1)
        : new Date();
      const isStartTimeScan = currentDateTime < eventStartTime;

      const response = await addAttendence({
        variables: {
          options: {
            eventId: data,
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
        setInfo(data);
        setScanned(true);
        if (isStartTimeScan) {
          console.log("Handling half attendance scan at the start time...");
        } else {
          console.log("Handling full attendance scan at the end time...");
        }
      } else {
        toast.show({
          title: _.capitalize(response.data?.addAttendence.msg),
          placement: "top",
        });
      }
    } catch (error) {
      console.error("Error handling barcode scan:", error);
    }
  }, 1000);
  if (hasPermission === null) {
    return <Text>Requesting camera permission...</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  if (!scanned) {
    return (
      <>
        <View flex={1} justifyContent={"center"} alignItems={"center"}>
          <Text fontSize={"2xl"} fontWeight={"semibold"} textAlign={"center"}>
            Scanned QR{"\n"}For Attendance
          </Text>

          <BarCodeScanner
            style={{
              width: "80%",
              height: "60%",
            }}
            onBarCodeScanned={handleBarCodeScanned}
          />
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
            <Text w={"30%"} fontSize={"md"} fontWeight={"semibold"}>
              Seminar
            </Text>
            <Text w={"10%"}>:</Text>

            <Text w={"60%"} fontSize={"md"}>
              {events?.getCpeEventById.name}
            </Text>
          </HStack>
          {/* <HStack mx={5} w={"100%"}>
            <Text w={"30%"} fontSize={"md"} fontWeight={"semibold"}>
              Seminar Location
            </Text>
            <Text w={"10%"}>:</Text>

            <Text w={"60%"} fontSize={"md"}>
              {events?.getCpeEventById.location}
            </Text>
          </HStack> */}
          <HStack w={"100%"}>
            <Text w={"30%"} fontSize={"md"} fontWeight={"semibold"}>
              Name
            </Text>
            <Text w={"10%"}>:</Text>
            <Text w={"60%"} fontSize={"md"}>
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
            Scan Again
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
