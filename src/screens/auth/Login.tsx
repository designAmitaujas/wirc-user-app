import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import {
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useState } from "react";
import * as Yup from "yup";
import { CustomButton, CustomInput } from "../../components/CustomForm";
import BottomTab from "../BottomTab";

const initialValue = {
  email: "xyz@gmail.com",
  password: "1234567890",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email().required(),
  password: Yup.string().min(6).max(18).required(),
});

const Login = () => {
  const { navigate } = useNavigation();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const handleSubmit = () => {
    // @ts-ignore
    navigate(BottomTab);
  };
  const handleLogin = () => {
    // @ts-ignore
    navigate(BottomTab);
  };

  const Register = () => {
    //@ts-ignore
    navigate("Signup");
  };

  const Mobile = () => {
    //@ts-ignore
    navigate("mobile");
  };
  const Forgot = () => {
    //@ts-ignore
    navigate("Forgot");
  };

  return (
    <>
      <View bg={"white"} h={"full"}>
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
                <ScrollView bg={"white"} h={"full"}>
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
                    fontSize={"40"}
                    fontWeight={"semibold"}
                    color={"gray.500"}
                    alignSelf={"center"}
                  >
                    Login
                  </Text>

                  <VStack space={2} alignSelf={"center"} mt={"5"}>
                    <CustomInput
                      w={"72"}
                      borderColor={"#0f045d"}
                      name="email"
                      label="Email Address"
                      currentValue={values.email}
                      errMsg={errors.email}
                      placeholder="Your Email Address"
                      setFieldValue={setFieldValue}
                      isRequired={true}
                      isInvalid={!!touched.email && !!errors.email}
                      leftElement={
                        <Icon
                          as={FontAwesome5}
                          name="user"
                          size={4}
                          ml="3"
                          color="#0f045d"
                        />
                      }
                      bgColor="white"
                    />
                    <CustomInput
                      // secureTextEntry={true}
                      isRequired={true}
                      borderColor={"#0f045d"}
                      w={"72"}
                      name="password"
                      label="Password"
                      currentValue={values.password}
                      errMsg={errors.password}
                      placeholder="Your password"
                      setFieldValue={setFieldValue}
                      bgColor="white"
                      isInvalid={!!touched.password && !!errors.password}
                      type={show ? "text" : "password"}
                      leftElement={
                        <Icon
                          as={Ionicons}
                          name="key-outline"
                          size={5}
                          ml="3"
                          color="#0f045d"
                        />
                      }
                      rightElement={
                        <IconButton
                          mr={0.5}
                          borderRadius={10}
                          onPress={handleClick}
                          icon={
                            show ? (
                              <Icon
                                as={Ionicons}
                                name="eye"
                                size={5}
                                color="#0f045d"
                              />
                            ) : (
                              <Icon
                                as={Ionicons}
                                name="eye-off"
                                size={5}
                                color="#0f045d"
                              />
                            )
                          }
                        />
                      }
                    />

                    {/* <Link
                        alignSelf={"flex-end"}
                        onPress={Forgot}
                        _text={{
                          color: "#313031",
                          fontWeight: "medium",
                          fontSize: "sm",
                          textDecoration: "none",
                        }}
                      >
                        Forgot Password ?
                      </Link> */}

                    <CustomButton
                      name="Login"
                      mt="8"
                      borderRadius={25}
                      w={"48"}
                      h={12}
                      onPress={handleLogin}
                      alignSelf={"center"}
                      bg={"#0f045d"}
                      colorScheme={"white"}
                      leftIcon={
                        <Icon as={FontAwesome5} name="lock" mr="1" size="sm" />
                      }
                      isSubmitting={isSubmitting}
                      onSubmit={handleSubmit}
                    />

                    {/* <HStack justifyContent={"center"} mt={2} space={2}>
                      <Text fontSize={16} color={"gray.500"}>
                        Login with
                      </Text>
                      <Link
                        onPress={Mobile}
                        _text={{
                          color: "#0f045d",
                          fontWeight: "semibold",
                          fontSize: "16",
                          textDecoration: "none",
                        }}
                      >
                        Mobile Number
                      </Link>
                    </HStack> */}
                    {/* <HStack justifyContent="center" mt={"5"} mb={"3"}>
                        <Text
                          fontSize="sm"
                          color="coolGray.600"
                          _dark={{
                            color: "warmGray.200",
                          }}
                        >
                          Don't Have An Account?{" "}
                        </Text>
                        <Link
                          onPress={Register}
                          _text={{
                            color: "#313031",
                            fontWeight: "medium",
                            fontSize: "sm",
                            textDecoration: "none",
                          }}
                        >
                          Sign Up
                        </Link>
                      </HStack> */}
                  </VStack>
                </ScrollView>
              </>
            );
          }}
        </Formik>
      </View>
    </>
  );
};

export default Login;
