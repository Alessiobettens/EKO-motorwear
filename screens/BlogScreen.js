import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  ScrollView,
  Pressable,
  StyleSheet,
} from "react-native";
import { Picker } from "@react-native-picker/picker";

import BlogCard from "../components/BlogCard";

const blogCategories = {
  "6a739b82baadab45212627df": "Uitrusting",
  a87589dda9c1de13d27a8d7e1e6aa068: "Innovatie",
  "6a739b462bdf4edb8577b0d3": "Reizen",
  "2b638bcdaaf2fe811db4a3adc8f4daef": "Uitrusting",
  c59261f4ba3d7c4c2dc2b9073ff1bede: "Reizen",
};

const categoryOptions = ["Alle", "Uitrusting", "Innovatie", "Reizen"];

export default function BlogScreen({ navigation }) {
  const [blogs, setBlogs] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("Alle");
  const [sortOption, setSortOption] = useState("");

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await fetch(
        "https://api.webflow.com/v2/collections/6a70a789e71cc80ac8866f7b/items",
        {
          headers: {
            Authorization:
              "Bearer 450ac81e27737ff9e1f75408ddd86f36ebdeb5c3bcbec7817c2ca2daad3f8b93",
          },
        },
      );

      const data = await response.json();
      setBlogs(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  const getCategoryName = (blog) => {
    const categoryId =
      blog?.fieldData?.["categorie-2"] || blog?.fieldData?.["categories-3"];

    if (blogCategories[categoryId]) {
      return blogCategories[categoryId];
    }

    const text =
      `${blog?.fieldData?.titel ?? ""} ${blog?.fieldData?.["tekst-1"] ?? ""}`.toLowerCase();

    if (/kleding|bagage|jas|broek|tas|accessoires|outfit/.test(text)) {
      return "Uitrusting";
    }

    if (/anc|innov|technolog|smart|hel(m|men)|noise/.test(text)) {
      return "Innovatie";
    }

    if (/reis|trip|route|vakantie|rit|zwarte woud/.test(text)) {
      return "Reizen";
    }

    return null;
  };

  let filteredBlogs = blogs.filter((blog) => {
    const title = blog?.fieldData?.titel ?? "";
    const matchesSearch = title.toLowerCase().includes(search.toLowerCase());

    const categoryName = getCategoryName(blog);
    const matchesCategory =
      selectedCategory === "Alle" || categoryName === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  switch (sortOption) {
    case "az":
      filteredBlogs.sort((a, b) =>
        a.fieldData.titel.localeCompare(b.fieldData.titel),
      );
      break;

    case "za":
      filteredBlogs.sort((a, b) =>
        b.fieldData.titel.localeCompare(a.fieldData.titel),
      );
      break;
  }

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Zoek een blog..."
        value={search}
        onChangeText={setSearch}
        style={styles.searchInput}
      />

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.filterContainer}
        contentContainerStyle={{
          alignItems: "center",
        }}
      >
        {categoryOptions.map((category) => (
          <Pressable
            key={category}
            style={[
              styles.filterButton,
              selectedCategory === category && styles.activeFilter,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.filterText,
                selectedCategory === category && styles.activeFilterText,
              ]}
            >
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      <Picker
        style={{ marginTop: 10 }}
        selectedValue={sortOption}
        onValueChange={(value) => setSortOption(value)}
      >
        <Picker.Item label="Sorteer..." value="" />

        <Picker.Item label="Titel A → Z" value="az" />

        <Picker.Item label="Titel Z → A" value="za" />
      </Picker>

      <FlatList
        data={filteredBlogs}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <BlogCard
            blog={item}
            onPress={() =>
              navigation.navigate("BlogDetails", {
                blog: item,
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

  searchInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },

  filterContainer: {
    maxHeight: 50,
  },

  filterButton: {
    backgroundColor: "#e5e5e5",
    height: 40,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },

  activeFilter: {
    backgroundColor: "#efd541",
  },

  filterText: {
    color: "black",
    fontSize: 14,
    fontWeight: "500",
  },

  activeFilterText: {
    color: "white",
    fontWeight: "bold",
  },
});
