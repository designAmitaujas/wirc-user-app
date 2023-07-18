import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import {
  View,
  Text,
  HStack,
  Button,
  Icon,
  ScrollView,
  VStack,
  TextArea,
  FormControl,
  Box,
  Badge,
} from "native-base";
import React from "react";
import * as Yup from "yup";
import { CustomInput, CustomTextArea } from "../../components/CustomForm";

const RestHeader = () => {
  const { goBack } = useNavigation();

  return (
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
        ml={12}
        fontSize="22"
        fontWeight="bold"
        // mb={1}
        // w={"40%"}
      >
        Feedback Form
      </Text>
    </HStack>
  );
};

const initialValue = {
  name: "",
  icaimembershipno: "",
  address: "",
  telephonrno: "",
  mobilenumber: "",
  email: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().required(),
  icaimembershipno: Yup.string().required(),
  address: Yup.string().required(),
  telephonrno: Yup.string().required(),
  mobilenumber: Yup.string().min(10).max(10).required(),
  email: Yup.string().email().required(),
});

const Attendancesheet = () => {
  const handleSubmit = () => {};
  const { navigate } = useNavigation();
  const feedback = () => {
    //@ts-ignore
    navigate("Feedback");
  };

  return (
    <>
      <View bg={"white"} flex={1}>
        <RestHeader />
        <ScrollView>
          <VStack
            borderWidth={1}
            m={4}
            borderColor={"gray.400"}
            borderRadius={"10"}
          >
            <Formik
              initialValues={initialValue}
              validationSchema={validationSchema}
              // onSubmit={handleSubmit}
              onSubmit={feedback}
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
                    <ScrollView p={4}>
                      <VStack space={1} alignSelf={"center"}>
                        <Badge variant="solid" alignSelf="flex-end">
                          CPE : 06 HRS
                        </Badge>
                        <VStack>
                          <Text textAlign={"center"} fontWeight={"semibold"}>
                            WIRC Of ICAI
                          </Text>

                          <Text textAlign={"center"} fontWeight={"semibold"}>
                            CPE ATTENDANCE SHEET
                          </Text>
                          <Text
                            textAlign={"center"}
                            fontSize={"xs"}
                            color={"gray.500"}
                          >
                            FOR Workshop on
                          </Text>
                          <Text textAlign={"center"} color={"gray.500"}>
                            GST Representation & Preparation Management
                          </Text>
                          <HStack alignSelf={"center"}>
                            <Text
                              color={"gray.500"}
                              fontWeight={"semibold"}
                              ml={3}
                            >
                              DATE
                            </Text>
                            <Text w={"5%"} ml={3}>
                              :
                            </Text>

                            <Text>7 July 2023</Text>
                          </HStack>
                        </VStack>
                        <CustomInput
                          w={72}
                          h={10}
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
                          w={72}
                          h={10}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          currentValue={values.icaimembershipno}
                          errMsg={errors.icaimembershipno}
                          isInvalid={
                            !!touched.icaimembershipno &&
                            !!errors.icaimembershipno
                          }
                          label="ICAI MemberShip Number"
                          name="icaimembershipno"
                          placeholder="Enter ICAI MemberShip Number"
                          setFieldValue={setFieldValue}
                          isRequired={true}
                          keyboardAppearance="light"
                          //   keyboardType="number-pad"
                          value={values.icaimembershipno}
                        />

                        <CustomTextArea
                          w={72}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          currentValue={values.address}
                          errMsg={errors.address}
                          isInvalid={!!touched.mobilenumber && !!errors.address}
                          label="Address"
                          name="address"
                          placeholder="Enter Address"
                          setFieldValue={setFieldValue}
                          isRequired={true}
                          keyboardAppearance="light"
                          value={values.address}
                        />

                        <CustomInput
                          w={72}
                          h={10}
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
                          w={72}
                          h={10}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          currentValue={values.telephonrno}
                          errMsg={""}
                          //@ts-ignore
                          isInvalid={""}
                          label="TelePhone Number (O)"
                          name="tephonenumber"
                          placeholder="Enter TelePhone Number"
                          setFieldValue={setFieldValue}
                          isRequired={false}
                          keyboardAppearance="light"
                          keyboardType="number-pad"
                          value={values.telephonrno}
                        />

                        <CustomInput
                          w={72}
                          h={10}
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

                        {/* <Button
                          mt="8"
                          borderRadius={15}
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
                        </Button> */}
                        <Button
                          mt="8"
                          borderRadius={15}
                          size={"sm"}
                          w={"32"}
                          alignSelf={"center"}
                          bgColor={"#0f045d"}
                          //@ts-ignore
                          onPress={feedback}
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
                  </>
                );
              }}
            </Formik>
          </VStack>
        </ScrollView>
      </View>
    </>
  );
};

export default Attendancesheet;
