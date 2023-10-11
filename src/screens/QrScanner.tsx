import { useIsFocused } from "@react-navigation/native";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";
import _ from "lodash";
import Lottie from "lottie-react-native";
import { Box, Button, HStack, Text, VStack, View, useToast } from "native-base";
import { useEffect, useState } from "react";
import {
  useAddAttendenceMutation,
  useGetCpeEventByIdQuery,
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

  const { data: profile } = useMyProfileInformationQuery();
  const [addAttendence] = useAddAttendenceMutation();

  const { show } = useToast();

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    })();
  }, []);

  const handleBarCodeScanned = async ({ data }: { data: string }) => {
    setScanned(true);

    setInfo(data);

    console.log(data);

    const response = await addAttendence({
      variables: {
        options: {
          eventId: data,
          memberId: profile?.myProfileInformation?.membershipNo || "",
        },
      },
    });

    if (response.data?.addAttendence.success) {
      show({
        title: _.capitalize(response.data.addAttendence.msg),
        placement: "top",
      });

      setScanned(true);
    } else {
      show({
        title: _.capitalize(response.data?.addAttendence.msg || ""),
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

  const { data: events } = useGetCpeEventByIdQuery({
    variables: { options: { id: info || "" } },
  });

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
              Seminar ID
            </Text>
            <Text w={"10%"}>:</Text>
            <Text w={"60%"} fontSize={"md"}>
              {events?.getCpeEventById._id}
            </Text>
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
            <Text w={"60%"} fontSize={"md"}>
              {events?.getCpeEventById.name}
            </Text>
          </HStack>
        </VStack>
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
