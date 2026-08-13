import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import HomeScreen from "../screens/HomeScreen";
import ProductStack from "./ProductStack";
import BlogStack from "./BlogStack";
import AboutScreen from "../screens/AboutScreen";
import GameScreen from "../screens/GameScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#efd541",
          tabBarInactiveTintColor: "gray",
          tabBarIcon: ({ color, size }) => {
            let iconName;

            if (route.name === "Home") {
              iconName = "home";
            } else if (route.name === "Winkel") {
              iconName = "cart";
            } else if (route.name === "Blog") {
              iconName = "newspaper";
            } else if (route.name === "About") {
              iconName = "information-circle";
            } else if (route.name === "Game") {
              iconName = "game-controller";
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Winkel" component={ProductStack} />

        <Tab.Screen name="Blog" component={BlogStack} />

        <Tab.Screen name="About" component={AboutScreen} />

        <Tab.Screen name="Game" component={GameScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
