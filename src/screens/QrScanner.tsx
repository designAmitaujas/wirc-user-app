import { useIsFocused } from "@react-navigation/native";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import * as Location from "expo-location";
import _ from "lodash";
import Lottie from "lottie-react-native";
import { Box, Button, HStack, Text, VStack, View, useToast } from "native-base";
import { useEffect, useState } from "react";
import {
  useAddAttendenceMutation,
  useGetAllCpeEventQuery,
  useMyProfileInformationQuery,
} from "../gql/graphql";

const QRScanner = () => {
  const isFocused = useIsFocused();

  if (isFocused === true) return <QRScreen />;

  return <></>;
};

function QRScreen() {
  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);
  const [info, setInfo] = useState("");
  const [location, setLocation] = useState<Location.LocationObject | null>(
    null
  );

  // const { data: events } = useGetCpeEventByIdQuery({
  //   variables: { options: { id: info || "" } },
  // });

  const { data: getevents } = useGetAllCpeEventQuery();

  const { data: profile } = useMyProfileInformationQuery();
  const [addAttendence] = useAddAttendenceMutation();

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

  console.log(location?.coords.latitude);
  console.log(location?.coords.longitude);

  const isWithinGeoFence = () => {
    if (!location || !getevents) {
      return false;
    }
    for (const event of getevents.getAllCpeEvent) {
      const R = 6371;
      const lat2 = event.lati;
      const lon2 = event.longi;

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

      console.log("Event:", event.name);
      console.log("Distance:", distance);

      // Round the distance for better comparison
      const roundedDistance = Math.round(distance * 1000); // in meters

      // Set your desired radius (in meters) for the geo-fence
      const geoFenceRadius = 1000; // 1 kilometer

      if (roundedDistance <= geoFenceRadius) {
        console.log("Within geo-fence!");
        return true;
      }
    }

    console.log("Not within geo-fence!");
    return false;
  };

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    if (!isWithinGeoFence()) {
      toast.show({
        title: "Not within geo-fence range",
        placement: "top",
      });
      setScanned(false); // Set scanned to true if you still want to prevent further scans
      return;
    }
    if (scanned) {
      toast.show({
        title: "Attendance already marked",
        placement: "top",
      });
      setScanned(false);
      return;
    }

    const response = await addAttendence({
      variables: {
        options: {
          eventId: data,
          memberId: profile?.myProfileInformation?.membershipNo || "",
        },
      },
    });

    if (response.data?.addAttendence.success) {
      toast.show({
        title: _.capitalize(response.data.addAttendence.msg),
        placement: "top",
      });
      setInfo(data);
      setScanned(true);
    } else {
      toast.show({
        title: _.capitalize(response.data?.addAttendence.msg),
        placement: "top",
      });
    }
  };

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

          <HStack mx={5} w={"100%"}>
            <Text w={"30%"} fontSize={"md"} fontWeight={"semibold"}>
              Seminar Location
            </Text>
            <Text w={"10%"}>:</Text>
            {getevents?.getAllCpeEvent
              .filter((item) => item._id === info)
              .map((item) => {
                return (
                  <>
                    <Text w={"60%"} fontSize={"md"}>
                      {item.location}
                    </Text>
                  </>
                );
              })}
            {/* <Text w={"60%"} fontSize={"md"}>
              {events?.getCpeEventById.location}
              
            </Text> */}
          </HStack>
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
          <HStack w={"100%"}>
            <Text w={"30%"} fontSize={"md"} fontWeight={"semibold"}>
              Seminar
            </Text>
            <Text w={"10%"}>:</Text>
            {getevents?.getAllCpeEvent
              .filter((item) => item._id === info)
              .map((item) => {
                return (
                  <>
                    <Text w={"60%"} fontSize={"md"}>
                      {item.name}
                    </Text>
                  </>
                );
              })}
            {/* <Text w={"60%"} fontSize={"md"}>
              {events?.getCpeEventById.name}
            </Text> */}
          </HStack>
        </VStack>
        {/* ) : (
          <>
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
                Thank you for scanning the QR code. It appears you haven't
                participated
              </Text>
            </VStack>
          </>
        )} */}
        <View
          position={"relative"}
          justifyContent={"flex-end"}
          alignItems={"center"}
          mb={30}
          flex={1}
        >
          <Button
            borderRadius={10}
            position={"absolute"}
            bg={"#0f045d"}
            onPress={() => setScanned(false)}
          >
            Scan Again
          </Button>
        </View>
      </View>
    </>
  );
}

export default QRScanner;
