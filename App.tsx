import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  from,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { onError } from "@apollo/client/link/error";
import * as eva from "@eva-design/eva";
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
import { ApplicationProvider } from "@ui-kitten/components";
import { createUploadLink } from "apollo-upload-client";
import AppLoading from "expo-app-loading";
import * as Font from "expo-font";
import * as SplashScreen from "expo-splash-screen";
// import "firebase/auth";
// import "firebase/database";
import {
  NativeBaseProvider,
  StatusBar,
  extendTheme,
  useToast,
} from "native-base";
import { useCallback, useEffect, useState } from "react";
import { LogBox, SafeAreaView } from "react-native";
import ErrorBoundary from "react-native-error-boundary";
import "react-native-gesture-handler";
import { enableScreens } from "react-native-screens";
import AppProvider from "./src/AppProvider";
import Routes from "./src/Routes";
import { GQL_API_URL } from "./src/constant";
import { useAppAuthState } from "./src/store";

enableScreens(false);
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

  const { jwt } = useAppAuthState();

  const { show } = useToast();

  const [appIsReady, setAppIsReady] = useState(false);

  const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
      graphQLErrors.forEach(({ message }) => {
        if (message === "AUTH_ERROR") {
          show({ title: "AUTH_ERROR", placement: "top" });
        } else {
          show({ title: "SOMETHING WENT WRONG ON SERVER", placement: "top" });
        }
      });
    }

    if (networkError) {
      show({ title: "INTERNET ERROR", placement: "top" });
    }
  });

  useEffect(() => {
    LogBox.ignoreLogs([
      "In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.",
    ]);
  }, []);

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

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        authorization: jwt || "",
      },
    };
  });

  const client = new ApolloClient({
    uri: GQL_API_URL,
    cache: new InMemoryCache(),
    link: from([
      errorLink,
      authLink.concat(
        createUploadLink({
          uri: GQL_API_URL,
        })
      ),
    ]),

    headers: {
      authorization: jwt || "",
    },

    defaultOptions: {
      query: { fetchPolicy: "no-cache" },
      mutate: { fetchPolicy: "no-cache" },
      watchQuery: { fetchPolicy: "no-cache" },
    },
  });

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  const errorHandler = (error: Error, stackTrace: string) => {
    console.error(error);
    console.error(stackTrace);
  };

  if (!appIsReady) {
    return null;
  }

  if (fontsLoaded === false) {
    return <AppLoading />;
  }

  return (
    <ErrorBoundary onError={errorHandler}>
      <ApolloProvider client={client}>
        <AppProvider>
          <ApplicationProvider {...eva} theme={eva.light}>
            <NativeBaseProvider theme={theme}>
              <NavigationContainer onReady={onLayoutRootView}>
                <SafeAreaView style={{ flex: 1 }}>
                  <StatusBar hidden={false} />
                  <Routes />
                </SafeAreaView>
              </NavigationContainer>
            </NativeBaseProvider>
          </ApplicationProvider>
        </AppProvider>
      </ApolloProvider>
    </ErrorBoundary>
  );
};

export default App;
