import React, { useState, useEffect } from "react";
import { Text, View, Button, HStack, VStack } from "native-base";
import { BarCodeScanner } from "expo-barcode-scanner";
import { Box } from "native-base";
import { StyleSheet } from "react-native";
import Lottie from "lottie-react-native";
import Qrcodes from "./profile/Qrcode";
import { useIsFocused } from "@react-navigation/native";

const QRScanner = () => {
  const isFocused = useIsFocused();

  if (isFocused === true) return <QRScreen />;

  return <></>;
};

function QRScreen() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [info, setInfo] = useState(null);
  const [info1, setInfo1] = useState(null);
  const [info2, setInfo2] = useState(null);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);

  const handleBarCodeScanned = ({ data }) => {
    setScanned(true);

    setInfo(data);

    // Handle scanned QR code here
  };

  const handleScanAgain = () => {
    console.log("Handle Scan ???");
    setScanned(false);
  };

  const renderScanner = () => {
    if (!scanned) {
      return <BarCodeScanner onBarCodeScanned={handleBarCodeScanned} />;
    } else {
      return (
        <View>
          <Text>QR Code scanned!</Text>
          <Button onPress={() => console.log("Scannned")}>Scan Again</Button>
        </View>
      );
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
              Seminar ID
            </Text>
            <Text w={"10%"}>:</Text>
            <Text w={"60%"} fontSize={"md"}>
              {info}
            </Text>
          </HStack>
          <HStack w={"100%"}>
            <Text w={"30%"} fontSize={"md"} fontWeight={"semibold"}>
              Name
            </Text>
            <Text w={"10%"}>:</Text>
            <Text w={"60%"} fontSize={"md"}>
              Anomynous Shah
            </Text>
          </HStack>
          <HStack w={"100%"}>
            <Text w={"30%"} fontSize={"md"} fontWeight={"semibold"}>
              Seminar
            </Text>
            <Text w={"10%"}>:</Text>
            <Text w={"60%"} fontSize={"md"}>
              Tech Edge Series (Virtual)
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
