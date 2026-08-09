import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  Button,
  StyleSheet,
  ScrollView,
} from "react-native";

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  const [quantity, setQuantity] = useState(1);

  const totalPrice = parseFloat(product.fieldData.prijs) * quantity;

  return (
    <ScrollView style={styles.container}>
      <Image
        source={{
          uri: product.fieldData.afbeelding.url,
        }}
        style={styles.image}
      />

      <Text style={styles.title}>{product.fieldData.name}</Text>

      <Text style={styles.price}>€ {product.fieldData.prijs}</Text>

      <Text style={styles.description}>{product.fieldData.description}</Text>

      <Text style={styles.quantity}>Aantal: {quantity}</Text>

      <Button title="+" onPress={() => setQuantity(quantity + 1)} />

      <Button
        title="-"
        onPress={() => {
          if (quantity > 1) {
            setQuantity(quantity - 1);
          }
        }}
      />

      <Text style={styles.total}>Totale prijs: € {totalPrice.toFixed(2)}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  image: {
    width: "100%",
    height: 300,
    resizeMode: "contain",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },

  price: {
    fontSize: 20,
    color: "green",
    marginVertical: 10,
  },

  description: {
    fontSize: 16,
    lineHeight: 24,
  },

  quantity: {
    fontSize: 18,
    marginTop: 20,
  },

  total: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 20,
  },
});
