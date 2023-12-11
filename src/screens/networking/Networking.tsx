import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import _ from "lodash";
import LottieView from "lottie-react-native";
import {
  Badge,
  Box,
  Button,
  Divider,
  FlatList,
  HStack,
  Icon,
  Image,
  Modal,
  ScrollView,
  Spinner,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { Linking, TouchableOpacity } from "react-native";
import * as Yup from "yup";
import { CustomButton, CustomSelect } from "../../components/CustomForm";
import {
  IGetMyList,
  useGetAllCityQuery,
  useGetAllSkillsQuery,
  useGetFilterdSkillMemberV2Mutation,
  useGetMyMobileEventListQuery,
  useIsInvitateAcceptedMutation,
  useSendInvitationMutation,
} from "../../gql/graphql";

interface IInputForm {
  skills: string;
  event: string;
  city: string;
}

const initialValue: IInputForm = {
  skills: "",
  event: "",
  city: "",
};

const validationSchema = Yup.object().shape({
  skills: Yup.string(),
  event: Yup.string(),
  city: Yup.string(),
});

const RestHeader = () => {
  // const { goBack } = useNavigation();
  const { goBack } = useNavigation();
  const { navigate } = useNavigation();
  const handlenotification = () => {
    //@ts-ignore
    navigate("notification");
  };
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
        space={2}
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
          fontSize="20"
          fontWeight="bold"
          mb={1}
          // w={"40%"}
        >
          Networking
        </Text>

        <Button
          ml={4}
          backgroundColor="#0f045d"
          leftIcon={<Ionicons name="notifications" size={24} color="white" />}
          onPress={handlenotification}
        />
      </HStack>
    </>
  );
};

