import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import _ from "lodash";
import moment from "moment";
import {
  Button,
  Divider,
  HStack,
  Icon,
  Radio,
  ScrollView,
  Text,
  TextArea,
  VStack,
  View,
  useToast,
} from "native-base";
import { FC, useEffect, useState } from "react";
import * as Yup from "yup";
import {
  EventTopic,
  useAddFeedBackFromMutation,
  useGetAllEventTopicQuery,
  useGetCpeEventByIdLazyQuery,
} from "../../gql/graphql";

const RestHeader = () => {
  const { goBack } = useNavigation();

  return (
    <HStack
      backgroundColor="#0f045d"
      borderBottomRadius={40}
      py="3"
      px={4}
      alignItems="center"
      alignSelf={"center"}
      w={"100%"}
    >
      <Button
        bg="transparent"
        colorScheme={"white"}
        onPress={goBack}
        leftIcon={
          <Icon
            size="md"
            as={<FontAwesome5 name="arrow-left" />}
            color="white"
          />
        }
      />
      <Text color="white" ml={12} fontSize="22" fontWeight="bold">
        Feedback Form
      </Text>
    </HStack>
  );
};

const RenderFeedbackTopics: FC<{
  eventTopic: EventTopic;
  index: number;
  topicArr: {
    topic: string;
    selectedValue: string;
  }[];
  setTopicArr: React.Dispatch<
    React.SetStateAction<
      {
        topic: string;
        selectedValue: string;
      }[]
    >
  >;
}> = ({ eventTopic, index, setTopicArr, topicArr }) => {
  const handleFuncChange = (currentValue: string) => {
    const mergedArray: typeof topicArr = [
      ...topicArr,
      { topic: eventTopic._id, selectedValue: _.toString(currentValue) },
    ];

    const returnMergedArray = _.uniqBy(mergedArray, function (e) {
      return e.topic;
    });

    setTopicArr((item) =>
      _.uniqBy([...returnMergedArray, ...item], function (e) {
        return e.topic;
      })
    );
  };

  return (
    <>
      <VStack space={2}>
        <Text textAlign={"justify"} w={"95%"} pl={2}>
          {index + 1} {")"} {eventTopic.topic}
        </Text>
        <HStack w={"100%"} pl={2}>
          <Text color={"gray.500"} w={"20%"}>
            Faculty
          </Text>
          <Text w={"5%"}>:</Text>
          <Text w={"75%"} fontWeight={"semibold"}>
            {eventTopic.faculty}
          </Text>
        </HStack>
        <Radio.Group
          name="myRadioGroup"
          onChange={handleFuncChange}
          accessibilityLabel="favorite number"
        >
          <HStack space={2}>
            <Radio shadow={2} value="excellent" size="sm" my="2">
              Excellent
            </Radio>
            <Radio shadow={2} value="verygood" size="sm" my="2">
              Very Good
            </Radio>
            <Radio shadow={2} value="good" size="sm" my="2">
              Good
            </Radio>
            <Radio shadow={2} value="fair" size="sm" my="2">
              Fair
            </Radio>
          </HStack>
        </Radio.Group>
      </VStack>
      <Divider w={"72"} alignSelf="center" />
    </>
  );
};

