import React from "react";
import PopularArticlesScreen from "../screens/Popular";
import RecommendedArticlesScreen from "../screens/Recommendation";
import LikedArticlesScreen from "../screens/Liked";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { RFValue } from "react-native-responsive-fontsize";

const AppTopNavigation = createMaterialTopTabNavigator();

export default function TopTabNav() {
  return (
    <AppTopNavigation.Navigator  screenOptions={{
      tabBarLabelStyle: { fontSize: RFValue(12) ,fontFamily:"monospace"},
      tabBarItemStyle: { borderWidth:1, borderColor:"white" },
      tabBarStyle: { backgroundColor: '#182854' },
      tabBarActiveTintColor: 'white',
    }}>
      <AppTopNavigation.Screen name="Popular" component={PopularMoviesScreen} />
      <AppTopNavigation.Screen name="Recommended" component={RecommendedMoviesScreen} />
      <AppTopNavigation.Screen name="Liked" component={LikedMoviesScreen} />
    </AppTopNavigation.Navigator>
  );
}
