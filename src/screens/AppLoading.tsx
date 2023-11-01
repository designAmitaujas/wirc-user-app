import LottieView from "lottie-react-native";
import { memo } from "react";
import isEqual from "react-fast-compare";

const AppLoading = () => {
  return (
    <LottieView
      source={require("../../assets/no-internet.json")}
      autoPlay
      loop
    />
  );
};

export default memo(AppLoading, isEqual);
