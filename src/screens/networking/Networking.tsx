import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import moment from "moment";
import {
  Badge,
  Box,
  Button,
  Divider,
  FlatList,
  HStack,
  Icon,
  Image,
  Input,
  Modal,
  Pressable,
  ScrollView,
  Select,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Linking, Platform } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import AnimatedSearchBar from "./Search";

const RestHeader = () => {
  // const { goBack } = useNavigation();
  const { goBack } = useNavigation();
  const { navigate } = useNavigation();

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
          Members Networking
        </Text>
      </HStack>
    </>
  );
};

interface skillType {
  name: string;
}

const ParticipantsCard: React.FC<{
  name: string;
  position: string;
  gender: string;
  email: string;
  mo_number: number;
  skills: skillType[];
}> = ({ name, position, gender, email, mo_number, skills }) => {
  // console.log(mo_number);

  const [showModal, setShowModal] = useState(false);
  const phonecall = () => {
    // console.log("first", mo_number);
    Linking.openURL(`tel:${mo_number.toString()}`);
  };

  return (
    <>
      {gender === "male" ? (
        <VStack
          shadow={5}
          style={{ shadowColor: "blue" }}
          bg={"white"}
          borderRadius={15}
          w={"45%"}
          p={1}
        >
          <Image
            w={"10"}
            h={"10"}
            alignSelf={"center"}
            resizeMode="contain"
            alt="Image not found"
            source={require("../../../assets/male.png")}
          />
          <Text fontWeight={"semibold"} alignSelf={"center"}>
            {name}
          </Text>
          <Text color={"gray.500"} fontSize={"xs"} alignSelf={"center"}>
            {position}
          </Text>

          <Divider marginY={2} />
          <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity onPress={phonecall}>
              <Ionicons name="call-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons
                name="ios-person-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </HStack>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            _backdrop={{
              _dark: {
                bg: "coolGray.800",
              },
              bg: "warmGray.900",
            }}
          >
            <Modal.Content w={"90%"} borderRadius={15}>
              <Modal.CloseButton />
              <Modal.Header>Profile</Modal.Header>
              <Modal.Body>
                <VStack space={2}>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Name
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{name}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Position
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{position}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Email
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{email}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Mobile No.
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{mo_number}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Skills
                    </Text>
                    <Text w={"10%"}>:</Text>
                    {/* <Text >{}</Text> */}
                    <FlatList
                      data={skills}
                      renderItem={({ item }) => {
                        return (
                          <Badge
                            my={1}
                            variant={"solid"}
                            colorScheme={"lightBlue"}
                            borderRadius={8}
                          >
                            {item.name}
                          </Badge>
                        );
                      }}
                    />
                    {/* {skills.map((item) => (
                        <Badge
                          variant={"solid"}
                          colorScheme={"lightBlue"}
                          borderRadius={8}
                        >
                          {item.name}
                        </Badge>
                      ))} */}
                  </HStack>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </VStack>
      ) : gender === "female" ? (
        <VStack
          shadow={5}
          style={{ shadowColor: "red" }}
          bg={"white"}
          borderRadius={15}
          w={"45%"}
          p={1}
        >
          <Image
            w={"10"}
            h={"10"}
            alignSelf={"center"}
            resizeMode="contain"
            alt="Image not found"
            source={require("../../../assets/female.png")}
          />
          <Text fontWeight={"semibold"} alignSelf={"center"}>
            {name}
          </Text>
          <Text color={"gray.500"} fontSize={"xs"} alignSelf={"center"}>
            {position}
          </Text>

          <Divider marginY={2} />
          <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity onPress={phonecall}>
              <Ionicons name="call-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons
                name="ios-person-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </HStack>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            _backdrop={{
              _dark: {
                bg: "coolGray.800",
              },
              bg: "warmGray.900",
            }}
          >
            <Modal.Content w={"90%"} borderRadius={15}>
              <Modal.CloseButton />
              <Modal.Header>Profile</Modal.Header>
              <Modal.Body>
                <VStack space={2}>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Name
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{name}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Position
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{position}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Email
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{email}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Mobile No.
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{mo_number}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Skills
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <FlatList
                      data={skills}
                      renderItem={({ item }) => {
                        return (
                          <Badge
                            my={1}
                            variant={"solid"}
                            colorScheme={"lightBlue"}
                            borderRadius={8}
                          >
                            {item.name}
                          </Badge>
                        );
                      }}
                    />
                  </HStack>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </VStack>
      ) : (
        <VStack
          shadow={5}
          style={{ shadowColor: "black" }}
          bg={"white"}
          borderRadius={15}
          w={"45%"}
          p={1}
        >
          <Image
            w={"10"}
            h={"10"}
            alignSelf={"center"}
            resizeMode="contain"
            alt="Image not found"
            source={require("../../../assets/other-person.png")}
          />
          <Text fontWeight={"semibold"} alignSelf={"center"}>
            {name}
          </Text>
          <Text color={"gray.500"} fontSize={"xs"} alignSelf={"center"}>
            {position}
          </Text>
          <Divider marginY={2} />
          <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity onPress={phonecall}>
              <Ionicons name="call-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons
                name="ios-person-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </HStack>
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            _backdrop={{
              _dark: {
                bg: "coolGray.800",
              },
              bg: "warmGray.900",
            }}
          >
            <Modal.Content w={"90%"} borderRadius={15}>
              <Modal.CloseButton />
              <Modal.Header>Profile</Modal.Header>
              <Modal.Body>
                <VStack space={2}>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Name
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{name}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Position
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{position}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Email
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{email}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Mobile No.
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{mo_number}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Skills
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <FlatList
                      data={skills}
                      renderItem={({ item }) => {
                        return (
                          <Badge
                            my={1}
                            variant={"solid"}
                            colorScheme={"lightBlue"}
                            borderRadius={8}
                          >
                            {item.name}
                          </Badge>
                        );
                      }}
                    />
                  </HStack>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </VStack>
      )}
    </>
  );
};

