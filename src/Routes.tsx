import React, { useState, useEffect } from "react";
import Login from "./screens/auth/Login";
import BottomTab from "./screens/BottomTab";
import { createStackNavigator } from "@react-navigation/stack";
import * as SplashScreen from "expo-splash-screen";
import ProfileScreen from "./screens/profile/ProfileDetails";
import MobileLogin from "./screens/auth/NumberLogin";
import Qrcode from "./screens/profile/Qrcode";
import VisitingCard from "./screens/profile/VisitingCrad";
import Attendancesheet from "./screens/feedbackform/Attendancesheet";
import FeedbackForm from "./screens/feedbackform/FeedbackForm";
import UpcomingEvents from "./screens/UpcomingEvents";
import NetworkingScreen from "./screens/networking/Networking";

SplashScreen.preventAutoHideAsync();

const Stack = createStackNavigator();

const Routes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="BottomTab" component={BottomTab} />
      <Stack.Screen name="EditProfile" component={ProfileScreen} />
      <Stack.Screen name="mobile" component={MobileLogin} />
      <Stack.Screen name="QRcode" component={Qrcode} />
      <Stack.Screen name="RegisteredEvents" component={UpcomingEvents} />
      <Stack.Screen name="Feedback" component={FeedbackForm} />
      <Stack.Screen name="Attendancesheet" component={Attendancesheet} />
      <Stack.Screen name="VisitingCard" component={VisitingCard} />
      <Stack.Screen name="Networking" component={NetworkingScreen} />
    </Stack.Navigator>
  );
};

export default Routes;
