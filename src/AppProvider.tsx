import messaging from "@react-native-firebase/messaging";
import * as Notifications from "expo-notifications";
import * as SplashScreen from "expo-splash-screen";
import { FC, ReactNode, useEffect } from "react";
import { PermissionsAndroid } from "react-native";
import { useSetFirebaseIdMutation } from "./gql/graphql";
import { useAppAuthState } from "./store";

SplashScreen.preventAutoHideAsync();

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const AppProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [setFirebaseToken] = useSetFirebaseIdMutation();
  const { isAuth } = useAppAuthState();

  useEffect(() => {
    (async () => {
      try {
        if (isAuth === true) {
          PermissionsAndroid.request(
            PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS
          );

          Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
          });

          const { status: existingStatus } =
            await Notifications.getPermissionsAsync();
          let finalStatus = existingStatus;

          if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
          }

          if (finalStatus !== "granted") {
            return;
          }

          Notifications.setNotificationHandler({
            handleNotification: async () => ({
              shouldShowAlert: true,
              shouldPlaySound: true,
              shouldSetBadge: false,
            }),
          });

          await messaging().setAutoInitEnabled(true);

          const authStatus = await messaging().requestPermission();

          const enabled =
            authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
            authStatus === messaging.AuthorizationStatus.PROVISIONAL;

          if (enabled) {
            const token = await messaging().getToken();

            console.log(token);

            await setFirebaseToken({ variables: { firebaseId: token } });

            messaging().onNotificationOpenedApp(async (remoteMessage) => {
              console.log(
                "Notification caused app to open from background state:",
                remoteMessage.notification
              );
            });

            await messaging()
              .getInitialNotification()
              .then((remoteMessage) => {
                if (remoteMessage) {
                  console.log(
                    "Notification caused app to open from quit state:",
                    remoteMessage.notification
                  );
                }
              });

            // Register background handler
            messaging().setBackgroundMessageHandler(async (remoteMessage) => {
              console.log(
                "Message handled in the background!",
                remoteMessage.data
              );

              Notifications.scheduleNotificationAsync({
                content: {
                  // @ts-ignore
                  title: remoteMessage.data.title,
                  // @ts-ignore
                  body: remoteMessage.data.body,
                },
                trigger: null,
              });
            });
          }
        }
      } catch (err) {
        console.log("ERRR");
      }
    })();

    const unsubscribe = messaging().onMessage(async (remoteMessage) => {
      // Alert.alert("A new FCM message arrived!", JSON.stringify(remoteMessage));
      Notifications.scheduleNotificationAsync({
        content: {
          // @ts-ignore
          title: remoteMessage.data.title,
          // @ts-ignore
          body: remoteMessage.data.body,
        },
        trigger: null,
      });
    });

    return unsubscribe;
  }, [isAuth]);

  return children;
};

export default AppProvider;
