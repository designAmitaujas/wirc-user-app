import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Icon, IconButton, Spinner, Text, View } from "native-base";
import { useEffect } from "react";
import { ImageBackground } from "react-native";

const ViewImage = () => {
  const { params } = useRoute();
  const { navigate, goBack } = useNavigation();

  useEffect(() => {
    //@ts-ignore
    if (params?.imageUrl) {
      //@ts-ignore
      console.log(params?.imageUrl);
    }
  }, [params]);

  return (
    <View>
      {
        //@ts-ignore
        params?.imageUrl ? (
          <>
            <ImageBackground
              onLoadStart={() => <Spinner />}
              onError={() => console.log("Something went wrong")}
              //@ts-ignore
              source={{ uri: params?.imageUrl }}
              resizeMode="contain"
              style={{
                height: "100%",
                width: "100%",
                backgroundColor: "black",
              }}
              alt="Not found"
            >
              <View>
                <IconButton
                  alignSelf={"flex-start"}
                  onPress={goBack}
                  icon={
                    <Icon
                      name="close"
                      as={MaterialIcons}
                      color={"white"}
                      size={"2xl"}
                    />
                  }
                />
              </View>
            </ImageBackground>
          </>
        ) : (
          <>
            <View flex={1} justifyContent={"center"} alignItems={"center"}>
              <Text>Something went wrong</Text>
            </View>
          </>
        )
      }
    </View>
  );
};

export default ViewImage;
