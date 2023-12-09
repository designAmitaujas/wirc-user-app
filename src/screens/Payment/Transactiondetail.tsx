import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import {
  Box,
  Button,
  HStack,
  Icon,
  Spinner,
  Stack,
  Text,
  VStack,
  View,
} from "native-base";
import { FC } from "react";
import { useGetPaymentReciptByIdQuery } from "../../gql/graphql";

// const RestHeader = () => {
//   // const { goBack } = useNavigation();
//   const { removeAuth } = useAppAuthState();

//   const { navigate } = useNavigation();

//   const visitingcard = () => {
//     // @ts-ignore
//     navigate("VisitingCard");
//   };

//   const logout = async () => {
//     removeAuth();
//     await new Promise((r) => setTimeout(r, 2000));
//     // @ts-ignore
//     navigate("Login");
//   };

//   return (
//     <HStack
//       backgroundColor="#0f045d"
//       borderBottomRadius={40}
//       justifyContent={"space-between"}
//       // py="3.5"
//       h={16}
//       px={7}
//       alignItems="center"
//       alignSelf={"center"}
//       w={"100%"}
//     >
//       {/* <TouchableOpacity onPress={visitingcard}>
//         <FontAwesome name="id-card" size={24} color="white" />
//       </TouchableOpacity> */}
//       <Text
//         color="white"
//         // ml={16}
//         fontSize="22"
//         fontWeight="bold"
//         textAlign="center"
//         // mb={1}
//         // w={"40%"}
//       >
//         Payment Status
//       </Text>
//       <TouchableOpacity onPress={logout}>
//         <Feather name="power" size={24} color="white" />
//       </TouchableOpacity>
//     </HStack>
//   );
// };
const RestHeader = () => {
  // const { goBack } = useNavigation();
  const { goBack } = useNavigation();
  const { navigate } = useNavigation();

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
          Payment Status
        </Text>
      </HStack>
    </>
  );
};

const Success: FC<{ id: string }> = ({ id }) => {
  const { goBack, navigate } = useNavigation();

  // EventTransactionHistory
  const { data } = useGetPaymentReciptByIdQuery({
    variables: { options: { id } },
  });

  if (!data?.getPaymentReciptById) {
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

  const handlegoback = () => {
    //@ts-ignore
    navigate("EventHome");
  };

  return (
    <>
      <RestHeader />
      <View flex={1} bg="white">
        <VStack
          flex={1}
          // justifyContent={"center"}
          alignItems={"center"}
          space={5}
          mt={5}
        >
          {data.getPaymentReciptById.isPaymnetPaid === true ? (
            <>
              <LottieView
                style={{ width: 64 }}
                autoPlay
                source={require("../../../assets/Animation - 1696582972947.json")}
              />
            </>
          ) : (
            <>
              <LottieView
                style={{ width: 64 }}
                autoPlay
                source={require("../../../assets/Animation - 1696583921849.json")}
              />
            </>
          )}
          <Box width={"100%"} justifyContent={"center"} alignItems={"center"}>
            {data.getPaymentReciptById.isPaymnetPaid === true ? (
              <Text color={"#41ad49"} fontSize={"3xl"} bold>
                Payment Successful
              </Text>
            ) : (
              <Text color={"#f01a24"} fontSize={"3xl"} bold>
                Payment Failure
              </Text>
            )}
          </Box>
          <Box
            borderRadius={"3xl"}
            backgroundColor={"white"}
            // width={"90%"}
            // justifyContent={"center"}
            // alignItems={"center"}
            // borderWidth="1"
            // borderColor="gray.200"
          >
            <Stack
              width={"100%"}
              space={5}
              my={10}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <HStack>
                <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                  Event Name
                </Text>
                <Text w={"2%"} fontWeight={"bold"}>
                  :
                </Text>
                <Text w={"62%"} fontWeight={"bold"}>
                  {data.getPaymentReciptById.cpeEvnet?.name}
                </Text>
              </HStack>

              <HStack>
                <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                  Amount
                </Text>
                <Text w={"2%"} fontWeight={"bold"}>
                  :
                </Text>
                <Text w={"65%"} fontWeight={"bold"}>
                  ₹ {data.getPaymentReciptById.TXN_AMOUNT}
                </Text>
              </HStack>
              <HStack>
                <Text color={"gray.500"} fontWeight={"semibold"} w={"30%"}>
                  Transcation Id
                </Text>
                <Text w={"2%"} fontWeight={"bold"}>
                  :
                </Text>
                <Text w={"65%"} fontWeight={"bold"}>
                  {data.getPaymentReciptById.customId}
                </Text>
              </HStack>

              <Button
                alignSelf="center"
                onPress={handlegoback}
                backgroundColor="#0f045d"
                mt={10}
              >
                Go Back
              </Button>
            </Stack>
          </Box>
        </VStack>
      </View>
    </>
  );
};

const Transactiondetail = () => {
  const { params } = useRoute();

  // @ts-ignore
  if (params?.id) {
    // @ts-ignore
    return <Success id={params.id} />;
  }

  return <></>;
};

export default Transactiondetail;
