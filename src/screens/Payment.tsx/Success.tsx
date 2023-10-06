import { useNavigation } from "@react-navigation/native";
import { Button, HStack, Image, Text, VStack, View } from "native-base";

const Success = () => {
  const { goBack } = useNavigation();

  const handlegoback = () => {
    goBack();
  };
  return (
    <View flex={1} bg="white" alignItems="center">
      <Image
        source={require("../../../assets/success.png")}
        alt="Alternate Text"
        size="xl"
      />

      <VStack marginTop="20%">
        <HStack>
          <Text width="50%" textAlign="center">
            Event Name
          </Text>
          <Text width="50%" textAlign="center">
            WIRC
          </Text>
        </HStack>
        <HStack>
          <Text width="50%" textAlign="center">
            Transactionn Date
          </Text>
          <Text width="50%" textAlign="center">
            12/08/2023
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
            #bhavya
          </Text>
        </HStack>

        <Button alignSelf="center" onPress={handlegoback}>
          Go Back
        </Button>
      </VStack>
    </View>
  );
};

export default Success;
