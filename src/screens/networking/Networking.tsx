import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import LottieView from "lottie-react-native";
import {
  Badge,
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Modal,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Linking, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { CustomButton, CustomSelect } from "../../components/CustomForm";
import {
  IGetMyList,
  useGetAllSkillsQuery,
  useGetFilterdSkillMemberMutation,
  useGetTodayCpeEventQuery,
  useMyProfileInformationQuery,
} from "../../gql/graphql";

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

interface IInputForm {
  skills: string;
  event: string;
}

const initialValue: IInputForm = {
  skills: "",
  event: "",
};

const validationSchema = Yup.object().shape({
  skills: Yup.string().required(),
  event: Yup.string().required(),
});

const ParticipantsCard: React.FC<{
  name: string;
  position?: string;
  gender?: string;
  email: string;
  mo_number: string;
  skills: string[];
}> = ({ name, position, gender, email, mo_number, skills }) => {
  // console.log();mo_number

  const [showModal, setShowModal] = useState(false);
  const phonecall = () => {
    // console.log("first", mo_number);
    Linking.openURL(`tel:${mo_number.toString()}`);
  };

  const { data: profile } = useMyProfileInformationQuery();

  return (
    <>
      {profile?.myProfileInformation?.gender?.name === "male" ? (
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
                    <Badge
                      my={1}
                      variant={"solid"}
                      colorScheme={"lightBlue"}
                      borderRadius={8}
                    >
                      {skills}
                    </Badge>
                  </HStack>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </VStack>
      ) : profile?.myProfileInformation?.gender?.name === "female" ? (
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
                    <Badge
                      my={1}
                      variant={"solid"}
                      colorScheme={"lightBlue"}
                      borderRadius={8}
                    >
                      {skills}
                    </Badge>
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
                    <Badge
                      my={1}
                      variant={"solid"}
                      colorScheme={"lightBlue"}
                      borderRadius={8}
                    >
                      {skills}
                    </Badge>
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
  const [participants, setParticipants] = React.useState<Array<IGetMyList>>();
  const [selectedDate, setSelectedDate] = useState(new Date());

  const [key, setKey] = useState(Math.random());

  const { data: getAllskill } = useGetAllSkillsQuery();
  const { data: getAllEvent } = useGetTodayCpeEventQuery();

  const [filter] = useGetFilterdSkillMemberMutation();

  useEffect(() => {
    setKey(Math.random());
  }, [selectedDate, seminar, skills]);

  const handleSubmit = async (
    val: IInputForm,
    actions: FormikHelpers<IInputForm>
  ) => {
    actions.setSubmitting(true);

    const response = await filter({
      variables: {
        options: {
          event: val.event,
          skills: val.skills,
        },
      },
    });

    if (response.data?.getFilterdSkillMember) {
      setParticipants(response.data.getFilterdSkillMember);
    }

    actions.setSubmitting(false);
  };

  if (!getAllskill?.getAllSkills || !getAllEvent?.getTodayCpeEvent) {
    return <></>;
  }

  return (
    <>
      <View bg={"white"} flex={1}>
        <RestHeader />
        <Box mb={2} mt={3} pl={3} pr={3}>
          <Formik
            initialValues={initialValue}
            validationSchema={validationSchema}
            onSubmit={handleSubmit}
          >
            {({
              touched,
              errors,
              setFieldValue,
              values,
              handleSubmit,
              isSubmitting,
            }) => {
              return (
                <>
                  <VStack space={1}>
                    <CustomSelect
                      isRequired={true}
                      isInvalid={!!touched.skills && !!errors.skills}
                      label={"Select Skill"}
                      options={getAllskill.getAllSkills
                        .filter((item) => item.isActive === true)
                        .map((item) => ({ label: item.name, value: item._id }))}
                      name="skills"
                      setFieldValue={setFieldValue}
                      initValue={values.skills}
                      errMsg={errors.skills || ""}
                      dropdownIcon={
                        <MaterialIcons
                          name="arrow-drop-down"
                          size={24}
                          color="#64B5F6"
                          style={{ marginRight: 10 }}
                        />
                      }
                      borderColor={"white"}
                      shadow={5}
                      fontSize={"xs"}
                      bg={"blue.100"}
                      w={"98%"}
                      h={10}
                      borderRadius={10}
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
                    />
                  </VStack>

                  <VStack space={1} mt={3}>
                    <CustomSelect
                      isRequired={true}
                      isInvalid={!!touched.event && !!errors.event}
                      label={"Select Event"}
                      options={getAllEvent.getTodayCpeEvent
                        .filter((item) => item.isActive === true)
                        .map((item) => ({ label: item.name, value: item._id }))}
                      name="event"
                      setFieldValue={setFieldValue}
                      initValue={values.event}
                      errMsg={errors.event || ""}
                      dropdownIcon={
                        <MaterialIcons
                          name="arrow-drop-down"
                          size={24}
                          color="#64B5F6"
                          style={{ marginRight: 10 }}
                        />
                      }
                      borderColor={"white"}
                      shadow={5}
                      fontSize={"xs"}
                      bg={"blue.100"}
                      w={"98%"}
                      h={10}
                      borderRadius={10}
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
                    />
                  </VStack>
                  <CustomButton
                    name="Submit"
                    mt="8"
                    borderRadius={25}
                    w={"48"}
                    h={12}
                    alignSelf={"center"}
                    bg={"#0f045d"}
                    colorScheme={"white"}
                    leftIcon={
                      <Icon as={FontAwesome5} name="lock" mr="1" size="sm" />
                    }
                    isSubmitting={isSubmitting}
                    onSubmit={handleSubmit}
                  />
                </>
              );
            }}
          </Formik>
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

          {/* <AnimatedSearchBar /> */}
        </HStack>
        <ScrollView showsVerticalScrollIndicator={false}>
          <VStack space={3} mb={4} mt={2}>
            {participants?.length === 0 ? (
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
                  {participants?.map((item) => {
                    return (
                      <>
                        <ParticipantsCard
                          key={key}
                          gender={item.gender}
                          name={item.name}
                          email={item.email}
                          mo_number={item.mobile}
                          skills={item.skill}
                        />
                      </>
                    );
                  })}
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
