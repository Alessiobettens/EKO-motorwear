import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function BlogCard({ blog, onPress }) {
  console.log(blog.fieldData);

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {blog.fieldData["main-image"] && (
        <Image
          source={{
            uri: blog.fieldData["main-image"]?.url,
          }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>{blog.fieldData.titel}</Text>
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
    width: "100%",
    height: 200,
    borderRadius: 10,
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 10,
  },
});
