import {
  Entypo,
  Feather,
  FontAwesome,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  HStack,
  Button,
  Icon,
  Box,
  Pressable,
  useColorModeValue,
  Center,
  Heading,
  Image,
  VStack,
  ScrollView,
  Divider,
  Modal,
  Input,
  FormControl,
} from "native-base";
import React, { useCallback, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useWindowDimensions, Dimensions } from "react-native";
import { TabView, SceneMap } from "react-native-tab-view";
import LinearGradient from "react-native-linear-gradient";
import { QRCode } from "react-native-custom-qr-codes-expo";
import * as Yup from "yup";
import { Formik } from "formik";
import {
  CustomButton,
  CustomInput,
  CustomTextArea,
} from "../../components/CustomForm";
import * as DocumentPicker from "expo-document-picker";
<QRCode content="https://reactnative.com" />;

const RestHeader = () => {
  // const { goBack } = useNavigation();
  const { goBack } = useNavigation();
  const { navigate } = useNavigation();

  const visitingcard = () => {
    // @ts-ignore
    navigate("VisitingCard");
  };

  const logout = () => {
    // @ts-ignore
    navigate("Login");
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
          ml={16}
          fontSize="22"
          fontWeight="bold"
          // mb={1}
          // w={"40%"}
        >
          Visiting Card
        </Text>
      </HStack>
    </>
  );
};

const initialValue = {
  logo: "",
  name: "",
  mobilenumber: "",
  email: "",
  website: "",
  address: "",
};

const validationSchema = Yup.object().shape({
  logo: Yup.string().required(),
  name: Yup.string().required("Name is required field"),
  mobilenumber: Yup.string().min(10).max(10).required(),
  email: Yup.string().email().required(),
  website: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url!"
    )
    .required("Website is required field"),
  address: Yup.string().required("Address is required field"),
});

