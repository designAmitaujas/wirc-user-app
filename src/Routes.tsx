import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as SplashScreen from "expo-splash-screen";
import BottomTab from "./screens/BottomTab";
import Business from "./screens/Business/Business";
import Home from "./screens/Event/EventHome";
import EventSpeaker from "./screens/Event/EventSpeaker";
import RegisterdEventDetails from "./screens/Event/RegisteredEventDetails";
import ViewImage from "./screens/Event/ViewImage";
import EventRegistration from "./screens/EventRegistration";
import Details from "./screens/Initatives/Details";
import Whatwe from "./screens/Initatives/Whatwe";
import Transactiondetail from "./screens/Payment/Transactiondetail";
import QRScanner from "./screens/QrScanner";
import SkillSection from "./screens/SkillSection";
import UpcomingEvents from "./screens/UpcomingEvents";
import Login from "./screens/auth/Login";
import MobileLogin from "./screens/auth/NumberLogin";
import FeedbackForm from "./screens/feedbackform/FeedbackForm";

import Newsletter from "./screens/Business/Newsletter";
import Presentation from "./screens/Business/Presentation";
import PresentationDetails from "./screens/Business/PresentationDetails";
import Qna from "./screens/Business/Qna";
import Registration from "./screens/auth/Registration";
import NetworkingScreen from "./screens/networking/Networking";
import Notification from "./screens/networking/Notification";
import ProfileScreen from "./screens/profile/ProfileDetails";
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
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="mobile" component={MobileLogin} />
      {isAuth === true ? (
        <>
          <Stack.Screen name="BottomTab" component={BottomTab} />
          <Stack.Screen name="EventHome" component={Home} />

          <Stack.Screen name="SkillSection" component={SkillSection} />
          <Stack.Screen name="EditProfile" component={ProfileScreen} />

          <Stack.Screen name="QRcode" component={QRScanner} />
          <Stack.Screen name="Business" component={Business} />
          <Stack.Screen name="Eventspeaker" component={EventSpeaker} />
          <Stack.Screen name="RegisteredEvents" component={UpcomingEvents} />

          <Stack.Screen name="ViewImage" component={ViewImage} />
          <Stack.Screen name="Whatwebring" component={Whatwe} />
          <Stack.Screen name="Whatwebringdetails" component={Details} />
          <Stack.Screen name="newsletter" component={Newsletter} />
          <Stack.Screen name="notification" component={Notification} />
          <Stack.Screen name="presentation" component={Presentation} />
          <Stack.Screen name="question" component={Qna} />

          <Stack.Screen
            name="presentationdetails"
            component={PresentationDetails}
          />

          <Stack.Screen
            name="EventsDetails"
            component={RegisterdEventDetails}
          />
          <Stack.Screen name="Feedback" component={FeedbackForm} />
          <Stack.Screen name="VisitingCard" component={VisitingCard} />
          <Stack.Screen name="Networking" component={NetworkingScreen} />

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
