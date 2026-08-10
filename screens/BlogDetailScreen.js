import { ScrollView, Text, Image, StyleSheet } from "react-native";

export default function BlogDetailScreen({ route }) {
  const { blog } = route.params;

  return (
    <ScrollView style={styles.container}>
      {blog.fieldData["main-image"] && (
        <Image
          source={{
            uri: blog.fieldData["main-image"]?.url,
          }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>{blog.fieldData.titel}</Text>

      <Text style={styles.content}>{blog.fieldData["tekst-1"]}</Text>
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
  },

  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginVertical: 15,
  },

  content: {
    fontSize: 16,
    lineHeight: 24,
  },
});