const VisitingCardForm = () => {
  const [modalVisible, setModalVisible] = React.useState(false);

  // const selectDoc = async () => {
  //   try {
  //     const doc = await DocumentPicker.pick({
  //       type: [DocumentPicker.types.images],
  //     });
  //     console.log(doc);
  //   } catch (err) {
  //     if (DocumentPicker.isCancel(err))
  //       console.log("User Cancelled the upload", err);
  //     else console.log(err);
  //   }
  // };

  const selectDoc = async () => {
    const res = await DocumentPicker.getDocumentAsync({
      type: ["image/*"],
    });

    //@ts-ignore
    console.log(res?.name);
  };

  const handleSubmit = () => {};
  return (
    <>
      <VStack>
        <Formik
          initialValues={initialValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleSubmit,
            values,
            touched,
            errors,
            handleChange,
            setFieldValue,
            isSubmitting,
          }) => {
            return (
              <>
                <Modal
                  isOpen={modalVisible}
                  onClose={() => setModalVisible(false)}
                  avoidKeyboard
                  bottom="4"
                  size="xl"
                >
                  <Modal.Content borderRadius={"xl"}>
                    <Modal.CloseButton />
                    <Modal.Header>Edit Details</Modal.Header>
                    <Modal.Body>
                      <ScrollView showsVerticalScrollIndicator={false}>
                        <VStack space={1} mb={3} alignSelf={"center"}>
                          {/* <HStack space={3}>
                            <Button
                              onPress={selectDoc}
                              borderRadius={10}
                              size={"xs"}
                              w={"20"}
                              alignSelf={"center"}
                              // bgColor={"#0f045d"}
                            >
                              Select Image
                            </Button>
                          </HStack> */}
                          {/* <CustomButton
                            isSubmitting={true}
                            name="Select Image"
                            onSubmit={selectDoc}
                          /> */}
                          <FormControl
                            isRequired={true}
                            isInvalid={!!touched.logo && !!errors.logo}
                          >
                            {"Logo" && (
                              <FormControl.Label fontWeight={"bold"}>
                                {"Logo"}
                              </FormControl.Label>
                            )}
                            <Button
                              onPress={selectDoc}
                              borderRadius={10}
                              size={"xs"}
                              w={"20"}
                              alignSelf={"center"}
                              // bgColor={"#0f045d"}
                            >
                              Select Image
                            </Button>

                            <FormControl.ErrorMessage mt={0.5}>
                              {errors.logo}
                            </FormControl.ErrorMessage>
                          </FormControl>

                          <CustomInput
                            w={"72"}
                            h={"10"}
                            borderColor={"#0f045d"}
                            bgColor={"white"}
                            currentValue={values.name}
                            errMsg={errors.name}
                            isInvalid={!!touched.name && !!errors.name}
                            label="Name"
                            name="name"
                            placeholder="Enter Name"
                            setFieldValue={setFieldValue}
                            isRequired={true}
                            value={values.name}
                          />

                          <CustomInput
                            w={"72"}
                            h={"10"}
                            borderColor={"#0f045d"}
                            bgColor={"white"}
                            currentValue={values.mobilenumber}
                            errMsg={errors.mobilenumber}
                            isInvalid={
                              !!touched.mobilenumber && !!errors.mobilenumber
                            }
                            label="Mobile Number"
                            name="mobilenumber"
                            placeholder="Enter Mobile Number"
                            setFieldValue={setFieldValue}
                            isRequired={true}
                            keyboardAppearance="light"
                            keyboardType="number-pad"
                            value={values.mobilenumber}
                          />

                          <CustomInput
                            w={"72"}
                            h={"10"}
                            borderColor={"#0f045d"}
                            bgColor={"white"}
                            currentValue={values.email}
                            errMsg={errors.email}
                            isInvalid={!!touched.email && !!errors.email}
                            label="Email Address"
                            keyboardType="email-address"
                            name="email"
                            placeholder="Enter Email Address"
                            setFieldValue={setFieldValue}
                            isRequired={true}
                            value={values.email}
                          />

                          <CustomInput
                            w={"72"}
                            h={"10"}
                            borderColor={"#0f045d"}
                            bgColor={"white"}
                            currentValue={values.website}
                            errMsg={errors.website}
                            isInvalid={!!touched.website && !!errors.website}
                            label="Website"
                            keyboardType="email-address"
                            name="website"
                            placeholder="Enter Website"
                            setFieldValue={setFieldValue}
                            isRequired={true}
                            value={values.website}
                          />

                          <CustomTextArea
                            w={"72"}
                            borderColor={"#0f045d"}
                            bgColor={"white"}
                            currentValue={values.address}
                            errMsg={errors.address}
                            isInvalid={!!touched.address && !!errors.address}
                            label="Address"
                            name="address"
                            placeholder="Enter Address"
                            setFieldValue={setFieldValue}
                            isRequired={true}
                            value={values.address}
                          />

                          <Button
                            mt="8"
                            borderRadius={20}
                            size={"sm"}
                            w={"32"}
                            alignSelf={"center"}
                            bgColor={"#0f045d"}
                            //@ts-ignore
                            onPress={handleSubmit}
                          >
                            <Text
                              color={"white"}
                              fontSize={"sm"}
                              fontWeight={"medium"}
                            >
                              Submit
                            </Text>
                          </Button>
                        </VStack>
                      </ScrollView>
                    </Modal.Body>
                  </Modal.Content>
                </Modal>
              </>
            );
          }}
        </Formik>
      </VStack>
      {/* <Modal
        isOpen={modalVisible}
        onClose={() => setModalVisible(false)}
        avoidKeyboard
        bottom="4"
        size="xl"
      >
        <Modal.Content>
          <Modal.CloseButton />
          <Modal.Header>Edit Details</Modal.Header>
          <Modal.Body>
            Enter email address and we'll send a link to reset your password.
          </Modal.Body>
        </Modal.Content>
      </Modal> */}
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <FontAwesome5 name="user-edit" size={24} color="#0f045d" />
      </TouchableOpacity>
    </>
  );
};

