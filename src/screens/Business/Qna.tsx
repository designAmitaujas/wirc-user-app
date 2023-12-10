import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Formik, FormikHelpers } from "formik";
import {
  Box,
  Button,
  HStack,
  Icon,
  ScrollView,
  Spinner,
  Text,
  Toast,
  VStack,
} from "native-base";
import * as Yup from "yup";
import { CustomInput, CustomTextArea } from "../../components/CustomForm";
import { QnaMailInput, useSpeakerMailMutation } from "../../gql/graphql";

const initialvalues: QnaMailInput = {
  email: "",
  eventid: "",
  eventname: "",
  name: "",
  query: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().required(),
  eventid: Yup.string(),
  eventname: Yup.string().required(),
  name: Yup.string().required(),
  query: Yup.string().required(),
});

const RestHeader = () => {
  const { goBack } = useNavigation();

  return (
    <>
      <HStack
        backgroundColor="#0f045d"
        borderBottomRadius={40}
        // justifyContent={"space-between"}
        py="3"
        // h={16}
        px={4}
        alignItems="center"
        alignSelf={"center"}
        w={"100%"}
      >
        <Button
          bg="transparent"
          colorScheme={"white"}
          // w="14%"
          onPress={goBack}
          leftIcon={
            <Icon
              size="md"
              as={<FontAwesome5 name="arrow-left" />}
              color="white"
            />
          }
        />
        <Text
          color="white"
          ml={8}
          fontSize="24"
          fontWeight="bold"
          mb={1}
          // w={"40%"}
        >
          Question And Answer
        </Text>
      </HStack>
    </>
  );
};
const Qna = () => {
  const { params } = useRoute();

  const { id } = params as { id: string };
  console.log("ee", id);
  const [mail] = useSpeakerMailMutation();

  const handleSubmit = async (
    val: QnaMailInput,
    actions: FormikHelpers<QnaMailInput>
  ) => {
    actions.setSubmitting(true);

    console.log(val.email, id, val.eventname, val.name, val.query);

    const response = await mail({
      variables: {
        options: {
          email: val.email,
          eventid: id,
          eventname: val.eventname,
          name: val.name,
          query: val.query,
        },
      },
    });
    console.log(response);
    if (response.data?.speakerMail.success === true) {
      Toast.show({
        render: () => {
          return (
            <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
              Mail send Successfully
            </Box>
          );
        },
        placement: "top",
      });
    } else {
      Toast.show({
        render: () => {
          return (
            <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
              {response.data?.speakerMail.msg ||
                "Something went wrong on server"}
            </Box>
          );
        },
        placement: "top",
      });
    }
    actions.resetForm();
    actions.setSubmitting(false);
  };
  return (
    <>
      <RestHeader />
      <ScrollView bg={"white"} showsVerticalScrollIndicator={false} h={"full"}>
        <VStack>
          <Text w="90%" textAlign={"justify"} ml="4" fontWeight="bold" mt="4">
            "Join the conversation at our events with our user-friendly Q&A
            feature. Ask questions, connect with speakers, and make your voice
            heard in a dynamic and engaging way. Your participation enriches the
            overall event experience."
          </Text>
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
                  <VStack space={1} mt={5} mb={3} alignSelf={"center"}>
                    <CustomInput
                      w={"72"}
                      borderColor={"#0f045d"}
                      bgColor={"white"}
                      currentValue={values.name}
                      errMsg={errors.name || ""}
                      isInvalid={!!touched.name && !!errors.name}
                      label="Name"
                      name="name"
                      placeholder="Enter your Name "
                      setFieldValue={setFieldValue}
                      isRequired={true}
                      value={values.name}
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
                      currentValue={values.eventname}
                      errMsg={errors.eventname || ""}
                      isInvalid={!!touched.eventname && !!errors.eventname}
                      label="Speaker name"
                      name="eventname"
                      placeholder="Enter the speaker name"
                      setFieldValue={setFieldValue}
                      isRequired={true}
                      value={values.eventname}
                    />
                    <CustomTextArea
                      w={"72"}
                      borderColor={"#0f045d"}
                      bgColor={"white"}
                      currentValue={values.query}
                      errMsg={errors.query || ""}
                      isInvalid={!!touched.query && !!errors.query}
                      label="Query"
                      name="query"
                      placeholder="Enter your Query"
                      setFieldValue={setFieldValue}
                      isRequired={true}
                      value={values.query}
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
                      isDisabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <Spinner color="white" size="sm" />
                      ) : (
                        <Text
                          color={"white"}
                          fontSize={"sm"}
                          fontWeight={"medium"}
                        >
                          Submit
                        </Text>
                      )}
                    </Button>
                  </VStack>
                </>
              );
            }}
          </Formik>
        </VStack>
      </ScrollView>
    </>
  );
};

export default Qna;
