import React, { useEffect, useState } from "react";
import { View, FlatList } from "react-native";

import BlogCard from "../components/BlogCard";

export default function BlogScreen({ navigation }) {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getBlogs();
  }, []);

  const getBlogs = async () => {
    try {
      const response = await fetch(
        "https://api.webflow.com/v2/collections/6a70a789e71cc80ac8866f7b/items",
        {
          headers: {
            Authorization: "Bearer 450ac81e27737ff9e1f75408ddd86f36ebdeb5c3bcbec7817c2ca2daad3f8b93",
          },
        },
      );

      const data = await response.json();
      setBlogs(data.items);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <FlatList
        data={blogs}
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
