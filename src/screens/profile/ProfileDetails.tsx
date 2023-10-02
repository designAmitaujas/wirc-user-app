import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik } from "formik";
import {
  Avatar,
  Button,
  FormControl,
  HStack,
  ScrollView,
  Select,
  Text,
  VStack,
  View,
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";
import { CustomInput } from "../../components/CustomForm";
import { useAppAuthState } from "../../store";

const initialValue = {
  fullname: "",
  email: "",
  state: "",
  city: "",
  mobilenumber: "",
};

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Name is Required"),
  email: Yup.string().email().required(),
  state: Yup.string().required("State is required field"),
  city: Yup.string().required("City is required field"),
  mobilenumber: Yup.string().min(10).max(10).required(),
});

const RestHeader = () => {
  // const { goBack } = useNavigation();
  const { removeAuth } = useAppAuthState();

  const { navigate } = useNavigation();

  const visitingcard = () => {
    // @ts-ignore
    navigate("VisitingCard");
  };

  const logout = async () => {
    removeAuth();
    await new Promise((r) => setTimeout(r, 2000));
    // @ts-ignore
    navigate("Login");
  };

  return (
    <HStack
      backgroundColor="#0f045d"
      borderBottomRadius={40}
      justifyContent={"space-between"}
      // py="3.5"
      h={16}
      px={7}
      alignItems="center"
      alignSelf={"center"}
      w={"100%"}
    >
      {/* <Button
        bg="transparent"
        colorScheme={"#0f045d"}
        w="14%"
        ml={2}
        leftIcon={
          <Icon
            size="md"
            as={<FontAwesome5 name="arrow-left" />}
            color="white"
          />
        }
      /> */}
      <TouchableOpacity onPress={visitingcard}>
        <FontAwesome name="id-card" size={24} color="white" />
      </TouchableOpacity>
      <Text
        color="white"
        // ml={16}
        fontSize="22"
        fontWeight="bold"
        // mb={1}
        // w={"40%"}
      >
        Profile
      </Text>
      <TouchableOpacity onPress={logout}>
        <Feather name="power" size={24} color="white" />
      </TouchableOpacity>
    </HStack>
  );
};

const ProfileScreen = () => {
  const handleSubmit = () => {};

  return (
    <>
      <View bg={"white"} flex={1}>
        <RestHeader />
        <ScrollView
          bg={"white"}
          showsVerticalScrollIndicator={false}
          h={"full"}
        >
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
                    {/* <Button
                      mt="5"
                      mb="2"
                      borderRadius={25}
                      size={"lg"}
                      w={"40"}
                      alignSelf={"center"}
                      bgColor={"amber.600"}
                      //@ts-ignore
                      onPress={visitingcard}
                    >
                      <Text
                        color={"white"}
                        fontSize={"sm"}
                        fontWeight={"medium"}
                      >
                        Virtual Visiting Card
                      </Text>
                    </Button> */}
                    <ScrollView p={4}>
                      <VStack space={1} mt={5} mb={3} alignSelf={"center"}>
                        <Avatar
                          borderWidth={2}
                          borderColor={"#0f045d"}
                          bg="white"
                          alignSelf={"center"}
                          mb={3}
                          size={"xl"}
                          source={{
                            uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                          }}
                        />
                        <CustomInput
                          w={"72"}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          currentValue={values.fullname}
                          errMsg={errors.fullname}
                          isInvalid={!!touched.fullname && !!errors.fullname}
                          label="Full Name"
                          name="fullname"
                          placeholder="Enter fullname Address"
                          setFieldValue={setFieldValue}
                          isRequired={true}
                          value={values.fullname}
                        />

                        <CustomInput
                          w={"72"}
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

                        <FormControl.Label isRequired mt={1}>
                          State
                        </FormControl.Label>
                        <Select
                          // @ts-ignore
                          name="State"
                          errMsg={errors.state}
                          w={"72"}
                          mt={-1}
                          alignSelf={"center"}
                          placeholder="Select State"
                          borderRadius={12}
                          borderColor={"#0f045d"}
                          value={values.state}
                          isInvalid={!!touched.state && !!errors.state}
                          onValueChange={handleChange("state")}
                        >
                          <Select.Item label="Gujrat" value="gujrat" />
                          <Select.Item label="Hariyana" value="hariyana" />
                          <Select.Item label="Bihar" value="bihar" />
                          <Select.Item label="Punjab" value="punjab" />
                        </Select>
                        {errors.state && touched.state && (
                          <Text color={"red.600"} fontSize={"xs"}>
                            {errors.state}
                          </Text>
                        )}

                        <FormControl.Label isRequired>City</FormControl.Label>
                        <Select
                          // @ts-ignore
                          name="City"
                          mt={-1}
                          errMsg={errors.city}
                          w={"72"}
                          alignSelf={"center"}
                          placeholder="Select City"
                          borderRadius={12}
                          borderColor={"#0f045d"}
                          value={values.city}
                          isInvalid={!!touched.city && !!errors.city}
                          onValueChange={handleChange("city")}
                        >
                          <Select.Item label="Mumbai" value="mumbai" />
                          <Select.Item label="Bangalore" value="bangalore" />
                          <Select.Item label="Delhi" value="delhi" />
                          <Select.Item label="Vadodara" value="vadodara" />
                          <Select.Item label="Ahmedabad" value="ahmedabad" />
                        </Select>
                        {errors.city && touched.city && (
                          <Text color={"red.600"} fontSize={"xs"}>
                            {errors.city}
                          </Text>
                        )}

                        <Button
                          mt="10"
                          mb="2"
                          borderRadius={25}
                          size={"lg"}
                          w={"40"}
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

export default ProfileScreen;