const ParticipantsCard: React.FC<{
  name: string;
  position: string;
  gender: string;
  email: string;
  mo_number: string;
  keey: number;
  userid: string;
  eventid: string;
  skills: string[];
}> = ({
  name,
  position,
  gender,
  email,
  mo_number,
  skills,
  keey,
  userid,
  eventid,
}) => {
  // console.log();mo_number

  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);

  const [showModal3, setShowModal3] = useState(false);

  const [response] = useSendInvitationMutation();
  const [responseda] = useIsInvitateAcceptedMutation();

  const handleinvite = async () => {
    const data = await responseda({
      variables: { eventId: eventid, inviteTo: userid },
    });

    if (data.data) {
      setShowModal3(data.data?.IsInvitateAccepted);
    }
  };

  const toast = useToast();
  const handlesubmit = async () => {
    const hello = await response({
      variables: {
        eventId: eventid || "",
        firebaseId: position,
        inviteTo: userid,
      },
    });
    console.log(hello);
    if (hello.data?.sendInvitation) {
      toast.show({
        title: "Invitation Sent",
        placement: "top",
      });
      setShowModal1(false);
    }
  };
  const phonecall = () => {
    // console.log("first", mo_number);
    Linking.openURL(`tel:${mo_number.toString()}`);
  };

  return (
    <>
      {gender.toLocaleLowerCase() === "male" ? (
        <VStack
          shadow={5}
          style={{ shadowColor: "blue", marginLeft: 10 }}
          bg={"white"}
          mb={8}
          borderRadius={15}
          w={"45%"}
          p={1}
          key={keey}
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

          <Divider marginY={2} />
          <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity
              onPress={async () => {
                await handleinvite();
                setShowModal1(true);
              }}
            >
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
            isOpen={showModal1}
            onClose={() => setShowModal1(false)}
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
                {showModal3 === true ? (
                  <>
                    <HStack w={"100%"}>
                      <Text
                        color={"gray.500"}
                        fontWeight={"semibold"}
                        w={"30%"}
                      >
                        Email
                      </Text>
                      <Text w={"10%"}>:</Text>
                      <Text w={"65%"}>{email}</Text>
                    </HStack>
                    <HStack w={"100%"}>
                      <Text
                        color={"gray.500"}
                        fontWeight={"semibold"}
                        w={"30%"}
                      >
                        Mobile No.
                      </Text>
                      <Text w={"10%"}>:</Text>
                      <Text w={"65%"}>{mo_number}</Text>
                    </HStack>
                  </>
                ) : (
                  <>
                    <VStack space={2}>
                      <Button onPress={handlesubmit} bg="#0f045d">
                        Send Invite
                      </Button>
                    </VStack>
                  </>
                )}
              </Modal.Body>
            </Modal.Content>
          </Modal>
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
                      Skills
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Badge
                      my={1}
                      variant={"solid"}
                      colorScheme={"lightBlue"}
                      borderRadius={8}
                    >
                      {skills.map((item, index) => {
                        return (
                          <>
                            <Text key={index} color="white">
                              {index + 1} ) {item}
                            </Text>
                          </>
                        );
                      })}
                    </Badge>
                  </HStack>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </VStack>
      ) : gender.toLocaleLowerCase() === "female" ? (
        <VStack
          shadow={5}
          style={{ shadowColor: "blue", marginLeft: 10 }}
          bg={"white"}
          mb={8}
          borderRadius={15}
          w={"45%"}
          p={1}
          key={keey}
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

          <Divider marginY={2} />
          <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity
              onPress={async () => {
                await handleinvite();
                setShowModal1(true);
              }}
            >
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
            isOpen={showModal1}
            onClose={() => setShowModal1(false)}
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
                {showModal3 === true ? (
                  <>
                    <HStack w={"100%"}>
                      <Text
                        color={"gray.500"}
                        fontWeight={"semibold"}
                        w={"30%"}
                      >
                        Email
                      </Text>
                      <Text w={"10%"}>:</Text>
                      <Text w={"65%"}>{email}</Text>
                    </HStack>
                    <HStack w={"100%"}>
                      <Text
                        color={"gray.500"}
                        fontWeight={"semibold"}
                        w={"30%"}
                      >
                        Mobile No.
                      </Text>
                      <Text w={"10%"}>:</Text>
                      <Text w={"65%"}>{mo_number}</Text>
                    </HStack>
                  </>
                ) : (
                  <>
                    <VStack space={2}>
                      <Button onPress={handlesubmit} bg="#0f045d">
                        Send Invite
                      </Button>
                    </VStack>
                  </>
                )}
              </Modal.Body>
            </Modal.Content>
          </Modal>
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
                      Skills
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Badge
                      my={1}
                      variant={"solid"}
                      colorScheme={"lightBlue"}
                      borderRadius={8}
                    >
                      {skills.map((item, index) => {
                        return (
                          <>
                            <Text key={index} color="white">
                              {index + 1} ) {item}
                            </Text>
                          </>
                        );
                      })}
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
          style={{ shadowColor: "blue", marginLeft: 10 }}
          bg={"white"}
          mb={8}
          borderRadius={15}
          w={"45%"}
          p={1}
          key={keey}
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

          <Divider marginY={2} />
          <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity
              onPress={async () => {
                await handleinvite();
                setShowModal1(true);
              }}
            >
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
            isOpen={showModal1}
            onClose={() => setShowModal1(false)}
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
                {showModal3 === true ? (
                  <>
                    <HStack w={"100%"}>
                      <Text
                        color={"gray.500"}
                        fontWeight={"semibold"}
                        w={"30%"}
                      >
                        Email
                      </Text>
                      <Text w={"10%"}>:</Text>
                      <Text w={"65%"}>{email}</Text>
                    </HStack>
                    <HStack w={"100%"}>
                      <Text
                        color={"gray.500"}
                        fontWeight={"semibold"}
                        w={"30%"}
                      >
                        Mobile No.
                      </Text>
                      <Text w={"10%"}>:</Text>
                      <Text w={"65%"}>{mo_number}</Text>
                    </HStack>
                  </>
                ) : (
                  <>
                    <VStack space={2}>
                      <Button onPress={handlesubmit} bg="#0f045d">
                        Send Invite
                      </Button>
                    </VStack>
                  </>
                )}
              </Modal.Body>
            </Modal.Content>
          </Modal>
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
                      Skills
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Badge
                      my={1}
                      variant={"solid"}
                      colorScheme={"lightBlue"}
                      borderRadius={8}
                    >
                      {skills.map((item, index) => {
                        return (
                          <>
                            <Text key={index} color="white">
                              {index + 1} ) {item}
                            </Text>
                          </>
                        );
                      })}
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
  const [participants, setParticipants] = React.useState<Array<IGetMyList>>();
  const [loadingParticipants, setLoadingParticipants] = React.useState(false);
  const { params } = useRoute();
  const [key, setKey] = useState(Math.random());
  const { eventId } = params as { eventId?: string };

  const { data: getAllskill, loading: l1 } = useGetAllSkillsQuery();
  const { data: getAllEvent, loading: l2 } = useGetMyMobileEventListQuery();
  const { data: city, loading: l3 } = useGetAllCityQuery();

  useEffect(() => {
    (async () => {
      setLoadingParticipants(true);

      const response = await filter({
        variables: {
          options: {
            city: "",
            event: eventId || "",
            skills: "",
          },
        },
      });

      if (response.data?.getFilterdSkillMemberV2) {
        setParticipants(response.data.getFilterdSkillMemberV2);
        setKey(Math.random());
      } else {
        toast.show({ title: _.capitalize(" error"), placement: "top" });
      }
      setLoadingParticipants(false);
    })();
  }, [eventId]);

  const toast = useToast();
  const [filter] = useGetFilterdSkillMemberV2Mutation();

  const handleSubmit = async (
    val: IInputForm,
    actions: FormikHelpers<IInputForm>
  ) => {
    actions.setSubmitting(true);

    setLoadingParticipants(true);

    const response = await filter({
      variables: {
        options: {
          city: val.city,
          event: eventId || "",
          skills: val.skills,
        },
      },
    });

    console.log(response);

    if (response.data?.getFilterdSkillMemberV2) {
      setParticipants(response.data.getFilterdSkillMemberV2);
      setKey(Math.random());
    } else {
      toast.show({ title: _.capitalize(" error"), placement: "top" });
    }
    setLoadingParticipants(false);
    actions.setSubmitting(false);
  };

  const renderItem = useCallback(({ item }: { item: IGetMyList }) => {
    return (
      <ParticipantsCard
        key={key}
        keey={key}
        gender={item.gender}
        name={item.name}
        email={item.email}
        mo_number={item.mobile}
        skills={item.skill}
        userid={item.userid}
        eventid={eventId || ""}
        position={item.firebaseId}
      />
    );
  }, []);

  if (l1 || l2 || l3) {
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
    </>;
  }
  if (
    !getAllskill?.getAllSkills ||
    !getAllEvent?.getMyMobileEventList ||
    !city?.getAllCity
  ) {
    return (
      <>
        <RestHeader />
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
                      isRequired={false}
                      isInvalid={!!touched.skills && !!errors.skills}
                      label={"Select Focus Area"}
                      options={getAllskill.getAllSkills
                        .filter((item) => item.isActive === true)
                        .sort((a, b) => a.name.localeCompare(b.name))
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
                      isRequired={false}
                      isInvalid={!!touched.city && !!errors.city}
                      label={"Select city"}
                      options={city.getAllCity

                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((item) => ({
                          label: item.name || "",
                          value: item._id || "",
                        }))}
                      name="city"
                      setFieldValue={setFieldValue}
                      initValue={values.city}
                      errMsg={errors.city || ""}
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
        {loadingParticipants ? (
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
              Loading Participants
            </Text>
          </HStack>
        ) : (
          <ScrollView showsVerticalScrollIndicator={false}>
            <VStack space={3} mb={4} mt={2}>
              {participants?.length === 0 ? (
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
                      No Participants
                    </Text>
                  </HStack>
                </>
              ) : (
                <VStack>
                  <HStack justifyContent={"space-between"} w={"100%"}>
                    {Array.isArray(participants) && (
                      <FlatList
                        scrollEnabled={false}
                        numColumns={2}
                        data={participants}
                        keyExtractor={(item) => item.city + key}
                        renderItem={renderItem}
                      />
                    )}
                  </HStack>
                </VStack>
              )}
            </VStack>
          </ScrollView>
        )}
      </View>
    </>
  );
};

export default NetworkingScreen;
