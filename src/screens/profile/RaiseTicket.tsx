import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";

import _ from "lodash";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import { useEffect, useState } from "react";

import {
  IUserInfoByMembershipNumber,
  useGetMemberInfoByMembershipNumberMutation,
} from "../../gql/graphql";

const RestHeader = () => {
  const { goBack } = useNavigation();
  return (
    <HStack
      backgroundColor="#0f045d"
      borderBottomLeftRadius="25"
      borderBottomRightRadius="25"
      py="3"
      space={5}
      alignItems="center"
      w="100%"
    >
      <Button
        bg="transparent"
        colorScheme={"white"}
        w="12%"
        ml={2}
        onPress={goBack}
        leftIcon={
          <Icon
            size="md"
            as={<FontAwesome5 name="arrow-left" />}
            color="white"
          />
        }
      />
      <Text color="white" fontSize="22" fontWeight="bold" mb={1} w={"80%"}>
        Raise Ticket
      </Text>
    </HStack>
  );
};

const RaisedTicket = () => {
  const isFocused = useIsFocused();

  if (isFocused === true) return <QRScreen />;

  return <></>;
};

const QRScreen = () => {
  const [getData] = useGetMemberInfoByMembershipNumberMutation();

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);
  const [info, setInfo] = useState("");
  const [info1, setInfo1] = useState<IUserInfoByMembershipNumber | null>(null);

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

    const response = await getData({
      variables: {
        options: {
          id: data,
        },
      },
    });

    if (response.data?.getMemberInfoByMembershipNumber) {
      show({
        title: _.capitalize("scanned successfully"),
        placement: "top",
      });
      setInfo1(response.data.getMemberInfoByMembershipNumber);
      setScanned(true);
    } else {
      show({
        title: _.capitalize("QR code Scan is incorrect"),
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
      <ScrollView>
        <Center mt={5} mb={10}>
          <VStack>
            <VStack bg={"#313031"} shadow={9} m={5}>
              <Box borderColor={"white"} m={4}>
                <Divider bgColor={"#fff"} w={32} position={"absolute"} />
                <Divider
                  bgColor={"#fff"}
                  w={24}
                  position={"absolute"}
                  mt={4}
                  ml={4}
                />
                <Divider
                  bgColor={"#fff"}
                  orientation="vertical"
                  h={24}
                  position={"absolute"}
                />
                <Divider
                  mt={4}
                  ml={4}
                  bgColor={"#fff"}
                  orientation="vertical"
                  h={16}
                  position={"absolute"}
                />
                <VStack pb={1} pr={2} pt={20} alignSelf={"flex-end"}>
                  <Image
                    alignSelf={"flex-end"}
                    mr={3}
                    w={"12"}
                    h={"12"}
                    resizeMode="contain"
                    alt="Image not found"
                    source={require("../../../assets/amitaujas.png")}
                  />
                  <Text
                    alignSelf={"flex-end"}
                    color={"#fff"}
                    fontSize={"lg"}
                    fontWeight={"thin"}
                    letterSpacing={"4"}
                    textTransform={"uppercase"}
                  >
                    {info1?.organization}
                  </Text>
                </VStack>
              </Box>
            </VStack>

            <VStack bg={"#fff"} shadow={9} justifyContent={"center"} m={5}>
              <HStack w={"100%"}>
                <VStack w={"70%"} alignItems={"flex-start"} p={2}>
                  <Text
                    color={"#313031"}
                    fontSize={"lg"}
                    fontWeight={"thin"}
                    letterSpacing={"1.5"}
                    textTransform={"uppercase"}
                  >
                    {info1?.name}
                  </Text>

                  <VStack
                    alignItems={"flex-start"}
                    space={1.5}
                    mt={3}
                    w={"85%"}
                  >
                    <HStack space={2} alignItems={"center"}>
                      <Ionicons name="call" size={15} color="#313031" />
                      <Text fontSize={10} fontWeight={"thin"}>
                        {info1?.contactInfo}
                      </Text>
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Ionicons name="mail" size={16} color="#313031" />
                      <Text fontSize={10} fontWeight={"thin"}>
                        {info1?.email}
                      </Text>
                    </HStack>
                    {/* <HStack space={2} alignItems={"center"}>
                      <Ionicons
                        name="ios-globe-sharp"
                        size={16}
                        color="#313031"
                      />
                      <Text fontSize={10} fontWeight={"thin"}>
                        {info1.}
                      </Text>
                    </HStack> */}
                    <HStack space={2}>
                      <Ionicons name="location" size={16} color="#313031" />
                      <Text
                        fontSize={10}
                        fontWeight={"thin"}
                        textAlign={"justify"}
                      >
                        {info1?.address}
                      </Text>
                    </HStack>
                  </VStack>
                </VStack>
                <VStack
                  // space={3}
                  bg={"#313031"}
                  // justifyContent={"center"}
                  w={"30%"}
                >
                  <Box m={3}>
                    <Divider
                      bgColor={"#fff"}
                      w={10}
                      // position={"absolute"}
                      alignSelf={"flex-end"}
                    />
                    <Divider
                      bgColor={"#fff"}
                      mt={2}
                      mr={2}
                      w={6}
                      // position={"absolute"}
                      alignSelf={"flex-end"}
                    />
                    <Divider
                      alignSelf={"flex-end"}
                      bgColor={"#fff"}
                      orientation="vertical"
                      h={10}
                      position={"absolute"}
                    />
                    <Divider
                      marginTop={-0.7}
                      alignSelf={"flex-end"}
                      bgColor={"#fff"}
                      orientation="vertical"
                      h={6}
                      mt={2}
                      mr={2}
                      // position={"absolute"}
                    />
                  </Box>
                  <VStack space={3}>
                    <Image
                      alignSelf={"center"}
                      w={"8"}
                      h={"8"}
                      resizeMode="contain"
                      alt="Image not found"
                      source={require("../../../assets/amitaujas.png")}
                    />
                  </VStack>
                </VStack>
              </HStack>
            </VStack>
          </VStack>
        </Center>
      </ScrollView>
    </>
  );
};

export default RaisedTicket;
