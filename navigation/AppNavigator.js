import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "../screens/HomeScreen";
import ProductenScreen from "../screens/ProductenScreen";
import BlogScreen from "../screens/BlogScreen";
import AboutScreen from "../screens/AboutScreen";
import GameScreen from "../screens/GameScreen";

const Tab = createBottomTabNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Producten" component={ProductenScreen} />
        <Tab.Screen name="Blog" component={BlogScreen} />
        <Tab.Screen name="About" component={AboutScreen} />
        <Tab.Screen name="Game" component={GameScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}