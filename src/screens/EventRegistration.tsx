import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Formik } from "formik";
import { Box, HStack, ScrollView, Text, VStack, View } from "native-base";
import { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";
import { CustomInput, CustomSelect } from "../components/CustomForm";
import {
  GetCpeEventByIdQuery,
  useGetAllCityQuery,
  useGetAllCountryQuery,
  useGetAllStateQuery,
  useGetCpeEventByIdLazyQuery,
} from "../gql/graphql";

const initalValue = {
  membershipNumber: "",
  name: "",
  organization: "",
  email: "",
  contactNo: "",
  gstNo: "",
  address: "",
  country: "",
  state: "",
  city: "",
  pincode: "",
  billingEmail: "",
  billingGst: "",
  billingName: "",
};

const validationSchema = Yup.object().shape({
  membershipNumber: Yup.string().required(),
  name: Yup.string().required(),
  organization: Yup.string().required(),
  email: Yup.string().required(),
  contactNo: Yup.string().required(),
  gstNo: Yup.string(),
  address: Yup.string().required(),
  country: Yup.string().required(),
  state: Yup.string().required(),
  city: Yup.string().required(),
  pincode: Yup.string().required(),
  billingEmail: Yup.string().required(),
  billingGst: Yup.string(),
  billingName: Yup.string().required(),
});

type IFormikInputType = typeof initalValue;

const EventRegistration = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();

  const [eventInformation, setEventInformation] = useState<
    GetCpeEventByIdQuery["getCpeEventById"] | null | undefined
  >();

  const { data: countryList } = useGetAllCountryQuery();
  const { data: stateList } = useGetAllStateQuery();
  const { data: cityList } = useGetAllCityQuery();

  const [getEventInformation] = useGetCpeEventByIdLazyQuery();

  useEffect(() => {
    const { eventId } = params as { eventId?: string };

    if (eventId) {
      (async () => {
        const response = await getEventInformation({
          variables: { options: { id: eventId } },
        });

        if (response.data?.getCpeEventById) {
          setEventInformation(response.data.getCpeEventById);
        }
      })();
    }
  }, [params]);

  const handleSubmit = () => {};

  return (
    <View bg={"white"} flex={1}>
      <Box
        bg={"#0f045d"}
        h={"16"}
        w={"full"}
        borderBottomRadius={40}
        justifyContent={"center"}
      >
        <HStack mx={7} alignItems={"center"}>
          <TouchableOpacity onPress={goBack}>
            <FontAwesome5 name="arrow-left" size={22} color="white" />
          </TouchableOpacity>
          <Text color={"white"} fontSize={"xl"} fontWeight={"semibold"} ml={16}>
            {eventInformation?.name}
          </Text>
        </HStack>
      </Box>
      <ScrollView flex={1}>
        <Formik
          initialValues={initalValue}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue }) => {
            return (
              <VStack alignSelf={"center"} mt={"5"}>
                <CustomInput
                  w={"72"}
                  borderColor={"#0f045d"}
                  name="membershipNumber"
                  label="MemberShip Number"
                  currentValue={values.membershipNumber}
                  errMsg={errors.membershipNumber || ""}
                  placeholder="Your MemberShip Number"
                  setFieldValue={setFieldValue}
                  isRequired={true}
                  isInvalid={
                    !!touched.membershipNumber && !!errors.membershipNumber
                  }
                  bgColor="white"
                />

                <CustomInput
                  w={"72"}
                  borderColor={"#0f045d"}
                  name="name"
                  label="name"
                  currentValue={values.name}
                  errMsg={errors.name || ""}
                  placeholder="Your name"
                  setFieldValue={setFieldValue}
                  isRequired={true}
                  isInvalid={!!touched.name && !!errors.name}
                  bgColor="white"
                />

                <CustomInput
                  w={"72"}
                  borderColor={"#0f045d"}
                  name="organization"
                  label="organization"
                  currentValue={values.organization}
                  errMsg={errors.organization || ""}
                  placeholder="Your organization"
                  setFieldValue={setFieldValue}
                  isRequired={true}
                  isInvalid={!!touched.organization && !!errors.organization}
                  bgColor="white"
                />

                <CustomInput
                  w={"72"}
                  borderColor={"#0f045d"}
                  name="email"
                  label="email"
                  currentValue={values.email}
                  errMsg={errors.email || ""}
                  placeholder="Your email"
                  setFieldValue={setFieldValue}
                  isRequired={true}
                  isInvalid={!!touched.email && !!errors.email}
                  bgColor="white"
                />

                <CustomInput
                  w={"72"}
                  borderColor={"#0f045d"}
                  name="contactNo"
                  label="contact No"
                  currentValue={values.contactNo}
                  errMsg={errors.contactNo || ""}
                  placeholder="Your contact No"
                  setFieldValue={setFieldValue}
                  isRequired={true}
                  isInvalid={!!touched.contactNo && !!errors.contactNo}
                  bgColor="white"
                />

                <CustomInput
                  w={"72"}
                  borderColor={"#0f045d"}
                  name="gstNo"
                  label="gst No"
                  currentValue={values.gstNo}
                  errMsg={errors.gstNo || ""}
                  placeholder="Your gst No"
                  setFieldValue={setFieldValue}
                  isRequired={true}
                  isInvalid={!!touched.gstNo && !!errors.gstNo}
                  bgColor="white"
                />

                <CustomInput
                  w={"72"}
                  borderColor={"#0f045d"}
                  name="address"
                  label="address"
                  currentValue={values.address}
                  errMsg={errors.address || ""}
                  placeholder="Your address"
                  setFieldValue={setFieldValue}
                  isRequired={true}
                  isInvalid={!!touched.address && !!errors.address}
                  bgColor="white"
                />

                {countryList?.getAllCountry && (
                  <CustomSelect
                    w={"72"}
                    borderColor={"#0f045d"}
                    name="country"
                    label="country"
                    options={countryList.getAllCountry
                      .filter((item) => item.isActive === true)
                      .map((item) => ({
                        value: item._id,
                        label: item.name,
                      }))}
                    errMsg={errors.country || ""}
                    placeholder="Select country"
                    setFieldValue={setFieldValue}
                    isRequired={true}
                    isInvalid={!!touched.country && !!errors.country}
                    bgColor="white"
                  />
                )}

                {stateList?.getAllState && (
                  <CustomSelect
                    w={"72"}
                    borderColor={"#0f045d"}
                    name="state"
                    label="state"
                    options={stateList.getAllState
                      .filter((item) => item.isActive === true)
                      .filter((item) => item.country?._id === values.country)
                      .map((item) => ({
                        value: item._id,
                        label: item.name,
                      }))}
                    errMsg={errors.state || ""}
                    placeholder="Select state"
                    setFieldValue={setFieldValue}
                    isRequired={true}
                    isInvalid={!!touched.state && !!errors.state}
                    bgColor="white"
                  />
                )}

                {cityList?.getAllCity && (
                  <CustomSelect
                    w={"72"}
                    borderColor={"#0f045d"}
                    name="state"
                    label="state"
                    options={cityList.getAllCity
                      .filter((item) => item.isActive === true)
                      .filter((item) => item.state?._id === values.state)
                      .map((item) => ({
                        value: item._id,
                        label: item.name,
                      }))}
                    errMsg={errors.state || ""}
                    placeholder="Select state"
                    setFieldValue={setFieldValue}
                    isRequired={true}
                    isInvalid={!!touched.state && !!errors.state}
                    bgColor="white"
                  />
                )}

                <CustomInput
                  w={"72"}
                  borderColor={"#0f045d"}
                  name="pincode"
                  label="pincode"
                  currentValue={values.pincode}
                  errMsg={errors.pincode || ""}
                  placeholder="Your pincode"
                  setFieldValue={setFieldValue}
                  isRequired={true}
                  isInvalid={!!touched.pincode && !!errors.pincode}
                  bgColor="white"
                />
              </VStack>
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default EventRegistration;