const FirstRoute = () => (
  <>
    <ScrollView showsVerticalScrollIndicator={false}>
      <Box alignSelf={"flex-end"} pt={5} pr={5}>
        <VisitingCardForm />
      </Box>
      <Center mt={5} mb={10}>
        <VStack>
          <VStack bg={"#fff"} shadow={9} m={5}>
            <Box h={5} w={"45%"} bg={"#4f7329"} />
            <VStack p={7}>
              <Image
                alignSelf={"center"}
                w={"12"}
                h={"12"}
                resizeMode="contain"
                alt="Image not found"
                source={require("../../../assets/c1.png")}
              />
              <Heading
                alignSelf={"center"}
                color={"#4f7329"}
                textTransform={"uppercase"}
              >
                Amitaujas
              </Heading>
              <Text
                alignSelf={"center"}
                color={"#7bc231"}
                textTransform={"uppercase"}
              >
                Where expectation meets solutions !
              </Text>
            </VStack>
            <Box
              // flex={1}
              // position={"absolute"}
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
                {/* <Box h={3.5} bg={"#4f7329"} /> */}
                {/* <Box h={5} bg={"#4f7329"} /> */}

                <VStack
                  // bg={"#79c032"}
                  space={5}
                  // alignSelf={"center"}
                  p={2}
                >
                  <Image
                    alignSelf={"center"}
                    w={"8"}
                    h={"8"}
                    resizeMode="contain"
                    alt="Image not found"
                    source={require("../../../assets/amitaujas.png")}
                  />
                  <Box alignSelf={"center"}>
                    <QRCode color="white" size="60" codeStyle="square" />
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
                  Ashish Jaiswal
                </Text>
                <Text
                  color={"#7bc231"}
                  fontWeight={"normal"}
                  fontSize={"xs"}
                  textTransform={"uppercase"}
                >
                  CA | CMA(AIR 41) | CS (Executive)
                </Text>
                <VStack alignItems={"flex-end"} space={1.5} mt={3} w={"85%"}>
                  <HStack space={2} alignItems={"center"}>
                    <Text fontSize={10} textAlign={"right"}>
                      +91 78782 61327
                    </Text>

                    <Ionicons name="call" size={15} color="#4f7126" />
                  </HStack>
                  <HStack space={2} alignItems={"center"}>
                    <Text fontSize={10} textAlign={"right"}>
                      ashish@amitaujas.com
                    </Text>

                    <Ionicons name="mail" size={16} color="#4f7126" />
                  </HStack>
                  <HStack space={2} alignItems={"center"}>
                    <Text fontSize={10} textAlign={"right"}>
                      WWW.AMITAUJAS.COM
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
                      FF-05, Avishkar Complex, Nr GEB Colony, Old Padra Rd,
                      Vadodara-390015, Gujrat, India
                    </Text>
                    <Ionicons name="location" size={16} color="#4f7126" />
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <Button
          mt="12"
          mb="2"
          borderRadius={25}
          size={"lg"}
          w={"40"}
          alignSelf={"center"}
          bgColor={"#0f045d"}
          //@ts-ignore
        >
          <Text color={"white"} fontSize={"sm"} fontWeight={"medium"}>
            Download
          </Text>
        </Button>
      </Center>
    </ScrollView>
  </>
);

