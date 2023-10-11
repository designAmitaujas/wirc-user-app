import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { Box, Button, HStack, Stack, Text, VStack, View } from "native-base";
import { FC } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useGetPaymentReciptByIdQuery } from "../../gql/graphql";
import { useAppAuthState } from "../../store";

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
        Payment Status
      </Text>
      <TouchableOpacity onPress={logout}>
        <Feather name="power" size={24} color="white" />
      </TouchableOpacity>
    </HStack>
  );
};

const Success: FC<{ id: string }> = ({ id }) => {
  const { goBack } = useNavigation();

  // EventTransactionHistory
  const { data } = useGetPaymentReciptByIdQuery({
    variables: { options: { id } },
  });

  if (!data?.getPaymentReciptById) {
    return <></>;
  }

  const handlegoback = () => {
    goBack();
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
              <Text>Success</Text>
            </>
          ) : (
            <>
              <LottieView
                style={{ width: 64 }}
                autoPlay
                source={require("../../../assets/Animation - 1696583921849.json")}
              />
              <Text>Failure</Text>
            </>
          )}
          <Box width={"100%"} justifyContent={"center"} alignItems={"center"}>
            {data.getPaymentReciptById.isPaymnetPaid === true ? (
              <Text color={"#41ad49"} fontSize={"3xl"} bold>
                Payment Successful
              </Text>
            ) : (
              <Text color={"#f01a24"} fontSize={"3xl"} bold>
                Payment Unsuccessful
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
                <Text width="40%" textAlign="justify" fontWeight="semibold">
                  Event Name
                </Text>
                <Text width="55%" textAlign="justify">
                  {data.getPaymentReciptById.cpeEvnet?.name}
                </Text>
              </HStack>

              <HStack>
                <Text width="40%" textAlign="justify" fontWeight="semibold">
                  Amount
                </Text>
                <Text width="55%" textAlign="justify">
                  ₹ 50000
                </Text>
              </HStack>
              <HStack>
                <Text textAlign="justify" width="40%" fontWeight="semibold">
                  Transcation Id
                </Text>
                <Text width="55%" textAlign="justify">
                  {data.getPaymentReciptById.CUST_ID}
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
