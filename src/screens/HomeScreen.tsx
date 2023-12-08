import { Entypo, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base";
import { TouchableOpacity } from "react-native";

const logo = require("../../assets/wirclogo.png");
const logo1 = require("../../assets/123.png");
const logo2 = require("../../assets/business.png");
const logo3 = require("../../assets/evnts.png");
const logo4 = require("../../assets/news.png");

const HomeScreen = () => {
  const { navigate } = useNavigation();

  const networking = () => {
    // @ts-ignore
    navigate("Networking");
  };

  const handleSkill = () => {
    // @ts-ignore
    navigate("SkillSection");
  };

  return (
    <VStack bg={"white"} flex={1}>
      <Box
        bg={"#0f045d"}
        h={"16"}
        // py={1.5}
        w={"full"}
        borderBottomRadius={40}
        justifyContent={"center"}
      >
        <HStack mx={8} justifyContent={"space-between"} alignItems={"center"}>
          <Image source={logo} alt="logo" resizeMode="contain" h={12} w={12} />
          <Text
            color="white"
            // ml={16}
            fontSize="22"
            fontWeight="bold"
            // mb={1}
            // w={"40%"}
          >
            WIRC
          </Text>
          <HStack display="flex" space={10}>
            <TouchableOpacity onPress={networking}>
              <Ionicons name="earth" size={24} color="white" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleSkill}
              style={{ justifyContent: "center", display: "flex" }}
            >
              <Entypo name="trophy" size={24} color="white" />
            </TouchableOpacity>
          </HStack>
        </HStack>
      </Box>
      <ScrollView flex={1} marginTop="20">
        <HomeCards />
      </ScrollView>
    </VStack>
  );
};

export const HomeCards = () => {
  const { navigate } = useNavigation();

  const events = () => {
    // @ts-ignore
    navigate("EventHome");
  };

  const handleSkill = () => {
    // @ts-ignore
    navigate("SkillSection");
  };
  return (
    <>
      <VStack p={"5"} flex={1} justifyContent={"center"} space={10}>
        <HStack flex={1} justifyContent="space-between">
          <TouchableOpacity onPress={events}>
            <Box>
              <Image
                size={150}
                borderRadius={100}
                source={logo3}
                alt="Alternate Text"
              />
              <Text
                textAlign="center"
                fontSize="xl"
                fontWeight="bold"
                textTransform="uppercase"
              >
                Events
              </Text>
            </Box>
          </TouchableOpacity>

          <Box>
            <Image
              size={150}
              borderRadius={100}
              source={logo2}
              alt="Alternate Text"
            />
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Business
            </Text>
          </Box>
        </HStack>
        <HStack flex={1} justifyContent="space-between">
          <Box>
            <Image
              size={150}
              borderRadius={100}
              source={logo1}
              alt="Alternate Text"
            />
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Initatives
            </Text>
          </Box>
          <Box>
            <Image
              size={150}
              borderRadius={100}
              source={logo4}
              alt="Alternate Text"
            />
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="bold"
              textTransform="uppercase"
            >
              Newsletters
            </Text>
          </Box>
        </HStack>
      </VStack>
    </>
  );
};

export default HomeScreen;