const SecondRoute = () => (
  <>
    <ScrollView>
      <Box alignSelf={"flex-end"} pt={5} pr={5}>
        <VisitingCardForm />
      </Box>
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
                  w={"16"}
                  h={"16"}
                  resizeMode="contain"
                  alt="Image not found"
                  source={require("../../../assets/c2.png")}
                />
                <Text
                  fontWeight={"semibold"}
                  fontSize={"lg"}
                  alignSelf={"center"}
                  color={"#e66d3e"}
                  textTransform={"uppercase"}
                >
                  Amitaujas
                </Text>
                <Text
                  alignSelf={"center"}
                  color={"#ba7f62"}
                  fontSize={"xs"}
                  textAlign={"center"}
                  textTransform={"uppercase"}
                >
                  Where expectation meets solutions !
                </Text>
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
                    Ashish Jaiswal
                  </Text>
                  {/* <Text
                      color={"#16202b"}
                      fontSize={"sm"}
                      fontWeight={"normal"}
                      textTransform={"uppercase"}
                    >
                      Jaiswal
                    </Text> */}
                  {/* </HStack> */}
                </Box>
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
                  CA | CMA(AIR 41) | CS (Executive)
                </Text>
                {/* <VStack ml={4} mb={-8} mt={5}> */}
                {/* <Image
                    w={"6"}
                    h={"6"}
                    ml={3}
                    resizeMode="contain"
                    alt="Image not found"
                    source={require("../../../assets/amitaujas.png")}
                  />
                  <Text
                    fontWeight={"semibold"}
                    fontSize={"10"}
                    color={"#fff"}
                    textTransform={"uppercase"}
                  >
                    Amitaujas
                  </Text> */}
                <Box ml={4} mb={-8} mt={4}>
                  <QRCode
                    color="white"
                    size="60"
                    codeStyle="square"
                    // logo={require("../../../assets/amitaujas.png")}
                  />
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
                      +91 78782 61327
                    </Text>
                  </HStack>
                  <HStack space={2} alignItems={"center"}>
                    <Ionicons name="mail" size={16} color="#fff" />
                    <Text fontSize={10} color="#fff">
                      ashish@amitaujas.com
                    </Text>
                  </HStack>
                  <HStack space={2} alignItems={"center"}>
                    <Ionicons name="ios-globe-sharp" size={16} color="#fff" />
                    <Text fontSize={10} color="#fff">
                      WWW.AMITAUJAS.COM
                    </Text>
                  </HStack>
                  <HStack space={2}>
                    <Ionicons name="location" size={16} color="#fff" />
                    <Text fontSize={10} color="#fff" textAlign={"justify"}>
                      FF-05, Avishkar Complex, Nr GEB Colony, Old Padra Rd,
                      Vadodara-390015, Gujrat, India
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </VStack>
        <Button
          mt="12"
          mb="2"
          borderRadius={25}
          size={"lg"}
          w={"40"}
          alignSelf={"center"}
          bgColor={"#0f045d"}
          //@ts-ignore
        >
          <Text color={"white"} fontSize={"sm"} fontWeight={"medium"}>
            Download
          </Text>
        </Button>
      </Center>
    </ScrollView>
  </>
);

const ThirdRoute = () => (
  <>
    <ScrollView>
      <Box alignSelf={"flex-end"} pt={5} pr={5}>
        <VisitingCardForm />
      </Box>
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
                  Amitaujas
                </Text>

                {/* <Text
              fontSize={"10"}
              fontWeight={"normal"}
              alignSelf={"flex-end"}
              color={"#fff"}
              textTransform={"uppercase"}
            >
              Where expectation meets solutions !
            </Text> */}
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
                  Ashish Jaiswal
                </Text>
                <Text
                  color={"gray.400"}
                  fontWeight={"thin"}
                  fontSize={"xs"}
                  textTransform={"uppercase"}
                >
                  CA | CMA(AIR 41) | CS (Executive)
                </Text>
                <VStack alignItems={"flex-start"} space={1.5} mt={3} w={"85%"}>
                  <HStack space={2} alignItems={"center"}>
                    <Ionicons name="call" size={15} color="#313031" />
                    <Text fontSize={10} fontWeight={"thin"}>
                      +91 78782 61327
                    </Text>
                  </HStack>
                  <HStack space={2} alignItems={"center"}>
                    <Ionicons name="mail" size={16} color="#313031" />
                    <Text fontSize={10} fontWeight={"thin"}>
                      ashish@amitaujas.com
                    </Text>
                  </HStack>
                  <HStack space={2} alignItems={"center"}>
                    <Ionicons
                      name="ios-globe-sharp"
                      size={16}
                      color="#313031"
                    />
                    <Text fontSize={10} fontWeight={"thin"}>
                      WWW.AMITAUJAS.COM
                    </Text>
                  </HStack>
                  <HStack space={2}>
                    <Ionicons name="location" size={16} color="#313031" />
                    <Text
                      fontSize={10}
                      fontWeight={"thin"}
                      textAlign={"justify"}
                    >
                      FF-05, Avishkar Complex, Nr GEB Colony, Old Padra Rd,
                      Vadodara-390015, Gujrat, India
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
                  <Box alignSelf={"center"}>
                    <QRCode color="white" size="60" codeStyle="square" />
                  </Box>
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <Button
          mt="12"
          mb="2"
          borderRadius={25}
          size={"lg"}
          w={"40"}
          alignSelf={"center"}
          bgColor={"#0f045d"}
          //@ts-ignore
        >
          <Text color={"white"} fontSize={"sm"} fontWeight={"medium"}>
            Download
          </Text>
        </Button>
      </Center>
    </ScrollView>
  </>
);

