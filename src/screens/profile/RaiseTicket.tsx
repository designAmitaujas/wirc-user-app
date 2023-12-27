import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { BarCodeScanner, PermissionStatus } from "expo-barcode-scanner";

import { MaterialCommunityIcons } from "@expo/vector-icons";
import _ from "lodash";
import {
  Box,
  Button,
  Center,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Spinner,
  Text,
  VStack,
  View,
  useColorModeValue,
  useToast,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import { SceneMap, TabView } from "react-native-tab-view";

import QRCode from "react-native-qrcode-svg";
import {
  IUserInfoByMembershipNumber2,
  useGetAllSkillsQuery,
  useGetMemberInfoByMembershipNumber2Mutation,
  useGetMySkillListLazyQuery,
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
        Member Details
      </Text>
    </HStack>
  );
};

const FirstRoute: React.FC<{
  data: IUserInfoByMembershipNumber2;
  dataArr: Array<string>;
}> = ({ data, dataArr }) => {
  if (!data || !dataArr) {
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
  }
  return (
    <>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Center mt={5} mb={10}>
          <VStack>
            <VStack bg={"#fff"} shadow={9} m={5}>
              <Box h={5} w={"45%"} bg={"#4f7329"} />
              <VStack p={7}>
                <Image
                  alignSelf={"center"}
                  w={"40%"}
                  h={"16"}
                  alt="Image not found"
                  source={require("../../../assets/75ici.png")}
                />
                <Text
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                  alignSelf={"center"}
                  color={"#4f7329"}
                  textTransform={"uppercase"}
                >
                  {data.organization || ""}
                </Text>
                {/* <Text
                  alignSelf={"center"}
                  color={"#7bc231"}
                  textTransform={"uppercase"}
                >
                  Where expectation meets solutions !
                </Text> */}
              </VStack>
              <Box
                h={5}
                w={"45%"}
                bg={"#4f7329"}
                alignSelf={"flex-end"}
                justifyContent={"flex-end"}
              />
            </VStack>

            <VStack bg={"#fff"} shadow={9} justifyContent={"center"} m={5}>
              <HStack w={"100%"}>
                <VStack bg={"#4f7329"} justifyContent={"center"} w={"35%"}>
                  <VStack space={5} p={2}>
                    <Image
                      alignSelf={"center"}
                      w={"10"}
                      h={"10"}
                      borderRadius="md"
                      resizeMode="contain"
                      alt="Image not found"
                      source={require("../../../assets/75ici.png")}
                    />
                    <Box alignSelf={"center"} mb={4}>
                      <QRCode
                        size={80}
                        value={data.membershipNo || ""}
                        color={"#4f7329"}
                      />
                    </Box>
                  </VStack>
                </VStack>
                <VStack w={"65%"} alignItems={"flex-end"} p={3}>
                  <Text
                    color={"#4f7329"}
                    fontSize={"lg"}
                    fontWeight={"semibold"}
                    textTransform={"uppercase"}
                  >
                    {data.name || ""}
                  </Text>

                  {dataArr.length > 0 && (
                    <Text
                      color={"#7bc231"}
                      fontWeight={"semibold"}
                      fontSize={"9"}
                      textTransform={"uppercase"}
                    >
                      {dataArr.slice(0, 2).join(" | ")}
                    </Text>
                  )}

                  <VStack alignItems={"flex-end"} space={1.5} mt={3} w={"85%"}>
                    <HStack space={2} alignItems={"center"}>
                      <Text fontSize={10} textAlign={"right"}>
                        {data.contactInfo || ""}
                      </Text>

                      <Ionicons name="call" size={15} color="#4f7126" />
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Text fontSize={10} textAlign={"right"}>
                        {data.email || ""}
                      </Text>

                      <Ionicons name="mail" size={16} color="#4f7126" />
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Text fontSize={10} textAlign={"right"}>
                        {data.city || ""}
                      </Text>

                      <Ionicons
                        name="ios-globe-sharp"
                        size={16}
                        color="#4f7126"
                      />
                    </HStack>
                    <HStack space={2}>
                      <Text
                        fontSize={10}
                        textAlign={"right"}
                        // textAlign={"justify"}
                      >
                        {data.address}
                      </Text>
                      <Ionicons name="location" size={16} color="#4f7126" />
                    </HStack>
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

const SecondRoute: React.FC<{
  data: IUserInfoByMembershipNumber2;
  dataArr: Array<string>;
}> = ({ data, dataArr }) => {
  if (!data || !dataArr) {
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
  }

  return (
    <>
      <ScrollView>
        <Center mt={5} mb={10}>
          <VStack>
            <VStack m={5} bg={"#fff"} shadow={9}>
              <Box
                borderTopWidth={1}
                borderLeftWidth={1}
                borderRightWidth={1}
                // borderBottomWidth={1}

                m={4}
                borderColor={"#cd6d44"}
              >
                <VStack p={7}>
                  <Image
                    alignSelf={"center"}
                    w={"40%"}
                    h={"16"}
                    alt="Image not found"
                    source={require("../../../assets/75ici.png")}
                  />
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"lg"}
                    alignSelf={"center"}
                    color={"#e66d3e"}
                    textTransform={"uppercase"}
                  >
                    {data.organization || ""}
                  </Text>
                  {/* <Text
                    alignSelf={"center"}
                    color={"#ba7f62"}
                    fontSize={"xs"}
                    textAlign={"center"}
                    textTransform={"uppercase"}
                  >
                    Where expectation meets solutions !
                  </Text> */}
                </VStack>
                <HStack justifyContent={"space-between"}>
                  <Divider w={"30%"} bgColor={"#cd6d44"} />
                  <Divider w={"30%"} bgColor={"#cd6d44"} />
                </HStack>
              </Box>
            </VStack>
            <VStack m={5} bg={"#f3754d"} shadow={9}>
              <HStack
                borderTopWidth={1}
                // borderLeftWidth={1}
                borderRightWidth={1}
                borderBottomWidth={1}
                m={4}
                borderColor={"#fff"}
                // w={"100%"}
              >
                <Box w={"40%"}>
                  <VStack position={"relative"}>
                    <Divider
                      bgColor={"#fff"}
                      orientation="vertical"
                      h={3}
                      position={"absolute"}
                    />
                  </VStack>
                  <Box bg={"#fff"} w={32} mt={5} ml={-4}>
                    {/* <HStack space={1} p={2} w={"60%"}> */}
                    <Text
                      p={1}
                      ml={2}
                      color={"#16202b"}
                      fontSize={"sm"}
                      fontWeight={"normal"}
                      textTransform={"uppercase"}
                    >
                      {data.name}
                    </Text>
                  </Box>
                  {dataArr.length > 0 && (
                    <Text
                      mt={1}
                      textAlign={"justify"}
                      mr={2}
                      ml={-1}
                      color={"#fff"}
                      fontWeight={"normal"}
                      fontSize={"8"}
                      textTransform={"uppercase"}
                    >
                      {dataArr.slice(0, 2).join(" | ")}
                    </Text>
                  )}

                  <Box ml={4} mb={-8} mt={4}>
                    <QRCode color="black" size={80} value={data.membershipNo} />
                  </Box>
                  {/* </VStack> */}
                  <VStack position={"relative"}>
                    <Divider
                      bgColor={"#fff"}
                      orientation="vertical"
                      h={20}
                      mt={-8}
                      // position={"absolute"}
                    />
                  </VStack>
                </Box>
                <VStack w={"60%"} alignItems={"flex-start"} p={2}>
                  <VStack space={1.5} mt={3} w={"85%"}>
                    <HStack space={2} alignItems={"center"}>
                      <Ionicons name="call" size={15} color="#fff" />
                      <Text fontSize={10} color="#fff">
                        {data.contactInfo}
                      </Text>
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Ionicons name="mail" size={16} color="#fff" />
                      <Text fontSize={10} color="#fff">
                        {data.email}
                      </Text>
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Ionicons name="ios-globe-sharp" size={16} color="#fff" />
                      <Text fontSize={10} color="#fff">
                        {data.city || ""}
                      </Text>
                    </HStack>
                    <HStack space={2}>
                      <Ionicons name="location" size={16} color="#fff" />
                      <Text fontSize={10} color="#fff" textAlign={"justify"}>
                        {data.address}
                      </Text>
                    </HStack>
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

const ThirdRoute: React.FC<{
  data: IUserInfoByMembershipNumber2;
  dataArr: Array<string>;
}> = ({ data, dataArr }) => {
  if (!data || !dataArr) {
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
                    borderRadius="full"
                    w={"24"}
                    h={"16"}
                    mr={-2}
                    alt="Image not found"
                    source={require("../../../assets/c5.png")}
                  />
                  <Text
                    mr={4}
                    alignSelf={"flex-end"}
                    color={"#fff"}
                    fontSize={"lg"}
                    fontWeight={"thin"}
                    letterSpacing={"4"}
                    textTransform={"uppercase"}
                  >
                    {data.organization}
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
                    {data.name}
                  </Text>
                  {dataArr.length > 0 && (
                    <Text
                      color={"gray.400"}
                      fontWeight={"thin"}
                      fontSize={"9"}
                      textTransform={"uppercase"}
                    >
                      {dataArr.slice(0, 2).join(" | ")}
                    </Text>
                  )}

                  <VStack
                    alignItems={"flex-start"}
                    space={1.5}
                    mt={3}
                    w={"85%"}
                  >
                    <HStack space={2} alignItems={"center"}>
                      <Ionicons name="call" size={15} color="#313031" />
                      <Text fontSize={10} fontWeight={"thin"}>
                        {data.contactInfo}
                      </Text>
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Ionicons name="mail" size={16} color="#313031" />
                      <Text fontSize={10} fontWeight={"thin"}>
                        {data.email}
                      </Text>
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Ionicons
                        name="ios-globe-sharp"
                        size={16}
                        color="#313031"
                      />
                      <Text fontSize={10} fontWeight={"thin"}>
                        {data.city || ""}
                      </Text>
                    </HStack>
                    <HStack space={2}>
                      <Ionicons name="location" size={16} color="#313031" />
                      <Text
                        fontSize={10}
                        fontWeight={"thin"}
                        textAlign={"justify"}
                      >
                        {data.address}
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
                      w={"10"}
                      h={"10"}
                      borderRadius="full"
                      resizeMode="contain"
                      alt="Image not found"
                      source={require("../../../assets/75ici.png")}
                    />
                    <Box alignSelf={"center"} mb={4}>
                      <QRCode
                        color="black"
                        value={data.membershipNo}
                        size={80}
                      />
                    </Box>
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

const ForthRoute: React.FC<{
  data: IUserInfoByMembershipNumber2;
  dataArr: Array<string>;
}> = ({ data, dataArr }) => {
  if (!data || !dataArr) {
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
  }
  return (
    <>
      <ScrollView>
        <Center mt={5} mb={10}>
          <VStack>
            <VStack bg={"#385ca6"} shadow={9} m={5}>
              <VStack p={8}>
                <HStack
                  space={1}
                  pt={5}
                  alignItems={"center"}
                  alignSelf={"center"}
                  pr={3}
                >
                  <Image
                    w={"24"}
                    h={"16"}
                    bg={"#385ca6"}
                    alt="Image not found"
                    source={require("../../../assets/c6.png")}
                  />
                  <Heading
                    color={"#fff"}
                    mb={2}
                    fontWeight={"thin"}
                    fontSize="lg"
                    // textTransform={"uppercase"}
                    textAlign="center"
                    letterSpacing={"2xl"}
                  >
                    {data.organization}
                  </Heading>
                </HStack>
                <VStack space={1.5} mt={5} alignSelf={"center"}>
                  <Divider
                    bg={"white"}
                    w={"24"}
                    alignSelf={"center"}
                    thickness={"0.7"}
                  />

                  <Divider
                    bg={"white"}
                    w={"16"}
                    alignSelf={"center"}
                    thickness={"0.7"}
                  />
                  <Text
                    mt={2}
                    color={"white"}
                    fontSize={"11"}
                    textAlign={"center"}
                  >
                    {data.email}
                  </Text>
                </VStack>
              </VStack>
            </VStack>
            <VStack bg={"#fff"} shadow={9} justifyContent={"center"} m={5}>
              <HStack w={"100%"}>
                <VStack bg={"white"} justifyContent={"center"} w={"40%"}>
                  <VStack space={5}>
                    <Image
                      alignSelf={"center"}
                      w={"12"}
                      h={"8"}
                      alt="Image not found"
                      source={require("../../../assets/75ici.png")}
                    />
                    <Box alignSelf={"center"} mb={4}>
                      <QRCode color="#385ca6" value={data.membershipNo} />
                    </Box>
                  </VStack>
                </VStack>
                <HStack w={"3%"}>
                  <Divider
                    bg={"#385ca6"}
                    h={24}
                    mr={1}
                    mt={10}
                    thickness={"0.7"}
                    orientation="vertical"
                  />
                  <Divider
                    bg={"#385ca6"}
                    h={24}
                    ml={1}
                    mt={16}
                    thickness={"0.7"}
                    orientation="vertical"
                  />
                </HStack>
                <VStack w={"57%"} alignItems={"flex-end"} p={3}>
                  <Text
                    color={"#385ca6"}
                    fontSize={"md"}
                    fontWeight={"semibold"}
                    textTransform={"uppercase"}
                  >
                    {data.name}
                  </Text>
                  {dataArr.length > 0 && (
                    <Text
                      color={"#385ca6"}
                      fontWeight={"normal"}
                      fontSize={"9"}
                      textTransform={"uppercase"}
                    >
                      {dataArr.slice(0, 2).join(" | ")}
                    </Text>
                  )}
                  <Divider bg={"#385ca6"} w={"9"} mt={2} thickness={"0.7"} />
                  <VStack alignItems={"flex-end"} space={1.5} mt={3} w={"85%"}>
                    <HStack space={2} alignItems={"center"}>
                      <Text fontSize={10} textAlign={"right"} color={"#385ca6"}>
                        {data.contactInfo}
                      </Text>

                      <Ionicons name="call" size={15} color="#385ca6" />
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Text fontSize={10} textAlign={"right"} color={"#385ca6"}>
                        {data.email}
                      </Text>

                      <Ionicons name="mail" size={16} color="#385ca6" />
                    </HStack>
                    <HStack space={2} alignItems={"center"}>
                      <Text fontSize={10} textAlign={"right"} color={"#385ca6"}>
                        {data.city || ""}
                      </Text>

                      <Ionicons
                        name="ios-globe-sharp"
                        size={16}
                        color="#385ca6"
                      />
                    </HStack>
                    <HStack space={2}>
                      <Text
                        fontSize={10}
                        textAlign={"right"}
                        color={"#385ca6"}
                        // textAlign={"justify"}
                      >
                        {data.address}
                      </Text>
                      <Ionicons name="location" size={16} color="#385ca6" />
                    </HStack>
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

const FifthRoute: React.FC<{
  data: IUserInfoByMembershipNumber2;
  dataArr: Array<string>;
}> = ({ data, dataArr }) => {
  if (!data || !dataArr) {
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
  }
  return (
    <>
      <ScrollView>
        <Center mt={5} mb={10}>
          <VStack>
            <VStack bg={"#62A8C7"} shadow={9} m={5}>
              <VStack p={12} space={1} alignSelf={"center"}>
                <Image
                  mt={2}
                  alignSelf={"center"}
                  w={"32"}
                  h={"16"}
                  alt="Image not found"
                  source={require("../../../assets/c7.png")}
                />
                <Divider
                  bg={"white"}
                  w={"24"}
                  alignSelf={"center"}
                  thickness={"0.7"}
                />

                <Divider
                  bg={"white"}
                  w={"16"}
                  alignSelf={"center"}
                  thickness={"0.7"}
                />
                <Heading
                  color={"#fff"}
                  mb={2}
                  fontWeight={"thin"}
                  fontSize="lg"
                  // textTransform={"uppercase"}
                  textAlign="center"
                  letterSpacing={"2xl"}
                >
                  {data.organization}
                </Heading>
              </VStack>
            </VStack>
            <VStack bg={"#fff"} shadow={9} justifyContent={"center"} m={5}>
              <VStack p={3}>
                <Text
                  color="#424242"
                  fontSize={"lg"}
                  textAlign={"center"}
                  fontWeight={"thin"}
                  textTransform={"uppercase"}
                >
                  {data.name}
                </Text>
                {dataArr.length > 0 && (
                  <Text
                    color={"#9E9E9E"}
                    fontWeight={"thin"}
                    textAlign={"center"}
                    fontSize={"10"}
                    textTransform={"uppercase"}
                  >
                    {dataArr.slice(0, 2).join(" | ")}
                  </Text>
                )}
              </VStack>
              <HStack w={"100%"}>
                <VStack bg={"white"} justifyContent={"center"} w={"35%"}>
                  <Box alignSelf={"center"} mb={4}>
                    <QRCode
                      color="#424242"
                      value={data.membershipNo}
                      size={80}
                    />
                  </Box>
                </VStack>

                <VStack w={"65%"} p={3}>
                  <VStack space={1.5} w={"85%"}>
                    <HStack space={2}>
                      <Ionicons name="call" size={15} color="#424242" />
                      <Text fontSize={10} color={"#9E9E9E"} fontWeight={"thin"}>
                        {data.contactInfo}
                      </Text>
                    </HStack>
                    <HStack space={2}>
                      <Ionicons name="mail" size={16} color="#424242" />
                      <Text fontSize={10} color={"#9E9E9E"} fontWeight={"thin"}>
                        {data.email}
                      </Text>
                    </HStack>
                    <HStack space={2}>
                      <Ionicons
                        name="ios-globe-sharp"
                        size={16}
                        color="#424242"
                      />
                      <Text fontSize={10} color={"#9E9E9E"} fontWeight={"thin"}>
                        {data.city || ""}
                      </Text>
                    </HStack>
                    <HStack space={2}>
                      <Ionicons name="location" size={16} color="#424242" />
                      <Text
                        fontSize={10}
                        color={"#9E9E9E"}
                        fontWeight={"thin"}
                        textAlign={"justify"}
                      >
                        {data.address}
                      </Text>
                    </HStack>
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

const initialLayout = {
  width: Dimensions.get("window").width,
};

const VisitingCard: React.FC<{
  data: IUserInfoByMembershipNumber2;
  dataArr: Array<string>;
}> = ({ data, dataArr }) => {
  const renderScene = SceneMap({
    first: () => <FirstRoute data={data} dataArr={dataArr} />,
    second: () => <SecondRoute data={data} dataArr={dataArr} />,
    third: () => <ThirdRoute data={data} dataArr={dataArr} />,
    forth: () => <ForthRoute data={data} dataArr={dataArr} />,
    fifth: () => <FifthRoute data={data} dataArr={dataArr} />,
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {
      key: "first",
      // title: "Transactions",
      icon: (
        <MaterialCommunityIcons
          name="numeric-1-circle"
          size={24}
          color="#0f045d"
        />
      ),
    },
    {
      key: "second",
      // title: "Offers",
      icon: (
        <MaterialCommunityIcons
          name="numeric-2-circle"
          size={24}
          color="#0f045d"
        />
      ),
    },
    {
      key: "third",
      // title: "Offers",
      icon: (
        <MaterialCommunityIcons
          name="numeric-3-circle"
          size={24}
          color="#0f045d"
        />
      ),
    },
    {
      key: "forth",
      // title: "Offers",
      icon: (
        <MaterialCommunityIcons
          name="numeric-4-circle"
          size={24}
          color="#0f045d"
        />
      ),
    },
    {
      key: "fifth",
      // title: "Offers",
      icon: (
        <MaterialCommunityIcons
          name="numeric-5-circle"
          size={24}
          color="#0f045d"
        />
      ),
    },
  ]);

  const renderTabBar = (props: {
    navigationState: { routes: any[] };
    position: {
      interpolate: (arg0: { inputRange: any; outputRange: any }) => any;
    };
  }) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" bg={"white"}>
        {props.navigationState.routes.map(
          (route: { icon: any }, i: React.SetStateAction<number>) => {
            const opacity = props.position.interpolate({
              inputRange,
              outputRange: inputRange.map(
                (inputIndex: React.SetStateAction<number>) =>
                  inputIndex === i ? 1 : 0.5
              ),
            });
            const color =
              index === i
                ? useColorModeValue("#0f045d", "#0f045d")
                : useColorModeValue("#fff", "#fff");
            const borderColor =
              index === i
                ? "#0f045d"
                : useColorModeValue("coolGray.200", "gray.400");
            return (
              <Box
                borderBottomWidth={2.5}
                borderColor={borderColor}
                flex={1}
                alignItems="center"
                p="3"
              >
                <Pressable
                  onPress={() => {
                    setIndex(i);
                  }}
                >
                  <Box>
                    <HStack
                      space={2}
                      alignItems={"center"}
                      justifyContent={"center"}
                    >
                      <View>{route.icon}</View>
                      {/* <Text fontSize={"md"} fontWeight={"semibold"}>
                      {route.title}
                    </Text> */}
                    </HStack>
                  </Box>
                </Pressable>
              </Box>
            );
          }
        )}
      </Box>
    );
  };

  return (
    <>
      <View bg={"white"} flex={1}>
        <RestHeader />
        <TabView
          navigationState={{
            index,
            routes,
          }}
          renderScene={renderScene}
          renderTabBar={renderTabBar}
          onIndexChange={setIndex}
          initialLayout={initialLayout}
        />
      </View>
    </>
  );
};

const RaisedTicket = () => {
  const isFocused = useIsFocused();

  if (isFocused === true) return <QRScreen />;

  return <></>;
};

const QRScreen = () => {
  const [getData] = useGetMemberInfoByMembershipNumber2Mutation();

  const [hasPermission, setHasPermission] = useState<boolean>(false);
  const [scanned, setScanned] = useState(false);
  const [info, setInfo] = useState("");
  const [info1, setInfo1] = useState<IUserInfoByMembershipNumber2>();

  const { show } = useToast();

  const { data: skill, refetch, loading: l1 } = useGetAllSkillsQuery();
  const [getMySkillList] = useGetMySkillListLazyQuery();
  const [dataArr, setDataArr] = useState<Array<string>>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getMySkillList({
          variables: {
            options: {
              id: info.padStart(6, "0") || "",
            },
          },
        });

        if (response.data) {
          const sortedCollection = _.sortBy(
            response.data.getMySkillList,
            (item) => dataArr.indexOf(item.skills?.name || "")
          );
        }
      } catch (error) {
        console.error("Error fetching my skill list:", error);
      }
    };

    fetchData();
  }, [dataArr, getMySkillList]);

  useEffect(() => {
    const tempArry = skill?.getAllSkills.map((item) => item.name) || [];
    setDataArr(tempArry);
  }, [skill]);

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

    if (response.data?.getMemberInfoByMembershipNumber2) {
      show({
        title: _.capitalize("scanned successfully"),
        placement: "top",
      });
      setInfo1(response.data?.getMemberInfoByMembershipNumber2);
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
            Get the Member Details
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
  console.log(info1);
  return (
    <>
      <VisitingCard
        //@ts-ignore
        data={info1}
        dataArr={dataArr}
      />
    </>
  );
};

export default RaisedTicket;
