import messaging from "@react-native-firebase/messaging";
import * as SplashScreen from "expo-splash-screen";
import { FC, ReactNode, useEffect } from "react";
import { Alert } from "react-native";
import { useSetFirebaseIdMutation } from "./gql/graphql";
import { useAppAuthState } from "./store";

SplashScreen.preventAutoHideAsync();

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  // const { isAuth } = useAppAuthState();
  // const [response] = useSetFirebaseIdMutation();

  // useEffect(() => {
  //   (async () => {
  //     const authStatus = await messaging().requestPermission();
  //     const enabled =
  //       authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
  //       authStatus === messaging.AuthorizationStatus.PROVISIONAL;

  //     console.log(authStatus);

  //     if (enabled) {
  //       console.log("Authorization status:", authStatus);
  //     }

  //     // if (isAuth === true && authStatus) {
  //     //   response({
  //     //     variables: { firebaseId: authStatus },
  //     //   });
  //     // }
  //   })();
  // }, []);

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
