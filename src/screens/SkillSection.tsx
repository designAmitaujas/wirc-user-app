import { FontAwesome5 } from "@expo/vector-icons";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import _ from "lodash";
import LottieView from "lottie-react-native";
import {
  Box,
  Button,
  HStack,
  Icon,
  Spinner,
  Text,
  VStack,
  View,
  useToast,
} from "native-base";
import { useEffect, useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

import {
  Skills,
  useCreateOrUpdateMemberSkillMutation,
  useGetAllSkillsQuery,
  useGetMySkillListLazyQuery,
  useMyProfileInformationQuery,
} from "../gql/graphql";

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
          My Focus Area
        </Text>
      </HStack>
    </>
  );
};

const SkillSection = () => {
  const { data, refetch, loading: l1 } = useGetAllSkillsQuery();
  const { data: profile } = useMyProfileInformationQuery();

  const { show } = useToast();
  const [loading, setLoading] = useState(false);

  const [showValue, setShowValue] = useState<string>("");
  const [dataArr, setDataArr] = useState<Array<string>>([]);
  const [key, setKey] = useState(Math.random());
  const [refreshing, setRefreshing] = useState(false);
  const isFocused = useIsFocused();
  const [multiSelectedIndex, setMultiSelectedIndex] = useState<IndexPath[]>([]);

  const [getMySkillList] = useGetMySkillListLazyQuery();
  const [generateSkill] = useCreateOrUpdateMemberSkillMutation();

  useEffect(() => {
    (async () => {
      const response = await getMySkillList({
        variables: {
          options: {
            id:
              profile?.myProfileInformation?.membershipNo.padStart(6, "0") ||
              "",
          },
        },
      });

      if (response.data) {
        const indexPathArr: IndexPath[] = [];

        var sortedCollection = _.sortBy(
          response.data.getMySkillList,
          function (item) {
            return dataArr.indexOf(item.skills?.name || "");
          }
        );

        sortedCollection.map((item, index) => {
          indexPathArr.push(new IndexPath(index));
        });
        setKey(Math.random());
        setMultiSelectedIndex(indexPathArr);
      }
    })();
  }, [dataArr]);

  useEffect(() => {
    const tempArry: Array<string> = [];

    data?.getAllSkills.map((item) => {
      tempArry.push(item.name);
    });

    setDataArr(tempArry);
  }, [data]);

  useEffect(() => {
    setShowValue(
      multiSelectedIndex
        .filter((index: IndexPath) => dataArr[index.row])
        .map((index: IndexPath) => {
          return dataArr[index.row];
        })
        .join(", ")
    );
  }, [multiSelectedIndex]);

  useEffect(() => {
    const tempArry: Array<string> = [];

    data?.getAllSkills.map((item) => {
      tempArry.push(item.name);
    });

    setDataArr(tempArry);
  }, [data]);

  const handleUpdate = async () => {
    try {
      setLoading(true);
      const returnArr = multiSelectedIndex
        .filter((index: IndexPath) => dataArr[index.row])
        .map((index: IndexPath) => {
          return dataArr[index.row];
        });

      const idArray = data?.getAllSkills
        .filter((item) => returnArr.includes(item.name))
        .map((item) => item._id);

      if (Array.isArray(idArray) && idArray.length !== 0) {
        const response = await generateSkill({
          variables: {
            options: {
              membershipNumber:
                profile?.myProfileInformation?.membershipNo.padStart(6, "0") ||
                "",
              arr: idArray,
            },
          },
        });

        if (response.data?.createOrUpdateMemberSkill.success === true) {
          show({
            render: () => {
              return (
                <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
                  Your skills updated successfully
                </Box>
              );
            },
            placement: "top",
          });
        } else {
          show({
            render: () => {
              return (
                <Box bg="red.500" px="2" py="1" rounded="sm" mb={5}>
                  trouble updating skills
                </Box>
              );
            },
            placement: "top",
          });
        }
      } else {
        show({
          title: _.capitalize("please select skill to update"),
          placement: "top",
        });
      }
    } catch (error) {
      console.error("Error during update:", error);
    } finally {
      // Reset loading state after update is complete
      setLoading(false);
    }
  };

  const newRefetch = async () => {
    setRefreshing(true);

    try {
      const result = await refetch(); // Refetch the data
      const skillsArray: Skills[] = result.data?.getAllSkills || [];
      const skillNames: string[] = skillsArray.map((skill) => skill.name);
      setDataArr(skillNames);
      setRefreshing(false);
    } catch (error) {
      console.error("Error while refetching data:", error);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    if (isFocused) {
      newRefetch();
    }
  }, [isFocused]);

  // useInterval(() => {
  //   if (!refreshing) {
  //     newRefetch();
  //   }
  // }, 10 * 1000);

  if (!data?.getAllSkills)
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

  return (
    <>
      <ScrollView
        style={{ backgroundColor: "#FFF" }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={newRefetch} />
        }
      >
        <View flex={1} alignItems="center" bg="#FFF">
          <RestHeader />
          {l1 || loading ? (
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
          ) : (
            <>
              <Select
                multiSelect={true}
                value={showValue}
                selectedIndex={multiSelectedIndex}
                // @ts-ignore
                onSelect={(index: IndexPath[]) => {
                  console.log(index);
                  setMultiSelectedIndex(index);
                }}
                style={{ width: "78%", marginTop: 24 }}
              >
                {dataArr.map((item) => {
                  return <SelectItem title={item} key={key} />;
                })}
              </Select>

              <Button
                w="50%"
                mt="10"
                onPress={handleUpdate}
                backgroundColor="#0f045d"
              >
                Update
              </Button>
              <Text mt="12" fontSize="lg" fontWeight="bold">
                Your Selected Focus Area
              </Text>
              <Box h={"32"} w={"48"}>
                <LottieView
                  autoPlay
                  source={require("../../assets/animation_lnof4dix.json")}
                />
              </Box>
              <VStack mt="10">
                {showValue.split(",").map((item, index) => {
                  return (
                    <>
                      {item && (
                        <Text
                          fontSize="lg"
                          fontWeight="bold"
                          width="65%"
                          key={key}
                        >
                          {index + 1} {item}
                        </Text>
                      )}
                    </>
                  );
                })}
              </VStack>
            </>
          )}
        </View>
      </ScrollView>
    </>
  );
};

export default SkillSection;
