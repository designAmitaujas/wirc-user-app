import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import _ from "lodash";
import {
  Button,
  Icon,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import React, { useState } from "react";
import * as Yup from "yup";
import { CustomButton, CustomInput } from "../../components/CustomForm";
import {
  IGetEmailInput,
  useGenEmailWithMembershipNumberMutation,
  useVerifyEmailWithMembershipNumberMutation,
} from "../../gql/graphql";
import { useAppAuthState } from "../../store";
import BottomTab from "../BottomTab";

interface ICustomMemberRegistration extends IGetEmailInput {
  usertype: string;
  membershipNumber: string;
}

const initialValues: ICustomMemberRegistration = {
  email: "",
  otp: "",
  usertype: "",
  membershipNumber: "",
};

const validationSchema = Yup.object().shape({
  Email: Yup.string(),
  Otp: Yup.string(),
  userType: Yup.string().oneOf(["member", "none-member", "student"]),
  membershipNumber: Yup.string(),
});
const MobileLogin = () => {
  const { navigate, goBack } = useNavigation();
  const [key, setKey] = React.useState(Math.random());

  const handleLogin = () => {
    // @ts-ignore
    navigate(BottomTab);
  };

  const handlegobacck = () => {
    // @ts-ignore
    navigate("Login");
  };

  const [genEmailOtp] = useGenEmailWithMembershipNumberMutation();
  const [verifyEmailOtp] = useVerifyEmailWithMembershipNumberMutation();

  const [isOtpSent, setIsOtpSent] = useState(false);

  const toast = useToast();
  const { setAuth } = useAppAuthState();

  const handleSubmit = async (
    val: ICustomMemberRegistration,
    actions: FormikHelpers<ICustomMemberRegistration>
  ) => {
    if (isOtpSent) {
      const response = await verifyEmailOtp({
        variables: {
          options: { email: val.email || val.membershipNumber, otp: val.otp },
        },
      });

      if (response.data?.verifyEmailWithMembershipNumber.success === true) {
        setAuth({
          jwt: response.data.verifyEmailWithMembershipNumber.jwt,
          name: response.data.verifyEmailWithMembershipNumber.name,
        });
        toast.show({ title: _.capitalize("authenticated successfully") });
        // @ts-ignore
        navigate("BottomTab");
      } else {
        toast.show({ title: _.capitalize("authentication error") });
      }
    } else {
      const response = await genEmailOtp({
        variables: {
          options: {
            email: val.email || "",
            membershipNumber: val.membershipNumber || "",
          },
        },
      });

      if (response.data?.genEmailWithMembershipNumber.success === true) {
        toast.show({ title: "Check your email" });
        setIsOtpSent(true);
      } else {
        {
          val.usertype === "member"
            ? toast.show({
                title: response.data?.genEmailWithMembershipNumber.msg,
              })
            : toast.show({ title: "Email Address doesnt exist" });
        }
      }
    }
  };
  return (
    <>
      <View bg={"white"} h={"full"} mb={2}>
        <Button
          bg="transparent"
          colorScheme={"white"}
          // w="14%"
          onPress={handlegobacck}
          justifyContent="flex-start"
          leftIcon={
            <Icon
              size="2xl"
              as={<FontAwesome5 name="arrow-left" />}
              color="#0f045d"
            />
          }
        />
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
                  source={require("../../../assets/wirclogo.png")}
                />
                <Image
                  alignSelf={"center"}
                  w={"100%"}
                  resizeMode="contain"
                  alt="Image not found"
                  source={require("../../../assets/wirclogo2.png")}
                />

                <Text
                  mt={5}
                  fontSize={"40"}
                  fontWeight={"semibold"}
                  color={"gray.500"}
                  alignSelf={"center"}
                >
                  Login
                </Text>

                <VStack space={2} alignSelf={"center"} mt={"5"}>
                  <CustomInput
                    currentValue={values.membershipNumber}
                    errMsg={errors.membershipNumber || ""}
                    isInvalid={
                      !!touched.membershipNumber && !!errors.membershipNumber
                    }
                    isRequired={true}
                    w={"72"}
                    borderColor={"#0f045d"}
                    label={"Membership Number"}
                    name={"membershipNumber"}
                    bgColor="white"
                    placeholder={"Enter your membership number"}
                    setFieldValue={setFieldValue}
                  />
                  {!errors.membershipNumber ? (
                    <>
                      <CustomInput
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
