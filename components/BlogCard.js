import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

export default function BlogCard({ blog, onPress }) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      {blog.fieldData.afbeelding && (
        <Image
          source={{
            uri: blog.fieldData.afbeelding.url,
          }}
          style={styles.image}
        />
      )}

      <Text style={styles.title}>{blog.fieldData.name}</Text>
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
