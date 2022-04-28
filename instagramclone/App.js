import React from "react";
import Ionic from "react-native-vector-icons/Ionicons";
//provides navigation to differentscreens
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//components
import Home from "./src/components/screens/Home";
import Search from "./src/components/screens/Search";
import Reels from "./src/components/screens/Reels";
import Profile from "./src/components/screens/Profile";
import Activity from "./src/components/screens/Activity";
import Status from "./src/components/screenComponents/Status";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();

  const BottomTabScreen = () => {
    return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarShowLabel: false,
          headerShown: false,
          tabBarStyle: {
            height: 50,
          },
 //to activate the icon when focused
          tabBarIcon: ({ focused, size, colour }) => {
            let iconName;
            if (route.name === "Home") {
              iconName = focused ? "home-sharp" : "home-outline";
              size = focused ? size + 8 : size + 2;
            } else if (route.name === "Search") {
              iconName = focused ? "search" : "ios-search-outline";
            } else if (route.name === "Reels") {
              iconName = focused
                ? "caret-forward-circle"
                : "caret-forward-circle-outline";
            } else if (route.name === "Activity") {
              iconName = focused ? "ios-heart" : "ios-heart-outline";
            } else if (route.name === "Profile") {
              iconName = focused ? "ios-person-circle" : "ios-person-outline";
            }

            return <Ionic name={iconName} size={size} color={colour} />;
          },
        })}
      >
        {/* screens*/}
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Search" component={Search} />
        <Tab.Screen name="Reels" component={Reels} />
        <Tab.Screen name="Activity" component={Activity} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    );
  };

  return (
    /* responsible for managing your app state and linking your top-level navigator to the app environment. */
    <NavigationContainer>
      {/* Stack Navigator provides a way for your app to transition between screens where each new screen is placed on top of a stack. */}
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* to render screens */}
        <Stack.Screen name="Bottom" component={BottomTabScreen} />
        <Stack.Screen name="Status" component={Status} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
