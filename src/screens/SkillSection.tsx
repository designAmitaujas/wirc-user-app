import { IndexPath, Select, SelectItem } from "@ui-kitten/components";
import _ from "lodash";
import { Button, Text, View, useToast } from "native-base";
import { useEffect, useState } from "react";
import {
  useCreateOrUpdateMemberSkillMutation,
  useGetAllSkillsQuery,
  useGetMySkillListLazyQuery,
  useMyProfileInformationQuery,
} from "../gql/graphql";

const SkillSection = () => {
  const { data } = useGetAllSkillsQuery();
  const { data: profile } = useMyProfileInformationQuery();

  const { show } = useToast();

  const [showValue, setShowValue] = useState<string>("");
  const [dataArr, setDataArr] = useState<Array<string>>([]);

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

        setMultiSelectedIndex(indexPathArr);
      }
    })();
  }, [dataArr]);

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
          title: _.capitalize("you skills is updated successfully"),
          placement: "top",
        });
      } else {
        show({
          title: _.capitalize("trouble updating skills"),
          placement: "top",
        });
      }
    } else {
      show({
        title: _.capitalize("please select skill to update"),
        placement: "top",
      });
    }
  };

  if (!data?.getAllSkills) return <></>;

  return (
    <View flex={1} alignItems="center" bg="#FFF">
      <Text>SkillSection</Text>
      <Select
        multiSelect={true}
        value={showValue}
        selectedIndex={multiSelectedIndex}
        // @ts-ignore
        onSelect={(index: IndexPath[]) => {
          console.log(index);
          setMultiSelectedIndex(index);
        }}
        style={{ width: "78%" }}
      >
        {dataArr.map((item) => {
          return <SelectItem title={item} key={item} />;
        })}
      </Select>
      <Button w="78%" mt="3" onPress={handleUpdate}>
        Update
      </Button>
    </View>
  );
};

export default SkillSection;
