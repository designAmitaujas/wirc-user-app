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
                  source={require("../../../assets/wirclogo.png")}
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

// import { FontAwesome5, Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { useNavigation } from "@react-navigation/native";
// import { Formik, FormikHelpers } from "formik";
// import _ from "lodash";
// import {
//   Icon,
//   IconButton,
//   Image,
//   ScrollView,
//   Text,
//   VStack,
//   View,
//   useToast,
// } from "native-base";
// import { useState } from "react";
// import * as Yup from "yup";
// import {
//   CustomButton,
//   CustomInput,
//   CustomSelect,
// } from "../../components/CustomForm";
// import {
//   IAuthMember,
//   useMemberRegistrationAuthResolverMutation,
// } from "../../gql/graphql";
// import { useAppAuthState } from "../../store";
// import BottomTab from "../BottomTab";

// const initialValue: IAuthMember = {
//   email: "",
//   memberType: "",
//   password: "",
// };

// const validationSchema = Yup.object().shape({
//   email: Yup.number().required(),
//   password: Yup.string().min(6).max(18).required(),
//   memberType: Yup.string().oneOf(["member", "none-member", "student"]),
// });

// const Login = () => {
//   const { navigate } = useNavigation();
//   const [show, setShow] = useState(false);
//   const handleClick = () => setShow(!show);

//   const { setAuth } = useAppAuthState();

//   const [setAuthUp] = useMemberRegistrationAuthResolverMutation();

//   const toast = useToast();

//   const handleSubmit = async (
//     val: IAuthMember,
//     actions: FormikHelpers<IAuthMember>
//   ) => {
//     actions.setSubmitting(true);

//     const response = await setAuthUp({
//       variables: {
//         options: {
//           email: val.email.padStart(6, "0"),
//           memberType: val.memberType,
//           password: val.password,
//         },
//       },
//     });

//     if (response.data?.memberRegistrationAuthResolver.success === true) {
//       setAuth({
//         jwt: response.data.memberRegistrationAuthResolver.jwt,
//         name: response.data.memberRegistrationAuthResolver.name,
//       });
//       toast.show({ title: _.capitalize("authenticated successfully") });
//       // @ts-ignore
//       navigate("BottomTab");
//     } else {
//       toast.show({ title: _.capitalize("authentication error") });
//     }

//     actions.setSubmitting(false);
//   };

//   const handleLogin = () => {
//     // @ts-ignore
//     navigate(BottomTab);
//   };

//   return (
//     <>
//       <View bg={"white"} h={"full"}>
//         <Formik
//           initialValues={initialValue}
//           validationSchema={validationSchema}
//           onSubmit={handleSubmit}
//         >
//           {({
//             handleSubmit,
//             values,
//             touched,
//             errors,
//             setFieldValue,
//             isSubmitting,
//           }) => {
//             return (
//               <>
//                 <ScrollView bg={"white"} h={"full"}>
//                   <Image
//                     alignSelf={"center"}
//                     mt={10}
//                     w={"32"}
//                     h={"32"}
//                     resizeMode="contain"
//                     alt="Image not found"
//                     source={require("../../../assets/wirclogo.png")}
//                   />
//                   <Image
//                     alignSelf={"center"}
//                     w={"100%"}
//                     resizeMode="contain"
//                     alt="Image not found"
//                     source={require("../../../assets/wirc-logo.png")}
//                   />
//                   <Text
//                     mt={5}
//                     fontSize={"40"}
//                     fontWeight={"semibold"}
//                     color={"gray.500"}
//                     alignSelf={"center"}
//                   >
//                     Login
//                   </Text>

