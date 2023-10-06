import { Feather, FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import LottieView from "lottie-react-native";
import { Box, Button, HStack, Text, VStack, View } from "native-base";
import { FC } from "react";
import { TouchableOpacity } from "react-native-gesture-handler";
import { useParams } from "react-router-dom";
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
      {/* <Button
        bg="transparent"
        colorScheme={"#0f045d"}
        w="14%"
        ml={2}
        leftIcon={
          <Icon
            size="md"
            as={<FontAwesome5 name="arrow-left" />}
            color="white"
          />
        }
      /> */}
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
        Profile
      </Text>
      <TouchableOpacity onPress={logout}>
        <Feather name="power" size={24} color="white" />
      </TouchableOpacity>
    </HStack>
  );
};

const Success: FC<{ id: string }> = ({ id }) => {
  const { goBack } = useNavigation();

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
        <Box h={"32"} alignSelf={"center"} mt={"10"}>
          {data.getPaymentReciptById.isPaymnetPaid === true ? (
            <>
              <LottieView
                style={{ width: "64" }}
                autoPlay
                source={require("../../../assets/Animation - 1696582972947.json")}
              />
              <Text>Success</Text>
            </>
          ) : (
            <>
              <LottieView
                style={{ width: "64" }}
                autoPlay
                source={require("../../../assets/Animation - 1696583921849.json")}
              />
              <Text>Failure</Text>
            </>
          )}
        </Box>
        <VStack marginTop="20%">
          <HStack>
            <Text width="50%" textAlign="center">
              Event Name
            </Text>
            <Text width="50%" textAlign="center">
              {data.getPaymentReciptById.cpeEvnet?.name}
            </Text>
          </HStack>

          <HStack>
            <Text width="50%" textAlign="center">
              Amount
            </Text>
            <Text width="50%" textAlign="center">
              ₹ 50000
            </Text>
          </HStack>
          <HStack>
            <Text textAlign="center" width="50%">
              Transcation Id
            </Text>
            <Text width="50%" textAlign="center">
              {data.getPaymentReciptById.CUST_ID}
            </Text>
          </HStack>

          <Button alignSelf="center" onPress={handlegoback}>
            Go Back
          </Button>
        </VStack>
      </View>
    </>
  );
};

const Transactiondetail = () => {
  const { id } = useParams() as { id?: string };

  if (!id) return <></>;

  return (
    <>
      <Success id={id} />
    </>
  );
};

export default Transactiondetail;