const ForthRoute = () => (
  <>
    <ScrollView>
      <Box alignSelf={"flex-end"} pt={5} pr={5}>
        <VisitingCardForm />
      </Box>
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
                  w={"12"}
                  h={"12"}
                  resizeMode="contain"
                  alt="Image not found"
                  source={require("../../../assets/amitaujas.png")}
                />
                <Heading mt={-5} color={"#fff"}>
                  Amitaujas
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
                  ashish@amitaujas.com
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
                    w={"8"}
                    h={"8"}
                    resizeMode="contain"
                    alt="Image not found"
                    source={require("../../../assets/c4.png")}
                  />
                  <Box alignSelf={"center"}>
                    <QRCode color="#385ca6" size="60" codeStyle="square" />
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
                  fontSize={"lg"}
                  fontWeight={"semibold"}
                  textTransform={"uppercase"}
                >
                  Ashish Jaiswal
                </Text>
                <Text
                  color={"#385ca6"}
                  fontWeight={"normal"}
                  fontSize={"10"}
                  textTransform={"uppercase"}
                >
                  CA | CMA(AIR 41) | CS (Executive)
                </Text>
                <Divider bg={"#385ca6"} w={"9"} mt={2} thickness={"0.7"} />
                <VStack alignItems={"flex-end"} space={1.5} mt={3} w={"85%"}>
                  <HStack space={2} alignItems={"center"}>
                    <Text fontSize={10} textAlign={"right"} color={"#385ca6"}>
                      +91 78782 61327
                    </Text>

                    <Ionicons name="call" size={15} color="#385ca6" />
                  </HStack>
                  <HStack space={2} alignItems={"center"}>
                    <Text fontSize={10} textAlign={"right"} color={"#385ca6"}>
                      ashish@amitaujas.com
                    </Text>

                    <Ionicons name="mail" size={16} color="#385ca6" />
                  </HStack>
                  <HStack space={2} alignItems={"center"}>
                    <Text fontSize={10} textAlign={"right"} color={"#385ca6"}>
                      WWW.AMITAUJAS.COM
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
                      FF-05, Avishkar Complex, Nr GEB Colony, Old Padra Rd,
                      Vadodara-390015, Gujrat, India
                    </Text>
                    <Ionicons name="location" size={16} color="#385ca6" />
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <Button
          mt="12"
          mb="2"
          borderRadius={25}
          size={"lg"}
          w={"40"}
          alignSelf={"center"}
          bgColor={"#0f045d"}
          //@ts-ignore
        >
          <Text color={"white"} fontSize={"sm"} fontWeight={"medium"}>
            Download
          </Text>
        </Button>
      </Center>
    </ScrollView>
  </>
);

