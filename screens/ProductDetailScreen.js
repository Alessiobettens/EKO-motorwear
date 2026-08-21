import React, { useState } from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  Pressable,
  StyleSheet,
} from "react-native";

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  const [quantity, setQuantity] = useState(1);

  const price = parseFloat(product.fieldData.prijs);

  const totalPrice = price * quantity;

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

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

      <View style={styles.counterContainer}>
        <Pressable style={styles.buttonNeg} onPress={decreaseQuantity}>
          <Text style={styles.buttonText}>-</Text>
        </Pressable>

        <Text style={styles.quantity}>{quantity}</Text>

        <Pressable style={styles.buttonPos} onPress={increaseQuantity}>
          <Text style={styles.buttonText}>+</Text>
        </Pressable>
      </View>

      <Text style={styles.totalPrice}>
        Totale prijs: € {totalPrice.toFixed(2)}
      </Text>
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
    borderRadius: 10,
    backgroundColor: "#ffffff",
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 15,
  },

  price: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black",
    marginTop: 10,
    backgroundColor: "#efd541",
    borderRadius: 5,
    alignSelf: "flex-start",
    paddingHorizontal: 10,
    paddingVertical: 5,
  },

  description: {
    fontSize: 16,
    marginTop: 15,
    lineHeight: 24,
  },

  counterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 25,
  },

  buttonNeg: {
    backgroundColor: "#f80505",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  buttonPos: {
    backgroundColor: "#1fad17",
    width: 50,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },

  buttonText: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
  },

  quantity: {
    fontSize: 20,
    marginHorizontal: 20,
    fontWeight: "bold",
  },

  totalPrice: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 25,
  },
});
