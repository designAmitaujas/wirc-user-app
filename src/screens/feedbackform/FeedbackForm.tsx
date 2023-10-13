import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Button,
  Checkbox,
  Divider,
  HStack,
  Icon,
  Radio,
  ScrollView,
  Text,
  TextArea,
  VStack,
  View,
} from "native-base";
import React from "react";

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

const FeedbackForm = () => {
  const { navigate } = useNavigation();
  const home = () => {
    //@ts-ignore
    navigate("Home");
  };
  const [value1, setValue1] = React.useState("");
  const [value2, setValue2] = React.useState("");
  const [value3, setValue3] = React.useState("");
  const [value4, setValue4] = React.useState("");
  return (
    <>
      <View bg={"white"} flex={1}>
        <RestHeader />
        <ScrollView showsVerticalScrollIndicator={false} mt={2} mb={2}>
          <VStack
            // borderWidth={1}
            m={4}
            // borderColor={"gray.400"}
            // borderRadius={"10"}
          >
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
                <Text w={"66%"} fontSize={"xs"}>
                  Workshop on GST Representation & Preparation Management
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
                  7 & 8 July 2023. 10.00 am to 06.00 pm.
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
                  12 hrs.
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
              <HStack w={"100%"} pl={2}>
                <Text w={"85%"}>a) &nbsp;Less than 5 years</Text>
                <Checkbox
                  size={"sm"}
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                />
              </HStack>
              <HStack w={"100%"} pl={2}>
                <Text w={"85%"}>
                  b) &nbsp;More than 5 but less than 10 years
                </Text>
                <Checkbox
                  size={"sm"}
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                />
              </HStack>
              <HStack w={"100%"} pl={2}>
                <Text w={"85%"}>c) &nbsp;More than 10 years</Text>
                <Checkbox
                  size={"sm"}
                  value="test"
                  accessibilityLabel="This is a dummy checkbox"
                />
              </HStack>
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
                  value={value1}
                  onChange={(nextValue) => {
                    setValue1(nextValue);
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
                  value={value2}
                  onChange={(nextValue) => {
                    setValue2(nextValue);
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
                  value={value3}
                  onChange={(nextValue) => {
                    setValue3(nextValue);
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
                  value={value4}
                  onChange={(nextValue) => {
                    setValue4(nextValue);
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
                <Text fontWeight={"semibold"}>
                  &nbsp;&nbsp;&nbsp;&nbsp;(7 - 8 July 2023)
                </Text>
              </Text>

              <VStack space={2}>
                <Text textAlign={"justify"} w={"95%"} pl={2}>
                  1) &nbsp;How to deal the Search cases? During the search
                  proceeding Post Search- Summon to Order; Order to Appeal
                  Procedural Part: Flaws and Wins General Mistakes of
                  Consultants (Start to End) Opportunities for CAs (Beyond
                  Drafting and Representation in Search Cases)
                </Text>
                <HStack w={"100%"} pl={2}>
                  <Text color={"gray.500"} w={"20%"}>
                    Faculty
                  </Text>
                  <Text w={"5%"}>:</Text>
                  <Text w={"75%"} fontWeight={"semibold"}>
                    Adv. CA. Vivek Laddha
                  </Text>
                </HStack>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value1}
                  onChange={(nextValue) => {
                    setValue1(nextValue);
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
              <Divider w={"72"} alignSelf="center" />
              <VStack space={2}>
                <Text textAlign={"justify"} w={"95%"} pl={2}>
                  2) &nbsp;Adjudication: SCN: Check List Procedural Part: Flaws
                  and Wins (Notice, Intimation and SCN) Drafting the Replies:
                  Major points of caution (Along with 2 Sample) General Mistakes
                  of Consultants (Start to End) Check with third eyes: Other
                  Opportunities for Cas for future coming out of the
                  adjudication (Beyond Drafting and Representation in
                  adjudication Cases)
                </Text>
                <HStack w={"100%"} pl={2}>
                  <Text color={"gray.500"} w={"20%"}>
                    Faculty
                  </Text>
                  <Text w={"5%"}>:</Text>
                  <Text w={"75%"} fontWeight={"semibold"}>
                    CA. Keval Shah
                  </Text>
                </HStack>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value2}
                  onChange={(nextValue) => {
                    setValue2(nextValue);
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
              <Divider w={"72"} alignSelf="center" />
              <VStack space={2}>
                <Text textAlign={"justify"} w={"95%"} pl={2}>
                  3) &nbsp;How to keep track of Case Laws Precautions while
                  referring the case laws
                </Text>
                <HStack w={"100%"} pl={2}>
                  <Text color={"gray.500"} w={"20%"}>
                    Faculty
                  </Text>
                  <Text w={"5%"}>:</Text>
                  <Text w={"75%"} fontWeight={"semibold"}>
                    Dr. CA. Arpit Haldia
                  </Text>
                </HStack>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value3}
                  onChange={(nextValue) => {
                    setValue3(nextValue);
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
              <Divider w={"72"} alignSelf="center" />
              <VStack space={2}>
                <Text textAlign={"justify"} w={"95%"} pl={2}>
                  4) &nbsp;Most emerging areas in Litigation and preparation
                  thereof
                </Text>
                <HStack w={"100%"} pl={2}>
                  <Text color={"gray.500"} w={"20%"}>
                    Faculty
                  </Text>
                  <Text w={"5%"}>:</Text>
                  <Text w={"75%"} fontWeight={"semibold"}>
                    CA. Vasant Bhat
                  </Text>
                </HStack>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value4}
                  onChange={(nextValue) => {
                    setValue4(nextValue);
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
              <Divider w={"72"} alignSelf="center" />
              <VStack space={2}>
                <Text textAlign={"justify"} w={"95%"} pl={2}>
                  5) &nbsp;Appeal: First Appellate Authority and Tribunal Draft
                  the appeal Procedural Part: Flaws and Wins (Order)
                  Representation: A game changer (Along with 2 Sample Case
                  Studies) General Mistakes of Consultants (Start to End)
                  Opportunities for CAs (Beyond Drafting and Representation in
                  Search Cases)
                </Text>
                <HStack w={"100%"} pl={2}>
                  <Text color={"gray.500"} w={"20%"}>
                    Faculty
                  </Text>
                  <Text w={"5%"}>:</Text>
                  <Text w={"75%"} fontWeight={"semibold"}>
                    CA. Rajiv Luthia
                  </Text>
                </HStack>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value4}
                  onChange={(nextValue) => {
                    setValue4(nextValue);
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
              <Divider w={"72"} alignSelf="center" />
              <VStack space={2}>
                <Text textAlign={"justify"} w={"95%"} pl={2}>
                  6) &nbsp;Fast reading techniques of Case Laws
                </Text>
                <HStack w={"100%"} pl={2}>
                  <Text color={"gray.500"} w={"20%"}>
                    Faculty
                  </Text>
                  <Text w={"5%"}>:</Text>
                  <Text w={"75%"} fontWeight={"semibold"}>
                    CA. Nihalchand Jain
                  </Text>
                </HStack>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value4}
                  onChange={(nextValue) => {
                    setValue4(nextValue);
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
              <Divider w={"72"} alignSelf="center" />
              <VStack space={2}>
                <Text textAlign={"justify"} w={"95%"} pl={2}>
                  7) &nbsp;Grow with Networking in Litigation practice
                </Text>
                <HStack w={"100%"} pl={2}>
                  <Text color={"gray.500"} w={"20%"}>
                    Faculty
                  </Text>
                  <Text w={"5%"}>:</Text>
                  <Text w={"75%"} fontWeight={"semibold"}>
                    CA. Jignesh Kansara
                  </Text>
                </HStack>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value4}
                  onChange={(nextValue) => {
                    setValue4(nextValue);
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
              <Divider w={"72"} alignSelf="center" />
              <VStack space={2}>
                <Text textAlign={"justify"} w={"95%"} pl={2}>
                  8) &nbsp;A small competition among the attendees
                </Text>
                <HStack w={"100%"} pl={2}>
                  <Text color={"gray.500"} w={"20%"}>
                    Faculty
                  </Text>
                  <Text w={"5%"}>:</Text>
                  <Text w={"75%"} fontWeight={"semibold"}>
                    CA. Nitin Bhuta
                  </Text>
                </HStack>
                <Radio.Group
                  name="myRadioGroup"
                  accessibilityLabel="favorite number"
                  value={value4}
                  onChange={(nextValue) => {
                    setValue4(nextValue);
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
          </VStack>
          <Button
            mt="5"
            mb="5"
            borderRadius={15}
            size={"sm"}
            w={"32"}
            alignSelf={"center"}
            bgColor={"#0f045d"}
            onPress={home}
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
