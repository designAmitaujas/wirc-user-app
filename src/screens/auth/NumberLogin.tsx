import {
  Feather,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import {
  HStack,
  Icon,
  Image,
  Link,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useState } from "react";
import * as Yup from "yup";
import { CustomButton, CustomInput } from "../../components/CustomForm";
import BottomTab from "../BottomTab";

const initialValues = {
  mobileNo: "",
  otp: "",
};

const validationSchema = Yup.object().shape({
  mobileNo: Yup.number()
    .required("Please Enter Phone No.")
    .typeError("Please Enter Valid Phone No.")
    .max(9999999999, "Please Enter Valid Phone No.")
    .min(1000000000, "Please Enter Valid Phone Number"),
  otp: Yup.number().required("please Enter the OTP"),
});

const MobileLogin = () => {
  const [showOtpField, setShowOtpField] = useState(false);
  const { navigate } = useNavigation();
  const [key, setKey] = React.useState(Math.random());

  const handleSubmit = async (
    val: typeof initialValues,
    actions: FormikHelpers<typeof initialValues>
  ) => {
    actions.setSubmitting(true);

    console.log(val);
    setKey(Math.random());

    actions.setSubmitting(false);
    //@ts-ignore
    navigate(BottomTab);
  };

  const handleLogin = () => {
    // @ts-ignore
    navigate(BottomTab);
  };

  const Register = () => {
    // @ts-ignore
    navigate("Signup");
  };

  const Email = () => {
    // @ts-ignore
    navigate("Login");
  };

  return (
    <>
      <View bg={"white"} h={"full"} mb={2}>
        <Formik
          key={key}
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
          validateOnChange={true}
        >
          {({
            handleSubmit,
            touched,
            errors,
            values,
            isSubmitting,
            setFieldValue,
          }) => {
            return (
              <ScrollView bg={"white"}>
                <Image
                  alignSelf={"center"}
                  mt={24}
                  w={"32"}
                  h={"32"}
                  resizeMode="contain"
                  alt="Image not found"
                  source={require("../../../assets/wirclogo.jpg")}
                />
                <Text
                  fontSize={"lg"}
                  mt={2}
                  color={"amber.600"}
                  alignSelf={"center"}
                >
                  Western India Regional Council of
                </Text>
                <Text fontSize={"sm"} color={"#0f045d"} alignSelf={"center"}>
                  The Institute of Chartered Accountants of India
                </Text>
                <Text
                  mt={5}
                  alignSelf={"center"}
                  fontSize={"40"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                >
                  Log In
                </Text>

                <VStack space={2} alignSelf={"center"} mt={"5"}>
                  <CustomInput
                    currentValue={values.mobileNo}
                    errMsg={errors.mobileNo || ""}
                    isInvalid={!!touched.mobileNo && !!errors.mobileNo}
                    isRequired={true}
                    w={"72"}
                    borderColor={"#0f045d"}
                    label={"Mobile No."}
                    name={"mobileNo"}
                    bgColor="white"
                    placeholder={"Enter your phone no."}
                    setFieldValue={setFieldValue}
                    leftElement={
                      <Icon
                        as={Feather}
                        name={"phone"}
                        ml={3}
                        color={"#0f045d"}
                      />
                    }
                    keyboardType={"phone-pad"}
                  />
                  {!errors.mobileNo ? (
                    <>
                      <CustomInput
                        keyboardType="numeric"
                        errMsg={errors.otp || ""}
                        isInvalid={!!touched.otp && !!errors.otp}
                        label="Otp"
                        name="otp"
                        w={"72"}
                        borderColor={"#0f045d"}
                        placeholder="Enter otp"
                        setFieldValue={setFieldValue}
                        isRequired={true}
                        bgColor="white"
                        currentValue={values.otp}
                        value={values.otp}
                        leftElement={
                          <Icon
                            as={MaterialCommunityIcons}
                            name={"form-textbox-password"}
                            ml={3}
                            color={"#0f045d"}
                          />
                        }
                      />

                      <CustomButton
                        name="Login"
                        mt="8"
                        w={"48"}
                        h={12}
                        alignSelf={"center"}
                        bgColor={"#0f045d"}
                        onPress={handleLogin}
                        borderRadius="full"
                        leftIcon={
                          <Icon
                            as={FontAwesome5}
                            name="lock"
                            mr="1"
                            size="sm"
                          />
                        }
                        isSubmitting={isSubmitting}
                        onSubmit={handleSubmit}
                      />
                    </>
                  ) : (
                    <CustomButton
                      isSubmitting={isSubmitting}
                      name={"Get Otp"}
                      onSubmit={handleSubmit}
                      h={12}
                      mt={2}
                      w={"48"}
                      bgColor={"#0f045d"}
                      borderRadius={25}
                      alignSelf={"center"}
                    />
                  )}

                  <HStack justifyContent={"center"} mt={2} space={2}>
                    <Text fontSize={16}>Login with </Text>
                    <Link
                      onPress={Email}
                      _text={{
                        color: "#0f045d",
                        fontWeight: "semibold",
                        fontSize: "16",
                        textDecoration: "none",
                      }}
                    >
                      Email Address
                    </Link>
                  </HStack>
                </VStack>
              </ScrollView>
            );
          }}
        </Formik>
      </View>
    </>
  );
};

export default MobileLogin;
