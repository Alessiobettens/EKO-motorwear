import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function ProductCard({ product, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image
        source={{
          uri: product.fieldData.afbeelding.url,
        }}
        style={styles.image}
      />

      <Text style={styles.name}>{product.fieldData.name}</Text>

      <Text style={styles.price}>€ {product.fieldData.prijs}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
  },

  image: {
    width: 200,
    height: 200,
    alignSelf: "center",
  },

  name: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },

  price: {
    color: "green",
    fontSize: 16,
    marginTop: 5,
  },
});
