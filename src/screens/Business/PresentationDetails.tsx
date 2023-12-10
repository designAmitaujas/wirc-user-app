// import {
//     Button,
//     Divider,
//     HStack,
//     Icon,
//     Pressable,
//     ScrollView,
//     Spinner,
//     Text,
//     VStack,
//   } from "native-base";

//   import { FontAwesome5 } from "@expo/vector-icons";
//   import { useNavigation, useRoute } from "@react-navigation/native";
//   import moment from "moment";
//   import { useGetAllCpeResourceCategoryQuery, useGetAllCpeResourceQuery } from "../../gql/graphql";

// const RestHeader = () => {
//     const { goBack } = useNavigation();

//   const { params } = useRoute();

//   const { name } = params as { name: string };

//     return (
//       <>
//         <HStack
//           backgroundColor="#0f045d"
//           borderBottomRadius={40}
//           // justifyContent={"space-between"}
//           py="3"
//           // h={16}
//           px={4}
//           alignItems="center"
//           alignSelf={"center"}
//           w={"100%"}
//         >
//           <Button
//             bg="transparent"
//             colorScheme={"white"}
//             // w="14%"
//             onPress={goBack}
//             leftIcon={
//               <Icon
//                 size="md"
//                 as={<FontAwesome5 name="arrow-left" />}
//                 color="white"
//               />
//             }
//           />
//           <Text
//             color="white"
//             ml={8}
//             fontSize="24"
//             fontWeight="bold"
//             mb={1}
//             // w={"40%"}
//           >
//             Event Archives
//           </Text>
//         </HStack>
//       </>
//     );
//   };

//   const PresenationCard: React.FC<{
//     name: string;
//     topic: string;
//     youtubelink: string;
//     pdf: string;

//     preID: string;
//   }> = ({ name, youtubelink,pdf, preID,topic }) => {

//     return (
//       <>

//           <HStack space={2} p={4}>
//             <Text
//               w="28%"
//               fontSize="md"
//               fontWeight="semibold"
//               textAlign="center"
//               justifyContent="center"
//               alignItems="center"
//             >
//               {name}
//             </Text>
//             <Divider orientation="vertical" thickness="2" bg="gray.800" />
//             <Text
//               fontSize="md"
//               fontWeight="semibold"
//               w="72%"
//               justifyContent="center"
//               alignItems="center"
//             >
//               {name}
//             </Text>
//           </HStack>
//           <Divider thickness="2" bg="gray.800" />

//       </>
//     );
//   };

// const PresentationDetails = () => {
//     const {data} = useGetAllCpeResourceQuery()

//   const { params } = useRoute();

//   const { preID } = params as { preID: string };
//   return (
//    <>
//       <ScrollView p={2}>
//         <VStack borderWidth="1" borderColor="gray.400" w="100%">
//           {data?.getAllCpeResource. filter((item) => item.isActive === true)
//               .filter((item) => item.cpeResourceCategory?._id === preID)
//               .filter((item) => item.cpeResourceCategory?.isActive === true)
//               .map((item) => {
//             return (
//               <>
//                 <PresenationCard
//                   preID={item._id}
//                   youtubelink={moment(item.date).format("DD-MMM-YYYY")}
//                   name={item.name}
//                 />
//               </>
//             );
//           })}
//         </VStack>
//       </ScrollView>
//    </>
//   );
// };

// export default PresentationDetails;

import { Text, View } from "react-native";

const PresentationDetails = () => {
  return (
    <View>
      <Text>PresentationDetails</Text>
    </View>
  );
};

export default PresentationDetails;
