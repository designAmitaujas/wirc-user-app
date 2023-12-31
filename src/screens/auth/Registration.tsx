import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import {
  Button,
  HStack,
  Icon,
  Image,
  ScrollView,
  Spinner,
  Text,
  Toast,
  VStack,
  View,
} from "native-base";
import * as Yup from "yup";
import { CustomInput, CustomSelect } from "../../components/CustomForm";
import {
  ICreateMemberRegistration,
  useCreateMemberRegistrationMutation,
  useGetAllCityQuery,
  useGetAllCountryQuery,
  useGetAllGenderQuery,
  useGetAllRegionQuery,
  useGetAllStateQuery,
  useGetAllTitleQuery,
  useMemberRegistrationAuthResolverMutation,
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
  isApproved: false,
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
  userType: "",
  gender: "",
};

const validationSchema = Yup.object().shape({
  isActive: Yup.boolean().oneOf([true, false]),
  address1: Yup.string().required(),
  address2: Yup.string(),
  city: Yup.string(),
  country: Yup.string(),
  email: Yup.string().required(),
  firstName: Yup.string().required(),
  gstNo: Yup.string(),
  hash: Yup.string().required(),
  isApproved: Yup.boolean().oneOf([true, false]),
  lastName: Yup.string().required(),
  membershipNo: Yup.string().required(),
  middleName: Yup.string().required(),
  phone: Yup.string().required(),
  pinCode: Yup.string(),
  regionType: Yup.string(),
  state: Yup.string(),
  title: Yup.string(),
  tradeName: Yup.string(),
  username: Yup.string(),
  gender: Yup.string(),
  userType: Yup.string().oneOf(["member"]),
});
const RestHeader = () => {
  const { navigate } = useNavigation();
  const handlegobacck = () => {
    // @ts-ignore
    navigate("Login");
  };
  return (
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
  );
};

const Registration = () => {
  const { navigate } = useNavigation();
  const [createLangauge] = useCreateMemberRegistrationMutation();
  const { data: region } = useGetAllRegionQuery();
  const { data: title } = useGetAllTitleQuery();
  const { data: city } = useGetAllCityQuery();
  const { data: state } = useGetAllStateQuery();
  const { data: country } = useGetAllCountryQuery();
  const { data: gender } = useGetAllGenderQuery();

  const [setAuthUp] = useMemberRegistrationAuthResolverMutation();

  const { setAuth } = useAppAuthState();

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
          membershipNo: val.membershipNo || "",
          middleName: val.middleName,
          phone: val.phone || "",
          pinCode: val.pinCode || "",
          regionType: val.regionType || "",
          state: val.state,
          title: val.title || "",
          gender: val.gender || "",
          tradeName: val.tradeName,
          username: val.username,
          userType: "member",
          isActive: true,
          isApproved: false,
        },
      },
    });

    if (response.data?.createMemberRegistration.success === true) {
      const responseV2 = await setAuthUp({
        variables: {
          options: {
            email: val.membershipNo || val.email,
            password: val.hash,
            memberType: val.userType,
          },
        },
      });

      if (responseV2.data?.memberRegistrationAuthResolver.success === true) {
        setAuth({
          jwt: responseV2.data.memberRegistrationAuthResolver.jwt,
          name: responseV2.data.memberRegistrationAuthResolver.name,
        });

        Toast.show({ title: "Authentication successfully" });
        // @ts-ignore
        navigate("BottomTab");
      } else {
        Toast.show({ title: "Authentication error" });
      }
    } else {
      Toast.show({
        title:
          response.data?.createMemberRegistration.msg ||
          "Something went wrong on server",
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
          <Image
            alignSelf={"center"}
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
            Registration
          </Text>
          <VStack>
            <Formik
              initialValues={initialvalues}
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
                    <ScrollView p={4}>
                      <VStack space={1} mt={5} mb={3} alignSelf={"center"}>
                        <CustomInput
                          w={"72"}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          currentValue={values.membershipNo}
                          errMsg={errors.membershipNo || ""}
                          isInvalid={
                            !!touched.membershipNo && !!errors.membershipNo
                          }
                          label="Membership Number"
                          name="membershipNo"
                          placeholder="Enter membership number"
                          setFieldValue={setFieldValue}
                          isRequired={true}
                          value={values.membershipNo}
                        />
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
                          isRequired={true}
                          value={values.firstName}
                        />
                        <CustomInput
                          w={"72"}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          currentValue={values.middleName}
                          errMsg={errors.middleName || ""}
                          isInvalid={
                            !!touched.middleName && !!errors.middleName
                          }
                          label="Middle Name"
                          name="middleName"
                          placeholder="Enter Middle Name "
                          setFieldValue={setFieldValue}
                          isRequired={true}
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
                          isRequired={true}
                          value={values.lastName}
                        />

                        <CustomInput
                          w={"72"}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          currentValue={values.hash}
                          errMsg={errors.hash || ""}
                          isInvalid={!!touched.hash && !!errors.hash}
                          label="Password"
                          name="hash"
                          placeholder="Enter your password"
                          setFieldValue={setFieldValue}
                          isRequired={true}
                          value={values.hash}
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
                          isRequired={true}
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
                          isRequired={true}
                          keyboardAppearance="light"
                          keyboardType="number-pad"
                          value={values.phone}
                        />

                        <CustomInput
                          w={"72"}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          currentValue={values.address1}
                          errMsg={errors.address1 || ""}
                          isInvalid={!!touched.address1 && !!errors.address1}
                          label="Address"
                          name="address1"
                          placeholder="Enter your address"
                          setFieldValue={setFieldValue}
                          isRequired={true}
                          value={values.address1}
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

                        <CustomSelect
                          options={country.getAllCountry
                            .filter((item) => item.isActive === true)
                            .map((item) => ({
                              value: item._id,
                              label: item.name,
                            }))}
                          errMsg={errors.country || ""}
                          isInvalid={!!touched.country && !!errors.country}
                          label={"country"}
                          name="country"
                          placeholder="Select country"
                          initValue={values.country}
                          isRequired={false}
                          setFieldValue={setFieldValue}
                          w={"72"}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          borderRadius="xl"
                        />
                        <CustomSelect
                          options={state?.getAllState
                            .filter((item) => item.isActive === true)
                            .map((item) => ({
                              value: item._id,
                              label: item.name,
                            }))}
                          errMsg={errors.state || ""}
                          isInvalid={!!touched.state && !!errors.state}
                          label={"state"}
                          name="state"
                          placeholder="Select state"
                          initValue={values.state}
                          isRequired={false}
                          setFieldValue={setFieldValue}
                          w={"72"}
                          borderColor={"#0f045d"}
                          bgColor={"white"}
                          borderRadius="xl"
                        />
                        <CustomSelect
                          options={city?.getAllCity
                            .filter((item) => item.isActive === true)
                            .map((item) => ({
                              value: item._id,
                              label: item.name,
                            }))}
                          errMsg={errors.city || ""}
                          isInvalid={!!touched.city && !!errors.city}
                          label={"city"}
                          name="city"
                          placeholder="Select city"
                          initValue={values.city}
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

export default Registration;
