import LottieView from "lottie-react-native";
import { View } from "native-base";
import React from "react";

const NoInternet = () => {
  return (
    <View flex={1}>
      <LottieView autoPlay source={require("../assets/no-internet.json")} />
    </View>
  );
};

export { NoInternet };
