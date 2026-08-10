import { createNativeStackNavigator } from "@react-navigation/native-stack";

import BlogScreen from "../screens/BlogScreen";
import BlogDetailScreen from "../screens/BlogDetailScreen";

const Stack = createNativeStackNavigator();

export default function BlogStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="BlogLijst" component={BlogScreen} />

      <Stack.Screen name="BlogDetails" component={BlogDetailScreen} />
    </Stack.Navigator>
  );
}
