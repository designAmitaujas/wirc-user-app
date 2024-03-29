import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import {
  Avatar,
  Box,
  Button,
  HStack,
  ScrollView,
  Spinner,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import QRCode from "react-native-qrcode-svg";
import * as Yup from "yup";
import { CustomInput, CustomSelect } from "../../components/CustomForm";
import {
  ICreateMemberRegistration,
  useGetAllCityQuery,
  useGetAllCountryQuery,
  useGetAllGenderQuery,
  useGetAllRegionQuery,
  useGetAllStateQuery,
  useGetAllTitleQuery,
  useMyProfileInformationQuery,
  useUpdateMyProfileMutation,
} from "../../gql/graphql";
import { useAppAuthState } from "../../store";

const male = require("../../../assets/male.png");
const female = require("../../../assets/female.png");

const initialvalues: ICreateMemberRegistration = {
  address1: "",
  address2: "",
  city: "",
  country: "",
  email: "",
  firstName: "",
  gstNo: "",
  hash: "",
  isActive: true,
  isApproved: true,
  lastName: "",
  membershipNo: "",
  middleName: "",
  phone: "",
  pinCode: "",
  regionType: "",
  state: "",
  title: "",
  tradeName: "",
  username: "",
  userType: "member",
  gender: "",
};

const validationSchema = Yup.object().shape({
  isActive: Yup.boolean().oneOf([true, false]),
  address1: Yup.string(),
  address2: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  email: Yup.string(),
  firstName: Yup.string(),
  gstNo: Yup.string(),
  hash: Yup.string(),
  isApproved: Yup.boolean().oneOf([true, false]),
  lastName: Yup.string(),
  membershipNo: Yup.string(),
  middleName: Yup.string(),
  phone: Yup.string(),
  pinCode: Yup.string(),
  regionType: Yup.string(),
  state: Yup.string(),
  title: Yup.string(),
  tradeName: Yup.string(),
  username: Yup.string(),
  gender: Yup.string(),
  userType: Yup.string().oneOf(["member", "none-member", "student"]).required(),
});

const RestHeader = () => {
  // const { goBack } = useNavigation();
  const { removeAuth } = useAppAuthState();

  const { navigate } = useNavigation();

  const handleqrcode = () => {
    // @ts-ignore
    navigate("ticket");
  };
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
      <TouchableOpacity onPress={handleqrcode}>
        <MaterialCommunityIcons name="qrcode-scan" size={24} color="white" />
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
  const [initValue, setInitValue] =
    useState<ICreateMemberRegistration>(initialvalues);

  const [key, setKey] = useState(Math.random());

  const { data: profile } = useMyProfileInformationQuery();
  console.log(profile?.myProfileInformation?.gender);

  useEffect(() => {
    if (profile?.myProfileInformation) {
      setInitValue({
        address1: profile?.myProfileInformation.address1 || "",
        address2: profile?.myProfileInformation.address2 || "",
        city: profile?.myProfileInformation.city?._id || "",
        country: profile?.myProfileInformation.country?._id || "",
        email: profile?.myProfileInformation.email,
        firstName: profile?.myProfileInformation.firstName,
        gstNo: profile?.myProfileInformation.gstNo || "",
        hash: profile?.myProfileInformation.hash,
        lastName: profile?.myProfileInformation.lastName,
        membershipNo: profile?.myProfileInformation.membershipNo,
        middleName: profile?.myProfileInformation.middleName,
        phone: profile?.myProfileInformation.phone || "",
        pinCode: profile?.myProfileInformation.pinCode || "",
        regionType: profile?.myProfileInformation.regionType?._id || "",
        state: profile?.myProfileInformation.state?._id || "",
        title: profile?.myProfileInformation.title?._id || "",
        tradeName: profile?.myProfileInformation.tradeName,
        username: profile?.myProfileInformation.username || "",
        userType: profile?.myProfileInformation.userType || "",
        gender: profile?.myProfileInformation.gender?._id || "",
        isActive: true,
        isApproved: true,
      });

      setKey(Math.random());
    }
  }, [profile]);

  const [createLangauge] = useUpdateMyProfileMutation();
  const { data: region } = useGetAllRegionQuery();
  const { data: title } = useGetAllTitleQuery();
  const { data: city } = useGetAllCityQuery();
  const { data: state } = useGetAllStateQuery();
  const { data: country } = useGetAllCountryQuery();
  const { data: gender } = useGetAllGenderQuery();

  const toast = useToast();

  const handleSubmit = async (
    val: ICreateMemberRegistration,
    actions: FormikHelpers<ICreateMemberRegistration>
  ) => {
    actions.setSubmitting(true);

    const response = await createLangauge({
      variables: {
        options: {
          address1: val.address1 || "",
          address2: val.address2 || "",
          city: val.city,
          country: val.country,
          email: val.email,
          firstName: val.firstName,
          gstNo: val.gstNo || "",
          hash: val.hash,
          lastName: val.lastName,
          membershipNo: val.membershipNo,
          middleName: val.middleName,
          phone: val.phone || "",
          pinCode: val.pinCode || "",
          regionType: val.regionType || "",
          state: val.state,
          title: val.title || "",
          tradeName: val.tradeName,
          username: val.username || "",
          userType: val.userType || "",
          gender: val.gender || "",
          isActive: true,
          isApproved: true,
        },
      },
    });

    if (response.data?.updateMyProfile.success === true) {
      toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
              Profile Updated Successfully
            </Box>
          );
        },
        placement: "top",
      });
    } else {
      toast.show({
        render: () => {
          return (
            <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
              {response.data?.updateMyProfile.msg ||
                "Something went wrong on server"}
            </Box>
          );
        },
        placement: "top",
      });
    }

    actions.setSubmitting(false);
  };

  if (
    !region?.getAllRegion ||
    !title?.getAllTitle ||
    !city?.getAllCity ||
    !country?.getAllCountry ||
    !state?.getAllState ||
    !gender?.getAllGender
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
        <ScrollView
          bg={"white"}
          showsVerticalScrollIndicator={false}
          h={"full"}
        >
          <VStack>
            <Formik
              initialValues={initValue}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
              key={key}
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
                    <VStack space={1} mt={5} mb={3} alignSelf={"center"}>
                      {profile?.myProfileInformation?.gender?.name.toLocaleLowerCase() ===
                      "male" ? (
                        <>
                          <HStack justifyContent="space-between">
                            <Avatar
                              borderWidth={2}
                              borderColor={"#0f045d"}
                              bg="white"
                              alignSelf={"center"}
                              mb={3}
                              size={"xl"}
                              source={male}
                            />
                            <QRCode
                              value={profile.myProfileInformation._id}
                              size={100}
                            />
                          </HStack>
                        </>
                      ) : (
                        <>
                          <HStack justifyContent="space-between">
                            <Avatar
                              borderWidth={2}
                              borderColor={"#0f045d"}
                              bg="white"
                              alignSelf={"center"}
                              mb={3}
                              size={"xl"}
                              source={female}
                            />
                            <QRCode
                              value={profile?.myProfileInformation?._id}
                              size={100}
                            />
                          </HStack>
                        </>
                      )}

                      <CustomInput
                        w={"72"}
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        currentValue={values.firstName}
                        errMsg={errors.firstName || ""}
                        isInvalid={!!touched.firstName && !!errors.firstName}
                        label="First Name"
                        name="firstName"
                        placeholder="Enter First Name "
                        setFieldValue={setFieldValue}
                        isRequired={false}
                        value={values.firstName}
                      />
                      <CustomInput
                        w={"72"}
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        currentValue={values.middleName}
                        errMsg={errors.middleName || ""}
                        isInvalid={!!touched.middleName && !!errors.middleName}
                        label="Middle Name"
                        name="middleName"
                        placeholder="Enter Middle Name "
                        setFieldValue={setFieldValue}
                        isRequired={false}
                        value={values.middleName}
                      />
                      <CustomInput
                        w={"72"}
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        currentValue={values.lastName}
                        errMsg={errors.lastName || ""}
                        isInvalid={!!touched.lastName && !!errors.lastName}
                        label="Last Name"
                        name="lastName"
                        placeholder="Enter last Name "
                        setFieldValue={setFieldValue}
                        isRequired={false}
                        value={values.lastName}
                      />

                      <CustomInput
                        w={"72"}
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        currentValue={values.email}
                        errMsg={errors.email || ""}
                        isInvalid={!!touched.email && !!errors.email}
                        label="Email Address"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Enter Email Address"
                        setFieldValue={setFieldValue}
                        isRequired={false}
                        value={values.email}
                      />
                      <CustomInput
                        w={"72"}
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        currentValue={values.phone}
                        errMsg={errors.phone || ""}
                        isInvalid={!!touched.phone && !!errors.phone}
                        label="Mobile Number"
                        name="phone"
                        placeholder="Enter Mobile Number"
                        setFieldValue={setFieldValue}
                        isRequired={false}
                        keyboardAppearance="light"
                        keyboardType="number-pad"
                        value={values.phone}
                      />
                      <CustomSelect
                        options={gender.getAllGender
                          .filter((item) => item.isActive === true)
                          .map((item) => ({
                            value: item._id,
                            label: item.name,
                          }))}
                        errMsg={errors.gender || ""}
                        isInvalid={!!touched.gender && !!errors.gender}
                        label={"gender"}
                        name="gender"
                        placeholder="Select gender"
                        initValue={values.gender}
                        isRequired={false}
                        setFieldValue={setFieldValue}
                        w={"72"}
                        borderColor={"#0f045d"}
                        bgColor={"white"}
                        borderRadius="xl"
                      />

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
