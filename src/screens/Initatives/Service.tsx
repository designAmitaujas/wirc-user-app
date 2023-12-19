import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Button,
  Divider,
  HStack,
  Icon,
  Image,
  Pressable,
  ScrollView,
  Text,
  VStack,
} from "native-base";
import { Linking } from "react-native";

const logo = require("../../../assets/article.png");
const logo1 = require("../../../assets/prerna.png");
const logo2 = require("../../../assets/mentor.png");
const logo3 = require("../../../assets/network.png");

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
          WIRC Services
        </Text>
      </HStack>
    </>
  );
};

const Service = () => {
  return (
    <>
      <RestHeader />
      <ScrollView flex={1}>
        <VStack mt={3} p={2}>
          <Pressable
            onPress={() =>
              Linking.openURL(
                "https://wirc-icai.org/initiative/articles-placement"
              )
            }
          >
            <Box
              p={2}
              mx="2"
              borderColor={"#00388D"}
              borderWidth="1"
              borderRadius="lg"
            >
              <Image w="100%" h="56" source={logo} alt="img1" />
            </Box>
            <Text
              flex="1"
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={"lg"}
              mt="2"
              mb={3}
            >
              Article Placement
            </Text>
          </Pressable>
          <Divider thickness="1" mb="2" mt="2" bg="gray.800" />
          <Pressable
            onPress={() =>
              Linking.openURL("https://wirc-icai.org/initiative/network")
            }
          >
            <Box
              mt={3}
              p={2}
              mx="2"
              borderColor={"#00388D"}
              borderWidth="1"
              borderRadius="lg"
            >
              <Image w="100%" h="56" source={logo3} alt="img1" />
            </Box>
            <Text
              flex="1"
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={"lg"}
              mt="2"
              mb={3}
            >
              Networking Zone
            </Text>
          </Pressable>
          <Divider thickness="1" mb="2" mt="2" bg="gray.800" />
          <Pressable
            onPress={() =>
              Linking.openURL("https://wirc-icai.org/initiative/mentorship")
            }
          >
            <Box
              mt={3}
              p={2}
              mx="2"
              borderColor={"#00388D"}
              borderWidth="1"
              borderRadius="lg"
            >
              <Image w="100%" h="56" source={logo2} alt="img1" />
            </Box>
            <Text
              flex="1"
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={"lg"}
              mt="2"
              mb={3}
            >
              Mentorship Portal
            </Text>
          </Pressable>
          <Divider thickness="1" mb="2" mt="2" bg="gray.800" />
          <Pressable
            onPress={() =>
              Linking.openURL("https://wirc-icai.org/initiative/prerna")
            }
          >
            <Box
              mt={3}
              p={2}
              mx="2"
              borderColor={"#00388D"}
              borderWidth="1"
              borderRadius="lg"
            >
              <Image w="100%" h="56" source={logo1} alt="img1" />
            </Box>
            <Text
              flex="1"
              textAlign={"center"}
              fontWeight={"bold"}
              fontSize={"lg"}
              mt="2"
              mb={3}
            >
              Project Prerna
            </Text>
          </Pressable>
          <Divider thickness="1" mb="2" mt="2" bg="gray.800" />
        </VStack>
      </ScrollView>
    </>
  );
};

export default Service;