const NetworkingScreen = () => {
  const [seminar, setSeminar] = React.useState("");
  const [skills, setSkills] = React.useState("");
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoading, setIsLoding] = useState(false);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [key, setKey] = useState(Math.random());

  useEffect(() => {
    setIsLoding(true);

    setTimeout(() => {
      setIsLoding(false);
    }, 2000);
  }, [key]);

  useEffect(() => {
    setKey(Math.random());
  }, [selectedDate, seminar, skills]);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleDateSelect = (date) => {
    setDatePickerVisibility(false);
    setSelectedDate(date);
  };

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  return (
    <>
      <View bg={"white"} flex={1}>
        <RestHeader />
        <Box mb={2} mt={3} pl={3} pr={3}>
          <HStack
            justifyContent={"space-between"}
            alignItems={"center"}
            ml={1}
            mr={1}
          >
            <VStack space={1}>
              <Text
                fontWeight={"semibold"}
                fontSize={"md"}
                color={"gray.400"}
                ml={1}
              >
                Select Date
              </Text>

              {Platform.OS === "android" ? (
                <Pressable onPress={showDatePicker}>
                  <Input
                    placeholder="Select Date"
                    placeholderTextColor={"#000000"}
                    fontSize={"xs"}
                    w={32}
                    h={8}
                    borderColor={"white"}
                    bg={"blue.100"}
                    borderRadius={10}
                    editable={false}
                    value={moment(selectedDate).format("DD/MM/YYYY")}
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateSelect}
                    onCancel={hideDatePicker}
                  />
                </Pressable>
              ) : (
                <TouchableOpacity onPress={showDatePicker}>
                  <Input
                    placeholder="Select Date"
                    placeholderTextColor={"#000000"}
                    fontSize={"xs"}
                    w={32}
                    h={8}
                    shadow={5}
                    borderColor={"white"}
                    bg={"blue.100"}
                    borderRadius={10}
                    editable={false}
                    value={moment(selectedDate).format("DD/MM/YYYY")}
                  />
                  <DateTimePickerModal
                    isVisible={isDatePickerVisible}
                    mode="date"
                    onConfirm={handleDateSelect}
                    onCancel={hideDatePicker}
                  />
                </TouchableOpacity>
              )}
            </VStack>

            <VStack space={1}>
              <Text
                fontWeight={"semibold"}
                fontSize={"md"}
                color={"gray.400"}
                ml={1}
              >
                Select Skill
              </Text>
              <Select
                dropdownIcon={
                  <MaterialIcons
                    name="arrow-drop-down"
                    size={24}
                    color="#64B5F6"
                    style={{ marginRight: 10 }}
                  />
                }
                w={48}
                h={8}
                borderColor={"white"}
                shadow={5}
                fontSize={"xs"}
                bg={"blue.100"}
                borderRadius={10}
                alignSelf={"center"}
                selectedValue={skills}
                accessibilityLabel="Select Skill"
                placeholder="Select Skill"
                placeholderTextColor={"black"}
                _selectedItem={{
                  endIcon: (
                    <Feather
                      name="check"
                      size={18}
                      color="#64B5F6"
                      style={{ marginTop: 2 }}
                    />
                  ),
                }}
                onValueChange={(itemValue) => setSkills(itemValue)}
              >
                <Select.Item label="Communication" value="ux-ui" />
                <Select.Item label="Problem solving" value="front" />
                <Select.Item label="Finance" value="back" />
                <Select.Item label="Ethics" value="back" />
                <Select.Item label="Analytical skill" value="back" />
              </Select>
            </VStack>
          </HStack>

          <VStack space={1} mt={3}>
            <Text
              fontWeight={"semibold"}
              fontSize={"md"}
              color={"gray.400"}
              ml={2}
            >
              Select Event
            </Text>
            <Select
              dropdownIcon={
                <MaterialIcons
                  name="arrow-drop-down"
                  size={24}
                  color="#64B5F6"
                  style={{ marginRight: 10 }}
                />
              }
              w={"98%"}
              h={8}
              borderColor={"white"}
              shadow={5}
              fontSize={"xs"}
              bg={"blue.100"}
              borderRadius={10}
              alignSelf={"center"}
              selectedValue={seminar}
              accessibilityLabel="Select Seminar"
              placeholder="Select Seminar"
              placeholderTextColor={"black"}
              _selectedItem={{
                endIcon: (
                  <Feather
                    name="check"
                    size={18}
                    color="#64B5F6"
                    style={{ marginTop: 2 }}
                  />
                ),
              }}
              onValueChange={(itemValue) => setSeminar(itemValue)}
            >
              <Select.Item label="Tech Edge Series (Virtual)" value="ux-ui" />
              <Select.Item
                label="Two days Workshop on Excel Skills for Real World Business Operations"
                value="front"
              />
              <Select.Item
                label="Direct Tax Refresher Course (Physical)"
                value="back"
              />
            </Select>
          </VStack>
        </Box>
        <HStack
          mx={5}
          my={4}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <HStack space={2}>
            <Text fontWeight={"semibold"} fontSize={"lg"} color={"gray.400"}>
              Participants
            </Text>
            <Box h={7} w={6}>
              <LottieView
                source={require("../../../assets/participants/132762-people-icon.json")}
                autoPlay
                loop
              />
            </Box>
          </HStack>

          <AnimatedSearchBar />
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={3} mb={4} mt={2}>
            {isLoading ? (
              <>
                <Box h={64} w={64} alignSelf={"center"} mt={12}>
                  <LottieView
                    source={require("../../../assets/participants-loader/76352-people-brainstorming-and-get-feedback.json")}
                    autoPlay
                    loop
                  />
                </Box>
              </>
            ) : (
              <VStack space={3}>
                <HStack
                  justifyContent={"space-between"}
                  w={"100%"}
                  alignSelf={"center"}
                  pl={5}
                  pr={5}
                  pb={2}
                >
                  <ParticipantsCard
                    gender="male"
                    name="CA. Nihar Jambusaria"
                    position="Past President – ICAI"
                    email="abc@gmail.com"
                    mo_number={8866383353}
                    skills={[
                      {
                        name: "Analytical skill",
                      },
                      {
                        name: "Communication",
                      },
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                  <ParticipantsCard
                    gender="female"
                    name="CA. Yogita Thar"
                    position="Internal Audit"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                </HStack>
                <HStack
                  justifyContent={"space-between"}
                  w={"100%"}
                  alignSelf={"center"}
                  pl={5}
                  pr={5}
                  pb={2}
                >
                  <ParticipantsCard
                    gender="female"
                    name="CA. Yogita Shah"
                    position="Tax Audit"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                  <ParticipantsCard
                    gender="male"
                    name="CA. Jagdish Punjabi"
                    position="Statutory Audit"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                </HStack>
                <HStack
                  justifyContent={"space-between"}
                  w={"100%"}
                  alignSelf={"center"}
                  pl={5}
                  pr={5}
                  pb={2}
                >
                  <ParticipantsCard
                    gender="male"
                    name="CA. Vipin Batavia"
                    position="Finance Controller"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                  <ParticipantsCard
                    gender="male"
                    name="CA. (Dr.) Girish Ahuja"
                    position="Forensic Auditing"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                </HStack>
                <HStack
                  justifyContent={"space-between"}
                  w={"100%"}
                  alignSelf={"center"}
                  pl={5}
                  pr={5}
                  pb={2}
                >
                  <ParticipantsCard
                    gender="male"
                    name="CA. Rajan Vora"
                    position="Statutory Audit"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                  <ParticipantsCard
                    gender="female"
                    name="CA. Bhakti Patel"
                    position="Finance Controller"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                </HStack>
                <HStack
                  justifyContent={"space-between"}
                  w={"100%"}
                  alignSelf={"center"}
                  pl={5}
                  pr={5}
                  pb={2}
                >
                  <ParticipantsCard
                    gender="male"
                    name="CA. Rajan Vora"
                    position="Management Consulting"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                  <ParticipantsCard
                    gender="female"
                    name="CA. Bhakti Patel"
                    position="Treasury"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                </HStack>
                <HStack
                  justifyContent={"space-between"}
                  w={"100%"}
                  alignSelf={"center"}
                  pl={5}
                  pr={5}
                  pb={2}
                >
                  <ParticipantsCard
                    gender="male"
                    name="CA. Rajan Vora"
                    position="Treasury"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "Problem solving",
                      },
                      {
                        name: "Finance",
                      },
                    ]}
                  />
                  <ParticipantsCard
                    gender="female"
                    name="CA. Bhakti Patel"
                    position="Statutory Audit"
                    email="abc@gmail.com"
                    mo_number={7885964789}
                    skills={[
                      {
                        name: "React",
                      },
                      {
                        name: "React Native",
                      },
                    ]}
                  />
                </HStack>
              </VStack>
            )}
          </VStack>
        </ScrollView>
      </View>
    </>
  );
};

export default NetworkingScreen;