const FifthRoute = () => (
  <>
    <ScrollView>
      <Box alignSelf={"flex-end"} pt={5} pr={5}>
        <VisitingCardForm />
      </Box>
      <Center mt={5} mb={10}>
        <VStack>
          <VStack bg={"#62A8C7"} shadow={9} m={5}>
            <VStack p={12} space={1} alignSelf={"center"}>
              <Image
                mt={2}
                alignSelf={"center"}
                w={"12"}
                h={"12"}
                resizeMode="contain"
                alt="Image not found"
                source={require("../../../assets/amitaujas.png")}
              />
              <Heading
                color={"#fff"}
                mb={2}
                fontWeight={"thin"}
                // textTransform={"uppercase"}
                letterSpacing={"2xl"}
              >
                Amitaujas
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
                Ashish Jaiswal
              </Text>
              <Text
                color={"#9E9E9E"}
                fontWeight={"thin"}
                textAlign={"center"}
                fontSize={"10"}
                textTransform={"uppercase"}
              >
                CA | CMA(AIR 41) | CS (Executive)
              </Text>
            </VStack>
            <HStack w={"100%"}>
              <VStack bg={"white"} justifyContent={"center"} w={"35%"}>
                {/* <Image
                  alignSelf={"center"}
                  w={"8"}
                  h={"8"}
                  resizeMode="contain"
                  alt="Image not found"
                  source={require("../../../assets/c4.png")}
                /> */}
                <Box alignSelf={"center"}>
                  <QRCode color="#424242" size="60" codeStyle="square" />
                </Box>
              </VStack>

              <VStack w={"65%"} p={3}>
                {/* <Text
                color={"#385ca6"}
                fontSize={"lg"}
                fontWeight={"semibold"}
                textTransform={"uppercase"}
              >
                Ashish Jaiswal
              </Text>
              <Text
                color={"#385ca6"}
                fontWeight={"normal"}
                fontSize={"10"}
                textTransform={"uppercase"}
              >
                CA | CMA(AIR 41) | CS (Executive)
              </Text> */}

                <VStack space={1.5} w={"85%"}>
                  <HStack space={2}>
                    <Ionicons name="call" size={15} color="#424242" />
                    <Text fontSize={10} color={"#9E9E9E"} fontWeight={"thin"}>
                      +91 78782 61327
                    </Text>
                  </HStack>
                  <HStack space={2}>
                    <Ionicons name="mail" size={16} color="#424242" />
                    <Text fontSize={10} color={"#9E9E9E"} fontWeight={"thin"}>
                      ashish@amitaujas.com
                    </Text>
                  </HStack>
                  <HStack space={2}>
                    <Ionicons
                      name="ios-globe-sharp"
                      size={16}
                      color="#424242"
                    />
                    <Text fontSize={10} color={"#9E9E9E"} fontWeight={"thin"}>
                      WWW.AMITAUJAS.COM
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
                      FF-05, Avishkar Complex, Nr GEB Colony, Old Padra Rd,
                      Vadodara-390015, Gujrat, India
                    </Text>
                  </HStack>
                </VStack>
              </VStack>
            </HStack>
          </VStack>
        </VStack>

        <Button
          mt="12"
          mb="2"
          borderRadius={25}
          size={"lg"}
          w={"40"}
          alignSelf={"center"}
          bgColor={"#0f045d"}
          //@ts-ignore
        >
          <Text color={"white"} fontSize={"sm"} fontWeight={"medium"}>
            Download
          </Text>
        </Button>
      </Center>
    </ScrollView>
  </>
);

const initialLayout = {
  width: Dimensions.get("window").width,
};
const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  forth: ForthRoute,
  fifth: FifthRoute,
});

function VisitingCard({ route, navigation }) {
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

  const renderTabBar = (props) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);
    return (
      <Box flexDirection="row" bg={"white"}>
        {props.navigationState.routes.map((route, i) => {
          const opacity = props.position.interpolate({
            inputRange,
            outputRange: inputRange.map((inputIndex) =>
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
        })}
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
}

export default VisitingCard;
