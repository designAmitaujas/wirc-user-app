import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import _ from "lodash";
import {
  Icon,
  IconButton,
  Image,
  ScrollView,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import { useState } from "react";
import * as Yup from "yup";
import { CustomButton, CustomInput } from "../../components/CustomForm";
import {
  IAuthMember,
  useMemberRegistrationAuthResolverMutation,
} from "../../gql/graphql";
import { useAppAuthState } from "../../store";
import BottomTab from "../BottomTab";

const initialValue: IAuthMember = {
  email: "",
  memberType: "",
  password: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.number().required(),
  password: Yup.string().min(6).max(18).required(),
});

const Login = () => {
  const { navigate } = useNavigation();
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const { setAuth } = useAppAuthState();

  const [setAuthUp] = useMemberRegistrationAuthResolverMutation();

  const toast = useToast();

  const handleSubmit = async (
    val: IAuthMember,
    actions: FormikHelpers<IAuthMember>
  ) => {
    actions.setSubmitting(true);

    const response = await setAuthUp({
      variables: {
        options: {
          email: val.email.padStart(6, "0"),
          memberType: "member",
          password: val.password,
        },
      },
    });

    if (response.data?.memberRegistrationAuthResolver.success === true) {
      setAuth({
        jwt: response.data.memberRegistrationAuthResolver.jwt,
        name: response.data.memberRegistrationAuthResolver.name,
      });
      toast.show({ title: _.capitalize("authenticated successfully") });
      // @ts-ignore
      navigate("BottomTab");
    } else {
      toast.show({ title: _.capitalize("authentication error") });
    }

    actions.setSubmitting(false);
  };

  const handleLogin = () => {
    // @ts-ignore
    navigate(BottomTab);
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
                      label="MemberShip Number"
                      currentValue={values.email}
                      errMsg={errors.email || ""}
                      placeholder="Your MemberShip Number"
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
                      isRequired={true}
                      borderColor={"#0f045d"}
                      w={"72"}
                      name="password"
                      label="Password"
                      currentValue={values.password}
                      errMsg={errors.password || ""}
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

                    <CustomButton
                      name="Login"
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
