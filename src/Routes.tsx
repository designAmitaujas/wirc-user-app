import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import BottomTab from "./screens/BottomTab";
import EventRegistration from "./screens/EventRegistration";
import Transactiondetail from "./screens/Payment/Transactiondetail";
import SkillSection from "./screens/SkillSection";
import UpcomingEvents from "./screens/UpcomingEvents";
import Login from "./screens/auth/Login";
import MobileLogin from "./screens/auth/NumberLogin";
import FeedbackForm from "./screens/feedbackform/FeedbackForm";
import Memberattendancelist from "./screens/networking/Memberattendancelist";
import NetworkingScreen from "./screens/networking/Networking";
import ProfileScreen from "./screens/profile/ProfileDetails";
import Qrcode from "./screens/profile/Qrcode";
import VisitingCard from "./screens/profile/VisitingCrad";
import { useAppAuthState } from "./store";

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const Routes = () => {
  const { isAuth } = useAppAuthState();

  return (
    <Stack.Navigator
      initialRouteName={isAuth === true ? "BottomTab" : "Login"}
      screenOptions={{ headerShown: false }}
    >
      {isAuth === true ? (
        <>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="SkillSection" component={SkillSection} />
          <Stack.Screen name="EditProfile" component={ProfileScreen} />
          <Stack.Screen name="mobile" component={MobileLogin} />
          <Stack.Screen name="QRcode" component={Qrcode} />
          <Stack.Screen name="RegisteredEvents" component={UpcomingEvents} />
          <Stack.Screen name="Feedback" component={FeedbackForm} />
          <Stack.Screen name="VisitingCard" component={VisitingCard} />
          <Stack.Screen name="Networking" component={NetworkingScreen} />
          <Stack.Screen
            name="MemberAttendance"
            component={Memberattendancelist}
          />
          <Stack.Screen
            name="TransactionDetails"
            component={Transactiondetail}
          />
          <Stack.Screen
            name="EventRegistration"
            component={EventRegistration}
          />
        </>
      ) : (
        <>
          <Stack.Screen name="Login" component={Login} />
        </>
      )}
    </Stack.Navigator>
  );
};

export default Routes;
