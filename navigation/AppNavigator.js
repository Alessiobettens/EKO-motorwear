import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductStack from "./ProductStack";
import BlogStack from "./BlogStack";
import ServiceScreen from "../screens/ServiceScreen";
import GameScreen from "../screens/GameScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false, // Hide the header for all screens
          tabBarActiveTintColor: "#efd541",
          tabBarInactiveTintColor: "white",

          tabBarStyle: {
            backgroundColor: "#212121",
            borderTopWidth: 0,
            elevation: 0,
          },

          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Winkel") {
              iconName = "cart";
            } else if (route.name === "Game") {
              iconName = "game-controller";
            } else if (route.name === "Blog") {
              iconName = "newspaper";
            } else if (route.name === "Service") {
              iconName = "construct";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Winkel" component={ProductStack} />

        <Tab.Screen name="Game" component={GameScreen} />

        <Tab.Screen name="Blog" component={BlogStack} />

        <Tab.Screen name="Service" component={ServiceScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
