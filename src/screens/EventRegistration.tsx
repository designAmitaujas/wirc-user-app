import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Formik, FormikErrors, FormikHelpers, FormikTouched } from "formik";
import _ from "lodash";
import {
  Box,
  HStack,
  Icon,
  ScrollView,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import AllInOneSDKManager from "paytm_allinone_react-native";
import { FC, useEffect, useState } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import * as Yup from "yup";
import {
  CustomButton,
  CustomInput,
  CustomSelect,
} from "../components/CustomForm";
import {
  GetAllCityQuery,
  GetAllCountryQuery,
  GetAllStateQuery,
  GetCpeEventByIdQuery,
  GetCpeEventRangeByCpeIdQuery,
  useGenEventPaymnetMutation,
  useGetAllCityQuery,
  useGetAllCountryQuery,
  useGetAllStateQuery,
  useGetCountByCpeEventQuery,
  useGetCpeEventByIdLazyQuery,
  useGetCpeEventRangeByCpeIdQuery,
  useGetMemberInfoByMembershipNumberMutation,
} from "../gql/graphql";

// const initalValue = {
//   membershipNumber: "",
//   name: "",
//   organization: "",
//   email: "",
//   contactNo: "",
//   gstNo: "",
//   address: "",
//   country: "",
//   state: "",
//   city: "",
//   pincode: "",
//   userType: "",
//   billingEmail: "",
//   billingGst: "",
//   billingName: "",
// };

const initalValue = {
  address: "vadodara",
  billingEmail: "design@amitaujas.com",
  billingGst: "123456",
  billingName: "Chauhan Harsh",
  city: "NUDE5I4_",
  contactNo: "8401534693",
  country: "32QemeLO",
  email: "design@amitaujas.com",
  gstNo: "123456",
  membershipNumber: "010203",
  name: "chauhan",
  organization: "amitaujas",
  pincode: "390016",
  state: "oWLJbpA4",
  userType: "bhlYXdvp",
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

const RenderForm: FC<{
  values: IFormikInputType;
  errors: FormikErrors<IFormikInputType>;
  touched: FormikTouched<IFormikInputType>;
  setFieldValue: (arg0: string, val: any) => void;
  country: GetAllCountryQuery["getAllCountry"];
  state: GetAllStateQuery["getAllState"];
  city: GetAllCityQuery["getAllCity"];
  cpeEvent: GetCpeEventRangeByCpeIdQuery["getCpeEventRangeByCpeId"];
  isSubmitting: boolean;
  handleSubmit: any;
}> = ({
  values,
  errors,
  touched,
  setFieldValue,
  country,
  state,
  city,
  cpeEvent,
  handleSubmit,
  isSubmitting,
}) => {
  const [getData] = useGetMemberInfoByMembershipNumberMutation();

  useEffect(() => {
    (async () => {
      if (values.membershipNumber) {
        const response = await getData({
          variables: { options: { id: values.membershipNumber } },
        });

        if (response.data?.getMemberInfoByMembershipNumber) {
          setFieldValue(
            "name",
            response.data.getMemberInfoByMembershipNumber.name
          );

          setFieldValue(
            "organization",
            response.data.getMemberInfoByMembershipNumber.organization
          );

          setFieldValue(
            "email",
            response.data.getMemberInfoByMembershipNumber.email
          );

          setFieldValue(
            "contactNo",
            response.data.getMemberInfoByMembershipNumber.contactInfo
          );

          setFieldValue(
            "gstNo",
            response.data.getMemberInfoByMembershipNumber.gst
          );

          setFieldValue(
            "address",
            response.data.getMemberInfoByMembershipNumber.address
          );

          setFieldValue(
            "country",
            response.data.getMemberInfoByMembershipNumber.country
          );

          setFieldValue(
            "state",
            response.data.getMemberInfoByMembershipNumber.state
          );

          setFieldValue(
            "city",
            response.data.getMemberInfoByMembershipNumber.city
          );

          setFieldValue(
            "pincode",
            response.data.getMemberInfoByMembershipNumber.pincode
          );
        }
      }
    })();
  }, [values.membershipNumber]);

  return (
    <VStack alignSelf={"center"} mt={"5"} mb={"10"}>
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
        isInvalid={!!touched.membershipNumber && !!errors.membershipNumber}
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

      <CustomSelect
        w={"72"}
        borderColor={"#0f045d"}
        name="country"
        label="country"
        options={country
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

      <CustomSelect
        w={"72"}
        borderColor={"#0f045d"}
        name="state"
        label="state"
        options={state
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

      <CustomSelect
        w={"72"}
        borderColor={"#0f045d"}
        name="city"
        label="city"
        options={city
          .filter((item) => item.isActive === true)
          .filter((item) => item.state?._id === values.state)
          .map((item) => ({
            value: item._id,
            label: item.name,
          }))}
        errMsg={errors.city || ""}
        placeholder="Select state"
        setFieldValue={setFieldValue}
        isRequired={true}
        isInvalid={!!touched.city && !!errors.city}
        bgColor="white"
      />

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

      <CustomSelect
        w={"72"}
        borderColor={"#0f045d"}
        name="userType"
        label="User Type"
        options={cpeEvent
          .filter((item) => item.isActive === true)
          .filter((item) => item.isForMember === true)
          .map((item) => ({
            value: item._id,
            label: item.name + "- ₹" + item.price,
          }))}
        errMsg={errors.userType || ""}
        placeholder="Select user Type"
        setFieldValue={setFieldValue}
        isRequired={true}
        isInvalid={!!touched.userType && !!errors.userType}
        bgColor="white"
      />

      <CustomInput
        w={"72"}
        borderColor={"#0f045d"}
        name="billingEmail"
        label="billing Email"
        currentValue={values.billingEmail}
        errMsg={errors.billingEmail || ""}
        placeholder="Your billing Email"
        setFieldValue={setFieldValue}
        isRequired={true}
        isInvalid={!!touched.billingEmail && !!errors.billingEmail}
        bgColor="white"
      />

      <CustomInput
        w={"72"}
        borderColor={"#0f045d"}
        name="billingGst"
        label="billing Gst"
        currentValue={values.billingGst}
        errMsg={errors.billingGst || ""}
        placeholder="Your billing Gst"
        setFieldValue={setFieldValue}
        isRequired={true}
        isInvalid={!!touched.billingGst && !!errors.billingGst}
        bgColor="white"
      />

      <CustomInput
        w={"72"}
        borderColor={"#0f045d"}
        name="billingName"
        label="billing Name"
        currentValue={values.billingName}
        errMsg={errors.billingName || ""}
        placeholder="Your billing Gst"
        setFieldValue={setFieldValue}
        isRequired={true}
        isInvalid={!!touched.billingName && !!errors.billingName}
        bgColor="white"
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
        leftIcon={<Icon as={FontAwesome5} name="lock" mr="1" size="sm" />}
        isSubmitting={isSubmitting}
        onSubmit={handleSubmit}
      />
    </VStack>
  );
};

const EventRegistration = () => {
  const { params } = useRoute();
  const { goBack } = useNavigation();

  const [eventInformation, setEventInformation] = useState<
    GetCpeEventByIdQuery["getCpeEventById"] | null | undefined
  >();

  const { data: countryList } = useGetAllCountryQuery();
  const { data: stateList } = useGetAllStateQuery();
  const { data: cityList } = useGetAllCityQuery();
  const { data: eventRenge, refetch } = useGetCpeEventRangeByCpeIdQuery({
    // @ts-ignore
    variables: { options: { id: params?.eventId || "" } },
  });

  const { show } = useToast();

  const [getEventInformation] = useGetCpeEventByIdLazyQuery();

  const [generatePayment] = useGenEventPaymnetMutation();

  const { navigate } = useNavigation();

  const { refetch: refetchCpeEventCount } = useGetCountByCpeEventQuery({
    // @ts-ignore
    variables: { options: { id: params?.eventId || "" } },
  });

  useEffect(() => {
    const { eventId } = params as { eventId?: string };

    if (eventId) {
      (async () => {
        const response = await getEventInformation({
          variables: { options: { id: eventId } },
        });

        await refetch();

        if (response.data?.getCpeEventById) {
          setEventInformation(response.data.getCpeEventById);
        }
      })();
    }
  }, [params]);

  const handleSubmit = async (
    val: IFormikInputType,
    action: FormikHelpers<IFormikInputType>
  ) => {
    action.setSubmitting(true);

    const getCount = await refetchCpeEventCount();
    if (
      _.toNumber(eventInformation?.capacity || 0) >
      _.toNumber(getCount.data.getCountByCpeEvent.occupied) + _.toNumber(1)
    ) {
      const resposne = await generatePayment({
        variables: {
          options: {
            billingEmail: val.billingEmail,
            billingGst: val.billingGst,
            billingName: val.billingName,
            // @ts-ignore
            eventId: params?.eventId || "",
            eventRegistration: [
              {
                addresss: val.address,
                city: val.city,
                contactNo: val.contactNo,
                country: val.country,
                email: val.email,
                gstNo: val.gstNo,
                membershipNumber: val.membershipNumber,
                name: val.name,
                organization: val.organization,
                postCode: val.pincode,
                rangeID: val.userType,
                state: val.state,
                type: "member",
              },
            ],
            studyGroupId: "",
          },
        },
      });

      if (resposne.data?.genEventPaymnet) {
        await AllInOneSDKManager.startTransaction(
          resposne.data.genEventPaymnet.data?.ORDER_ID || "",
          resposne.data.genEventPaymnet.data?.MID || "",
          resposne.data.genEventPaymnet.data?.TOKEN || "",
          resposne.data.genEventPaymnet.data?.TXN_AMOUNT || "",
          resposne.data.genEventPaymnet.data?.CALLBACK_URL || "",
          true,
          false,
          ""
        )
          .then((result) => {
            console.log(result);
            //@ts-ignore
            navigate("TransactionDetails");
            show({
              title: _.capitalize("your payment done successfully"),
              placement: "top",
            });
          })
          .catch((err) => {
            //@ts-ignore
            navigate("TransactionDetails");
            show({
              title: _.capitalize("trouble processing your payment "),
              placement: "top",
            });
          });
      }
    } else {
      show({
        title: _.capitalize("you are out of registration capacity."),
        placement: "top",
      });
    }

    action.setSubmitting(false);
  };

  if (
    !cityList?.getAllCity ||
    !stateList?.getAllState ||
    !cityList.getAllCity ||
    !eventRenge?.getCpeEventRangeByCpeId ||
    !countryList?.getAllCountry
  ) {
    return <></>;
  }

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
          {({
            values,
            errors,
            touched,
            setFieldValue,
            isSubmitting,
            handleSubmit,
          }) => {
            return (
              <RenderForm
                city={cityList.getAllCity}
                state={stateList.getAllState}
                country={countryList.getAllCountry}
                cpeEvent={eventRenge.getCpeEventRangeByCpeId}
                errors={errors}
                handleSubmit={handleSubmit}
                isSubmitting={isSubmitting}
                setFieldValue={setFieldValue}
                touched={touched}
                values={values}
              />
            );
          }}
        </Formik>
      </ScrollView>
    </View>
  );
};

export default EventRegistration;
