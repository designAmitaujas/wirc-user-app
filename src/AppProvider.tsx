import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import { useNetInfo } from "@react-native-community/netinfo";
import { NavigationContainer } from "@react-navigation/native";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, extendTheme } from "native-base";
import { FC, ReactNode } from "react";
import { NoInternet } from "./AppLoader";
import Apploading from "./components/Apploading";

SplashScreen.preventAutoHideAsync();

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const { isConnected } = useNetInfo();

  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const theme = extendTheme({
    fontConfig: {
      quicksand: {
        300: {
          normal: "Quicksand_300Regular",
        },
        400: {
          normal: "Quicksand_400Regular",
        },
        500: {
          normal: "Quicksand_500Medium",
        },
        600: {
          normal: "Quicksand_600SemiBold",
        },
        700: {
          normal: "Quicksand_700Bold",
        },
      },
    },
    fonts: {
      heading: "quicksand",
      body: "quicksand",
      mono: "quicksand",
    },
    colors: {
      black: {
        50: "#eceef9",
        100: "#c5cbec",
        200: "#D3D3D3",
        300: "#808080",
        400: "#696969",
        500: "#5263c6",
        600: "#0f045d",
        700: "#4B4953",
        800: "#322E32",
        900: "#211F21",
      },
    },
  });

  if (fontsLoaded === false) {
    return <Apploading />;
  } else {
    return (
      <>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            {isConnected ? children : <NoInternet />}
          </NavigationContainer>
        </NativeBaseProvider>
      </>
    );
  }
};

export default AppProvider;
