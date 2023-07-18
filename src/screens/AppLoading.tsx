import LottieView from "lottie-react-native";
import { Box, View } from "native-base";
import React, { memo } from "react";
import isEqual from "react-fast-compare";

const AppLoading = () => {
  return (
    <View h={"full"} bg={"white"}>
      <Box
        w={"40"}
        h={"40"}
        justifyContent={"center"}
        flex={1}
        alignSelf={"center"}
      >
        <LottieView
          source={require("../../assets/84639-loading-bar/124519-loder.json")}
          autoPlay
          loop
        />
      </Box>
    </View>
  );
};

export default memo(AppLoading, isEqual);
