import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
} from "react-native";

export default function ProductenScreen() {
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
            Authorization: "Bearer 450ac81e27737ff9e1f75408ddd86f36ebdeb5c3bcbec7817c2ca2daad3f8b93",
            accept: "application/json",
          },
        }
      );

      const data = await response.json();

      console.log(data);

      setProducts(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Text style={styles.productName}>
            {item.fieldData.name}
          </Text>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  productName: {
    fontSize: 18,
    marginBottom: 10,
  },
});