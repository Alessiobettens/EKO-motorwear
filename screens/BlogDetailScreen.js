import React from "react";
import { ScrollView, Text, Image, StyleSheet } from "react-native";

export default function BlogDetailScreen({ route }) {
  const { blog } = route.params;

  return (
    <ScrollView style={styles.container}>
      {blog.fieldData["main-image"] && (
        <Image
          source={{
            uri: blog.fieldData["main-image"].url,
          }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>{blog.fieldData.titel}</Text>

      <Text style={styles.content}>
        {blog.fieldData["tekst-1"]?.replace(/<[^>]*>/g, "")}
      </Text>

      {blog.fieldData["image22-2"] && (
        <Image
          source={{
            uri: blog.fieldData["image22-2"].url,
          }}
          style={styles.image}
        />
      )}

      <Text style={styles.content}>
        {blog.fieldData["tekst-2-2"]?.replace(/<[^>]*>/g, "")}
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
    height: 250,
    borderRadius: 10,
    marginBottom: 15,
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 15,
  },

  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});
