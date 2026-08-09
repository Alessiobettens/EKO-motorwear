import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProductenScreen from "../screens/ProductenScreen";
import ProductDetailScreen from "../screens/ProductDetailScreen";

const Stack = createNativeStackNavigator();

export default function ProductStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProductenLijst" component={ProductenScreen} />

      <Stack.Screen name="ProductDetails" component={ProductDetailScreen} />
    </Stack.Navigator>
  );
}
