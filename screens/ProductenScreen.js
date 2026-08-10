import React, { useEffect, useState } from "react";
import { View, Text, FlatList, TextInput, StyleSheet } from "react-native";
import { Picker } from "@react-native-picker/picker";

import ProductCard from "../components/ProductCard";

const categories = {
  "6a622557d733a268ac93e1c1": "Accessoires",
  "6a622549c22620ebba234eda": "Bagage",
  "6a62253739b1daa69db6a99b": "Laarzen",
  "6a62216946ce5cef5a78068e": "Handschoenen",
  "6a5e481ca21026eeeeb2bb64": "Kledij",
  "6a5e3ec1101dc939517c457d": "Motorhelmen",
};

export default function ProductenScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [sortOption, setSortOption] = useState("");

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
            accept: "application/json",
          },
        },
      );

      const data = await response.json();

      setProducts(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.fieldData.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryId = product.fieldData.category?.[0];

    const categoryName = categories[categoryId];

    const matchesCategory =
      selectedCategory === "Alle" || categoryName === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortOption) {
    case "price-low-high":
      sortedProducts.sort(
        (a, b) => parseFloat(a.fieldData.prijs) - parseFloat(b.fieldData.prijs),
      );
      break;

    case "price-high-low":
      sortedProducts.sort(
        (a, b) => parseFloat(b.fieldData.prijs) - parseFloat(a.fieldData.prijs),
      );
      break;

    case "name-az":
      sortedProducts.sort((a, b) =>
        a.fieldData.name.localeCompare(b.fieldData.name),
      );
      break;

    case "name-za":
      sortedProducts.sort((a, b) =>
        b.fieldData.name.localeCompare(a.fieldData.name),
      );
      break;
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Zoek een product..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          borderColor: "#ccc",
          padding: 10,
          marginBottom: 10,
          borderRadius: 10,
        }}
      />

      <Picker
        selectedValue={selectedCategory}
        onValueChange={(itemValue) => setSelectedCategory(itemValue)}
      >
        <Picker.Item label="Alle" value="Alle" />
        <Picker.Item label="Accessoires" value="Accessoires" />
        <Picker.Item label="Bagage" value="Bagage" />
        <Picker.Item label="Laarzen" value="Laarzen" />
        <Picker.Item label="Handschoenen" value="Handschoenen" />
        <Picker.Item label="Kledij" value="Kledij" />
        <Picker.Item label="Motorhelmen" value="Motorhelmen" />
      </Picker>

      <Picker
        selectedValue={sortOption}
        onValueChange={(value) => setSortOption(value)}
      >
        <Picker.Item label="Sorteer..." value="" />

        <Picker.Item label="Prijs laag → hoog" value="price-low-high" />

        <Picker.Item label="Prijs hoog → laag" value="price-high-low" />

        <Picker.Item label="Naam A → Z" value="name-az" />

        <Picker.Item label="Naam Z → A" value="name-za" />
      </Picker>

      <FlatList
        data={sortedProducts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductCard
            product={item}
            onPress={() =>
              navigation.navigate("ProductDetails", {
                product: item,
              })
            }
          />
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
