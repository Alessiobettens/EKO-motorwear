import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ProductStack from "./ProductStack";
import BlogScreen from "../screens/BlogScreen";
import AboutScreen from "../screens/AboutScreen";
import GameScreen from "../screens/GameScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />

        <Tab.Screen name="Producten" component={ProductStack} />

        <Tab.Screen name="Blog" component={BlogScreen} />

        <Tab.Screen name="About" component={AboutScreen} />

        <Tab.Screen name="Game" component={GameScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