//                   <VStack space={2} alignSelf={"center"} mt={"5"}>
//                     <CustomSelect
//                       options={[
//                         { value: "member", label: "member" },
//                         { value: "none-member", label: "non member" },
//                         { value: "student", label: "student" },
//                       ]}
//                       //@ts-ignore
//                       leftElement={
//                         <Icon
//                           as={FontAwesome5}
//                           name="user"
//                           size={4}
//                           ml="3"
//                           color="#0f045d"
//                         />
//                       }
//                       dropdownIcon={
//                         <MaterialIcons
//                           name="arrow-drop-down"
//                           size={24}
//                           style={{ marginRight: 10 }}
//                         />
//                       }
//                       borderColor={"#0f045d"}
//                       shadow={5}
//                       fontSize={"xs"}
//                       borderRadius={10}
//                       placeholderTextColor={"black"}
//                       errMsgr={errors.memberType || ""}
//                       isInvalid={!!touched.memberType && !!errors.memberType}
//                       label={"User Type"}
//                       name="memberType"
//                       placeholder="Enter User Type"
//                       setFieldValue={setFieldValue}
//                       initValue={values.memberType}
//                       md="12"
//                       lg="12"
//                     />
//                     {values.memberType === "none-member" ? (
//                       <>
//                         <CustomInput
//                           w={"72"}
//                           borderColor={"#0f045d"}
//                           name="email"
//                           label="Email"
//                           currentValue={values.email}
//                           errMsg={errors.email || ""}
//                           placeholder="Your Email Address"
//                           setFieldValue={setFieldValue}
//                           isRequired={true}
//                           isInvalid={!!touched.email && !!errors.email}
//                           leftElement={
//                             <Icon
//                               as={FontAwesome5}
//                               name="user"
//                               size={4}
//                               ml="3"
//                               color="#0f045d"
//                             />
//                           }
//                           bgColor="white"
//                         />
//                       </>
//                     ) : (
//                       <>
//                         <CustomInput
//                           w={"72"}
//                           borderColor={"#0f045d"}
//                           name="email"
//                           label={
//                             values.memberType === "member"
//                               ? "MemberShip Number"
//                               : "Student Registration Number"
//                           }
//                           currentValue={values.email}
//                           errMsg={errors.email || ""}
//                           placeholder={
//                             values.memberType === "member"
//                               ? "Enter your MemberShip Number"
//                               : "Enter your Student Registration Number"
//                           }
//                           setFieldValue={setFieldValue}
//                           isRequired={true}
//                           isInvalid={!!touched.email && !!errors.email}
//                           leftElement={
//                             <Icon
//                               as={FontAwesome5}
//                               name="user"
//                               size={4}
//                               ml="3"
//                               color="#0f045d"
//                             />
//                           }
//                           bgColor="white"
//                         />
//                       </>
//                     )}

//                     <CustomInput
//                       isRequired={true}
//                       borderColor={"#0f045d"}
//                       w={"72"}
//                       name="password"
//                       label="Password"
//                       currentValue={values.password}
//                       errMsg={errors.password || ""}
//                       placeholder="Your password"
//                       setFieldValue={setFieldValue}
//                       bgColor="white"
//                       isInvalid={!!touched.password && !!errors.password}
//                       type={show ? "text" : "password"}
//                       leftElement={
//                         <Icon
//                           as={Ionicons}
//                           name="key-outline"
//                           size={5}
//                           ml="3"
//                           color="#0f045d"
//                         />
//                       }
//                       rightElement={
//                         <IconButton
//                           mr={0.5}
//                           borderRadius={10}
//                           onPress={handleClick}
//                           icon={
//                             show ? (
//                               <Icon
//                                 as={Ionicons}
//                                 name="eye"
//                                 size={5}
//                                 color="#0f045d"
//                               />
//                             ) : (
//                               <Icon
//                                 as={Ionicons}
//                                 name="eye-off"
//                                 size={5}
//                                 color="#0f045d"
//                               />
//                             )
//                           }
//                         />
//                       }
//                     />

//                     <CustomButton
//                       name="Login"
//                       mt="8"
//                       borderRadius={25}
//                       w={"48"}
//                       h={12}
//                       alignSelf={"center"}
//                       bg={"#0f045d"}
//                       colorScheme={"white"}
//                       leftIcon={
//                         <Icon as={FontAwesome5} name="lock" mr="1" size="sm" />
//                       }
//                       isSubmitting={isSubmitting}
//                       onSubmit={handleSubmit}
//                     />
//                   </VStack>
//                 </ScrollView>
//               </>
//             );
//           }}
//         </Formik>
//       </View>
//     </>
//   );
// };

// export default Login;
