import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

import ProductCard from "../components/ProductCard";

export default function HomeScreen() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const response = await fetch(
        "https://api.webflow.com/v2/collections/6a5bbd773a372fa8a1b71610/items",
        {
          headers: {
            Authorization:
              "Bearer 450ac81e27737ff9e1f75408ddd86f36ebdeb5c3bcbec7817c2ca2daad3f8b93",
          },
        },
      );

      const data = await response.json();

      setProducts(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/moto.jpg")}
        style={styles.hero}
      >
        <Text style={styles.title}>EKO MOTORWEAR</Text>

        <Text style={styles.subtitle}>Motoruitrusting voor elke rit</Text>
      </ImageBackground>

      <Text style={styles.sectionTitle}>Uitgelichte producten</Text>

      {products.slice(0, 4).map((product) => (
        <ProductCard key={product.id} product={product} onPress={() => {}} />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 250,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
  },

  subtitle: {
    fontSize: 16,
    marginTop: 10,
    color: "white",
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