const FeedbackForm = () => {
  const toast = useToast();
  const { navigate } = useNavigation();
  const { params } = useRoute();

  const { data } = useGetAllEventTopicQuery();

  const [getfeedback] = useAddFeedBackFromMutation();
  const [getData, { data: fetchedEvent }] = useGetCpeEventByIdLazyQuery();

  const [programDesign, setProgramDesign] = useState("");
  const [readingMaterial, setReadingMaterial] = useState("");
  const [academic, setAcademic] = useState("");
  const [arragmentOfPOU, setArragmentOfPOU] = useState("");
  const [experience, setExperience] = useState("");
  const [remarks, setRemarks] = useState("");

  const [topicArr, setTopicArr] = useState<
    Array<{ topic: string; selectedValue: string }>
  >([]);

  useEffect(() => {
    (async () => {
      const { eventId } = params as { eventId?: string };

      if (eventId) {
        await getData({ variables: { options: { id: eventId } } });
      }
    })();
  }, [params]);

  const handleSubmit = async () => {
    const validationSchema = Yup.object().shape({
      professionalExperience: Yup.string().required(),
      programDesign: Yup.string().required(),
      readingMaterial: Yup.string().required(),
      academicContent: Yup.string().required(),
      arrangementByPOU: Yup.string().required(),
      cpeEvent: Yup.string().required(),
      remarks: Yup.string().required(),
      feedbackForm: Yup.array()
        .of(
          Yup.object({
            topic: Yup.string().required(),
            answer: Yup.string().required(),
          })
        )
        .min(
          data?.getAllEventTopic && Array.isArray(data?.getAllEventTopic)
            ? data.getAllEventTopic.length
            : 0
        ),
    });

    const jsonObj = {
      academicContent: academic,
      arrangementByPOU: "Western India Regional Council",
      cpeEvent: fetchedEvent?.getCpeEventById._id || "",
      feedbackForm: [
        ...topicArr.map((item) => ({
          topic: item.topic,
          answer: item.selectedValue,
        })),
      ],
      professionalExperience: arragmentOfPOU,
      programDesign: programDesign,
      readingMaterial: readingMaterial,
      remarks: remarks,
    };

    await validationSchema
      .validate(jsonObj, {
        strict: true,
      })
      .then((res) => {
        (async () => {
          const response = await getfeedback({
            variables: {
              options: {
                academicContent: academic,
                arrangementByPOU: "Western India Regional Council",
                cpeEvent: fetchedEvent?.getCpeEventById._id || "",
                feedbackForm: [
                  ...topicArr.map((item) => ({
                    topic: item.topic,
                    answer: item.selectedValue,
                  })),
                ],
                professionalExperience: arragmentOfPOU,
                programDesign: programDesign,
                readingMaterial: readingMaterial,
                remarks: remarks,
              },
            },
          });

          if (response.data?.addFeedBackFrom.success === true) {
            toast.show({ title: response.data.addFeedBackFrom.msg });
            // @ts-ignore
            navigate("BottomTab");
          } else {
            toast.show({
              title: _.capitalize(response.data?.addFeedBackFrom.msg),
              placement: "top",
            });
          }
        })();
      })
      .catch((err: any) => {
        toast.show({
          placement: "top",
          title: _.capitalize("Please select all field"),
          backgroundColor: "red.500",
        });
      });
  };

  return (
    <>
      <View bg={"white"} flex={1}>
        <RestHeader />
        <ScrollView showsVerticalScrollIndicator={false} mt={2} mb={2}>
          <VStack m={4}>
            <Text
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={"md"}
              textDecorationLine="underline"
            >
              EVALUATION SHEET
            </Text>
            <VStack space={1} mt={2}>
              <Divider w={"72"} alignSelf="center" m={1} />
              <HStack w={"100%"} pl={2}>
                <Text
                  color={"gray.500"}
                  fontWeight={"semibold"}
                  w={"30%"}
                  fontSize={"xs"}
                >
                  Name of the POU
                </Text>
                <Text
                  w={"2%"}
                  fontSize={"xs"}
                  fontWeight={"bold"}
                  ml={2}
                  mr={2}
                >
                  :
                </Text>
                <Text w={"66%"} fontSize={"xs"}>
                  Western India Regional Council
                </Text>
              </HStack>
              <HStack w={"100%"} pl={2}>
                <Text
                  color={"gray.500"}
                  fontWeight={"semibold"}
                  w={"30%"}
                  fontSize={"xs"}
                >
                  Title of the Programme
                </Text>
                <Text
                  w={"2%"}
                  fontSize={"xs"}
                  fontWeight={"bold"}
                  ml={2}
                  mr={2}
                >
                  :
                </Text>
                <Text w={"66%"} fontSize={"xs"} textAlign="justify">
                  {fetchedEvent?.getCpeEventById.name}
                </Text>
              </HStack>
              <HStack w={"100%"} pl={2}>
                <Text
                  color={"gray.500"}
                  fontWeight={"semibold"}
                  w={"30%"}
                  fontSize={"xs"}
                >
                  Date and Timing
                </Text>
                <Text
                  w={"2%"}
                  fontSize={"xs"}
                  fontWeight={"bold"}
                  ml={2}
                  mr={2}
                >
                  :
                </Text>
                <Text w={"66%"} fontSize={"xs"}>
                  {moment(fetchedEvent?.getCpeEventById.date1).format(
                    "DD-MM-YYYY"
                  )}{" "}
                  To{" "}
                  {moment(fetchedEvent?.getCpeEventById.date2).format(
                    "DD-MM-YYYY"
                  )}
                </Text>
              </HStack>
              <HStack w={"100%"} pl={2}>
                <Text
                  color={"gray.500"}
                  fontWeight={"semibold"}
                  w={"30%"}
                  fontSize={"xs"}
                >
                  CPE Credit
                </Text>
                <Text
                  w={"2%"}
                  fontSize={"xs"}
                  fontWeight={"bold"}
                  ml={2}
                  mr={2}
                >
                  :
                </Text>
                <Text w={"66%"} fontSize={"xs"}>
                  {fetchedEvent?.getCpeEventById.cpehrs}
                </Text>
              </HStack>
              <Divider w={"72"} alignSelf="center" m={1} />
            </VStack>
            <VStack
              p={2}
              mt={5}
              space={3}
              borderWidth={1}
              borderColor={"gray.400"}
              borderRadius={"10"}
            >
              <Text>1. &nbsp;Your experience in the profession :</Text>
              <Radio.Group
                name="myRadioGroup"
                accessibilityLabel="favorite number"
                value={experience}
                onChange={(nextValue) => {
                  setExperience(nextValue);
                }}
              >
                <VStack space={2}>
                  <Radio shadow={2} value="excellent" size="sm" my="2">
                    a) &nbsp;Less than 5 years
                  </Radio>
                  <Radio shadow={2} value="verygood" size="sm" my="2">
                    b) &nbsp;More than 5 but less than 10 years
                  </Radio>
                  <Radio shadow={2} value="good" size="sm" my="2">
                    c) &nbsp;More than 10 years
                  </Radio>
                </VStack>
              </Radio.Group>
            </VStack>
            <VStack
              p={2}
              mt={5}
              space={3}
              borderWidth={1}
              borderColor={"gray.400"}
              borderRadius={"10"}
            >
              <Text>
                2. &nbsp;Please indicate your assessment of the following
                aspects of the programme :
              </Text>
              <VStack>
                <Text w={"95%"} pl={2}>
                  1) &nbsp;Programme Design
                </Text>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={programDesign}
                  onChange={(nextValue) => {
                    setProgramDesign(nextValue);
                  }}
                >
                  <HStack space={2}>
                    <Radio shadow={2} value="excellent" size="sm" my="2">
                      Excellent
                    </Radio>
                    <Radio shadow={2} value="verygood" size="sm" my="2">
                      Very Good
                    </Radio>
                    <Radio shadow={2} value="good" size="sm" my="2">
                      Good
                    </Radio>
                    <Radio shadow={2} value="fair" size="sm" my="2">
                      Fair
                    </Radio>
                  </HStack>
                </Radio.Group>
              </VStack>
              <VStack>
                <Text w={"95%"} pl={2}>
                  2) &nbsp;Reading Material
                </Text>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={readingMaterial}
                  onChange={(nextValue) => {
                    setReadingMaterial(nextValue);
                  }}
                >
                  <HStack space={2}>
                    <Radio shadow={2} value="excellent" size="sm" my="2">
                      Excellent
                    </Radio>
                    <Radio shadow={2} value="verygood" size="sm" my="2">
                      Very Good
                    </Radio>
                    <Radio shadow={2} value="good" size="sm" my="2">
                      Good
                    </Radio>
                    <Radio shadow={2} value="fair" size="sm" my="2">
                      Fair
                    </Radio>
                  </HStack>
                </Radio.Group>
              </VStack>
              <VStack>
                <Text w={"95%"} pl={2}>
                  3) &nbsp;Academic Content
                </Text>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={academic}
                  onChange={(nextValue) => {
                    setAcademic(nextValue);
                  }}
                >
                  <HStack space={2}>
                    <Radio shadow={2} value="excellent" size="sm" my="2">
                      Excellent
                    </Radio>
                    <Radio shadow={2} value="verygood" size="sm" my="2">
                      Very Good
                    </Radio>
                    <Radio shadow={2} value="good" size="sm" my="2">
                      Good
                    </Radio>
                    <Radio shadow={2} value="fair" size="sm" my="2">
                      Fair
                    </Radio>
                  </HStack>
                </Radio.Group>
              </VStack>
              <VStack>
                <Text w={"95%"} pl={2}>
                  4) &nbsp;Arrangements by POU
                </Text>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={arragmentOfPOU}
                  onChange={(nextValue) => {
                    setArragmentOfPOU(nextValue);
                  }}
                >
                  <HStack space={2}>
                    <Radio shadow={2} value="excellent" size="sm" my="2">
                      Excellent
                    </Radio>
                    <Radio shadow={2} value="verygood" size="sm" my="2">
                      Very Good
                    </Radio>
                    <Radio shadow={2} value="good" size="sm" my="2">
                      Good
                    </Radio>
                    <Radio shadow={2} value="fair" size="sm" my="2">
                      Fair
                    </Radio>
                  </HStack>
                </Radio.Group>
              </VStack>
            </VStack>
            <VStack
              p={2}
              mt={5}
              space={3}
              borderWidth={1}
              borderColor={"gray.400"}
              borderRadius={"10"}
            >
              <Text>3. &nbsp;General Remarks/Feedback/Suggestions :</Text>
              <TextArea
                placeholder="Write Here..."
                autoCompleteType={false}
                w={"95%"}
                bgColor={"white"}
                alignSelf={"center"}
                value={remarks}
                onChangeText={(e) => setRemarks(e)}
              />
            </VStack>
            <VStack
              p={2}
              mt={5}
              space={3}
              borderWidth={1}
              borderColor={"gray.400"}
              borderRadius={"10"}
            >
              <Text>
                5. &nbsp;Kindly indicate how effective the following topics to
                you were : {"\n"}
              </Text>
              {data?.getAllEventTopic
                .filter((item) => item.isActive === true)
                .map((item, index) => {
                  return (
                    <RenderFeedbackTopics
                      eventTopic={item}
                      key={item._id}
                      index={index}
                      topicArr={topicArr}
                      setTopicArr={setTopicArr}
                    />
                  );
                })}
            </VStack>
          </VStack>
          <Button
            mt="5"
            mb="5"
            borderRadius={15}
            size={"sm"}
            w={"32"}
            alignSelf={"center"}
            bgColor={"#0f045d"}
            onPress={handleSubmit}
          >
            <Text color={"white"} fontSize={"sm"} fontWeight={"medium"}>
              Submit
            </Text>
          </Button>
        </ScrollView>
      </View>
    </>
  );
};

export default FeedbackForm;
