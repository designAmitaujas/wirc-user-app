import { useNavigation } from "@react-navigation/native";
import { Box, HStack, Image, ScrollView, Text, VStack } from "native-base";
import { Linking, TouchableOpacity } from "react-native";

const logo = require("../../assets/wirclogo.png");
const logo1 = require("../../assets/123.png");
const logo6 = require("../../assets/Benefits3.png");
const logo2 = require("../../assets/business.png");
const logo3 = require("../../assets/evnts.png");
const logo4 = require("../../assets/news.png");
const logo5 = require("../../assets/75ici.png");
const logo7 = require("../../assets/person.png");
const logo8 = require("../../assets/services.png");

const HomeScreen = () => {
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
            WIRC Connect
          </Text>
          <Image
            source={logo5}
            alt="logo"
            resizeMode="contain"
            h={12}
            w={12}
            borderRadius="full"
          />
        </HStack>
      </Box>
      <ScrollView flex={1}>
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
    navigate("Business");
  };

  const handleInitatives = () => {
    // @ts-ignore
    navigate("Whatwebring");
  };

  const handlenews = () => {
    // @ts-ignore
    navigate("newsletter");
  };

  const handlebearer = () => {
    // @ts-ignore
    navigate("bearer");
  };

  const handleservice = () => {
    // @ts-ignore
    navigate("service");
  };

  return (
    <>
      <VStack p={"5"} flex={1} justifyContent={"center"} space={5}>
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
          <TouchableOpacity onPress={handlebearer}>
            <Box>
              <Image
                size={150}
                borderRadius={100}
                source={logo7}
                alt="Alternate Text"
              />
              <Text
                textAlign="center"
                fontSize="xl"
                fontWeight="bold"
                textTransform="uppercase"
              >
                WIRC Office {"\n"}Bearers
              </Text>
            </Box>
          </TouchableOpacity>
        </HStack>
        <HStack flex={1} justifyContent="space-between">
          <TouchableOpacity onPress={handleInitatives}>
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => Linking.openURL("https://cmpbenefits.icai.org/")}
          >
            <Box>
              <Image
                size={150}
                borderRadius={100}
                source={logo6}
                alt="Alternate Text"
              />
              <Text
                textAlign="center"
                fontSize="xl"
                fontWeight="bold"
                textTransform="uppercase"
              >
                CMP Benefits
              </Text>
            </Box>
          </TouchableOpacity>
        </HStack>
        <HStack flex={1} justifyContent="space-between">
          <TouchableOpacity onPress={handlenews}>
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
          </TouchableOpacity>
          <TouchableOpacity onPress={handleservice}>
            <Box>
              <Image
                size={150}
                borderRadius={100}
                source={logo8}
                alt="Alternate Text"
              />
              <Text
                textAlign="center"
                fontSize="xl"
                fontWeight="bold"
                textTransform="uppercase"
              >
                WIRC Services
              </Text>
            </Box>
          </TouchableOpacity>
        </HStack>
        <HStack flex={1} justifyContent="space-between">
          <TouchableOpacity onPress={handleSkill}>
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
                Business Listing
              </Text>
            </Box>
          </TouchableOpacity>
        </HStack>
      </VStack>
    </>
  );
};

export default HomeScreen;
