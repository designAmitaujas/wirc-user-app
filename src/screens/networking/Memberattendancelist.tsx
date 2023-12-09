import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Modal,
  ScrollView,
  Spinner,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useState } from "react";

import { Linking } from "react-native";
import { useGetMemberAttendanceListQuery } from "../../gql/graphql";

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
          fontSize="20"
          fontWeight="bold"
          mb={1}
          // w={"40%"}
        >
          Attendance Hall
        </Text>
      </HStack>
    </>
  );
};

const ParticipantsCard: React.FC<{
  name: string;
  position?: string;
  gender?: string;
  email?: string;
  mo_number?: string;
  skills?: string[];
  keey: string;
}> = ({ name, position, gender, email, mo_number, skills, keey }) => {
  // console.log();mo_number

  const [showModal, setShowModal] = useState(false);
  const phonecall = () => {
    // console.log("first", mo_number);
    Linking.openURL(`tel:${mo_number?.toString()}`);
  };

  return (
    <>
      {gender?.toLocaleLowerCase() === "male" ? (
        <VStack
          shadow={5}
          style={{ shadowColor: "blue" }}
          bg={"white"}
          borderRadius={15}
          w={"45%"}
          p={1}
          key={keey}
        >
          <Image
            w={"10"}
            h={"10"}
            alignSelf={"center"}
            resizeMode="contain"
            alt="Image not found"
            source={require("../../../assets/male.png")}
          />
          <Text fontWeight={"semibold"} alignSelf={"center"}>
            {name}
          </Text>

          <Divider marginY={2} />
          {/* <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity onPress={phonecall}>
              <Ionicons name="call-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons
                name="ios-person-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </HStack> */}
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            _backdrop={{
              _dark: {
                bg: "coolGray.800",
              },
              bg: "warmGray.900",
            }}
          >
            <Modal.Content w={"90%"} borderRadius={15}>
              <Modal.CloseButton />
              <Modal.Header>Profile</Modal.Header>
              <Modal.Body>
                <VStack space={2}>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Name
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{name}</Text>
                  </HStack>
                  {/* <HStack w={"100%"}>
                  <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                    Position
                  </Text>
                  <Text w={"10%"}>:</Text>
                  <Text w={"65%"}>{position}</Text>
                </HStack> */}
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Email
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{email}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Mobile No.
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{mo_number}</Text>
                  </HStack>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </VStack>
      ) : gender?.toLocaleLowerCase() === "female" ? (
        <VStack
          shadow={5}
          style={{ shadowColor: "red" }}
          bg={"white"}
          borderRadius={15}
          w={"45%"}
          p={1}
          key={keey}
        >
          <Image
            w={"10"}
            h={"10"}
            alignSelf={"center"}
            resizeMode="contain"
            alt="Image not found"
            source={require("../../../assets/female.png")}
          />
          <Text fontWeight={"semibold"} alignSelf={"center"}>
            {name}
          </Text>

          <Divider marginY={2} />
          {/* <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity onPress={phonecall}>
              <Ionicons name="call-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons
                name="ios-person-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </HStack> */}
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            _backdrop={{
              _dark: {
                bg: "coolGray.800",
              },
              bg: "warmGray.900",
            }}
          >
            <Modal.Content w={"90%"} borderRadius={15}>
              <Modal.CloseButton />
              <Modal.Header>Profile</Modal.Header>
              <Modal.Body>
                <VStack space={2}>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Name
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{name}</Text>
                  </HStack>

                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Email
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{email}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Mobile No.
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{mo_number}</Text>
                  </HStack>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </VStack>
      ) : (
        <VStack
          shadow={5}
          style={{ shadowColor: "black" }}
          bg={"white"}
          borderRadius={15}
          w={"45%"}
          p={1}
          key={keey}
        >
          <Image
            w={"10"}
            h={"10"}
            alignSelf={"center"}
            resizeMode="contain"
            alt="Image not found"
            source={require("../../../assets/other-person.png")}
          />
          <Text fontWeight={"semibold"} alignSelf={"center"}>
            {name}
          </Text>

          <Divider marginY={2} />
          {/* <HStack justifyContent={"space-around"} pb={1} alignItems={"center"}>
            <TouchableOpacity onPress={phonecall}>
              <Ionicons name="call-outline" size={20} color="black" />
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setShowModal(true)}>
              <Ionicons
                name="ios-person-circle-outline"
                size={24}
                color="black"
              />
            </TouchableOpacity>
          </HStack> */}
          <Modal
            isOpen={showModal}
            onClose={() => setShowModal(false)}
            _backdrop={{
              _dark: {
                bg: "coolGray.800",
              },
              bg: "warmGray.900",
            }}
          >
            <Modal.Content w={"90%"} borderRadius={15}>
              <Modal.CloseButton />
              <Modal.Header>Profile</Modal.Header>
              <Modal.Body>
                <VStack space={2}>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Name
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{name}</Text>
                  </HStack>

                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Email
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{email}</Text>
                  </HStack>
                  <HStack w={"100%"}>
                    <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                      Mobile No.
                    </Text>
                    <Text w={"10%"}>:</Text>
                    <Text w={"65%"}>{mo_number}</Text>
                  </HStack>
                </VStack>
              </Modal.Body>
            </Modal.Content>
          </Modal>
        </VStack>
      )}
    </>
  );
};

const Memberattendancelist = () => {
  const { params } = useRoute();
  const { data: participants, loading } = useGetMemberAttendanceListQuery({
    //@ts-ignore
    variables: { eventId: params?.eventId || "" },
  });
  return (
    <View>
      <RestHeader />

      <ScrollView showsVerticalScrollIndicator={false}>
        <VStack space={3} mb={4} mt={2}>
          {loading ? (
            <>
              <HStack
                flex={1}
                alignSelf={"center"}
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
          ) : (
            <VStack space={3}>
              <HStack
                justifyContent={"space-between"}
                w={"100%"}
                alignSelf={"center"}
                pl={5}
                pr={5}
                pb={2}
              >
                {participants?.getMemberAttendanceList?.map((item) => {
                  console.log(item);
                  return (
                    <>
                      <ParticipantsCard
                        keey={item._id}
                        name={
                          item.firstName +
                          " " +
                          item.middleName +
                          " " +
                          item.lastName
                        }
                        email={item.email}
                        gender={item.gender?.name || " "}
                        mo_number={item.phone}
                        position={item.membershipNo}
                      />
                    </>
                  );
                })}
              </HStack>
            </VStack>
          )}
        </VStack>
      </ScrollView>
    </View>
  );
};

export default Memberattendancelist;
