import { View, Text, StyleSheet } from "react-native";

export default function ProductCard({ product }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>
        {product.fieldData.name}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginVertical: 8,
    borderRadius: 10,
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
});