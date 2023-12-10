import messaging, { firebase } from "@react-native-firebase/messaging";
import * as SplashScreen from "expo-splash-screen";
import { FC, ReactNode, useEffect } from "react";
import { Alert } from "react-native";
import { useSetFirebaseIdMutation } from "./gql/graphql";
import { useAppAuthState } from "./store";

SplashScreen.preventAutoHideAsync();

if (!firebase.app.length) {
  firebase.initializeApp({
    apiKey: "AIzaSyCqJWuH3XrQOVVP5eaOX2lTZay_k-2TmD4",
    // authDomain: "YOUR_AUTH_DOMAIN",

    projectId: "wirc-1b868",
    storageBucket: "wirc-1b868.appspot.com",
    messagingSenderId: "703855841112",
    appId: "1:703855841112:android:9ad8298647e7c4b09c9f2d",
    databaseURL: "https://wirc.firebaseio.com",
    androidClientId: "com.amitaujas.WIRCUser",
    clientId: "109064105829116229778",
  });
}

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [response] = useSetFirebaseIdMutation();
  const { isAuth } = useAppAuthState();
  const requestUserPermission = async () => {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;

    console.log(authStatus);

    if (enabled) {
      console.log("Authorization status:", authStatus);
    }
  };

  useEffect(() => {
    //@ts-ignore
    if (requestUserPermission()) {
      //return fcm token for the device
      messaging()
        .getToken()
        .then((token) => {
          if (isAuth) {
            response({ variables: { firebaseId: token } });
          }
          console.log(token);
        });
    } else {
      console.log("Failed token status");
    }

    // Check whether an initial notification is available
    messaging()
      .getInitialNotification()
      .then(async (remoteMessage) => {
        if (remoteMessage) {
          console.log(
            "Notification caused app to open from quit state:",
            remoteMessage.notification
          );
        }
      });

    messaging().onNotificationOpenedApp(async (remoteMessage) => {
      console.log(
        "Notification caused app to open from background state:",
        remoteMessage.notification
      );
    });

    // Register background handler
    messaging().setBackgroundMessageHandler(async (remoteMessage) => {
      console.log("Message handled in the background!", remoteMessage);
    });

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  }, [isAuth]);

  return children;
};

export default AppProvider;
