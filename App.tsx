import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import {
  Quicksand_300Light,
  Quicksand_400Regular,
  Quicksand_500Medium,
  Quicksand_600SemiBold,
  Quicksand_700Bold,
  useFonts,
} from "@expo-google-fonts/quicksand";
import { Entypo } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { NativeBaseProvider, StatusBar, extendTheme } from "native-base";
import React, { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import "react-native-gesture-handler";
import Routes from "./src/Routes";
import { GQL_API_URL } from "./src/constant";

SplashScreen.preventAutoHideAsync();

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
      600: "#313031",
      700: "#4B4953",
      800: "#322E32",
      900: "#211F21",
    },
  },
});

const App = () => {
  const [fontsLoaded] = useFonts({
    Quicksand_300Light,
    Quicksand_400Regular,
    Quicksand_500Medium,
    Quicksand_600SemiBold,
    Quicksand_700Bold,
  });

  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await Font.loadAsync(Entypo.font);
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const client = new ApolloClient({
    uri: GQL_API_URL,
    cache: new InMemoryCache(),
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  if (fontsLoaded === false) {
    return <AppLoading />;
  }

  return (
    <ApolloProvider client={client}>
      <NativeBaseProvider theme={theme}>
        <NavigationContainer onReady={onLayoutRootView}>
          <SafeAreaView style={{ flex: 1 }}>
            <StatusBar hidden={false} />
            <Routes />
          </SafeAreaView>
        </NavigationContainer>
      </NativeBaseProvider>
    </ApolloProvider>
  );
};

export default App;
