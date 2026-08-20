import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
  Image,
  Pressable,
} from "react-native";

const categories = [
  {
    name: "Motorhelmen",
    image: require("../assets/helm.jpg"),
  },
  {
    name: "Kledij",
    image: require("../assets/kledij.jpg"),
  },
  {
    name: "Handschoenen",
    image: require("../assets/handschoenen.jpg"),
  },
  {
    name: "Laarzen",
    image: require("../assets/laarzen.jpg"),
  },
];

export default function HomeScreen({ navigation }) {
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

  return (
    <ScrollView>
      <ImageBackground
        source={require("../assets/moto.jpg")}
        style={styles.hero}
      >
        <Text style={styles.title}>EKO MOTORWEAR</Text>

        <Text style={styles.subtitle}>Motoruitrusting voor elke rit</Text>
      </ImageBackground>

      <Text style={styles.sectionTitle}>Populaire categorieën</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {categories.map((category) => (
          <Pressable
            key={category.name}
            style={styles.categoryCard}
            onPress={() => navigation.navigate("Winkel")}
          >
            <Image source={category.image} style={styles.categoryImage} />

            <View style={styles.overlay}>
              <Text style={styles.categoryTitle}>{category.name}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>

      <View style={styles.infoSection}>
        <Text style={styles.infoTitle}>
          De grootste motorkledingwinkel van België
        </Text>

        <Text style={styles.infoSubtitle}>
          Motorkleding winkel EKO Motorwear: uw speciaalzaak in motorkleding
        </Text>

        <Text style={styles.infoText}>
          Met meer dan 30 jaar ervaring en een winkeloppervlakte van 3000 m² is
          EKO Motorwear uitgegroeid tot één van de grootste motorkledingwinkels
          van België. In onze winkel en webshop vindt u een uitgebreid
          assortiment motorkleding en accessoires voor zowel beginnende als
          ervaren motorrijders.
        </Text>

        <Text style={styles.hoursTitle}>Openingsuren</Text>

        <Text style={styles.hoursText}>
          Maandag t.e.m. vrijdag: 09:00 - 18:00
        </Text>

        <Text style={styles.hoursText}>Zaterdag: 10:00 - 18:00</Text>

        <Text style={styles.hoursText}>Zondag: Gesloten</Text>
      </View>

      <Text style={styles.sectionTitle}>Laatste blogs</Text>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.categoriesContainer}
      >
        {blogs.slice(0, 3).map((blog) => (
          <Pressable
            key={blog.id}
            style={styles.blogCard}
            onPress={() => navigation.navigate("Blog")}
          >
            <Image
              source={{
                uri: blog.fieldData["main-image"]?.url,
              }}
              style={styles.blogImage}
            />

            <View style={styles.overlay}>
              <Text style={styles.blogTitle}>{blog.fieldData.titel}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 230,
    justifyContent: "center",
    alignItems: "center",
  },

  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "white",
    marginTop: 20,
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

  categoriesContainer: {
    paddingHorizontal: 10,
  },

  categoryCard: {
    width: 180,
    height: 120,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
  },

  categoryImage: {
    width: "100%",
    height: "100%",
  },

  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.35)",
    justifyContent: "center",
    alignItems: "center",
  },

  categoryTitle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },

  infoSection: {
    backgroundColor: "#3a3737",
    marginTop: 25,
    marginRight: 10,
    marginLeft: 10,
    padding: 20,
    borderRadius: 10,
  },

  infoTitle: {
    fontSize: 28,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    marginBottom: 15,
  },

  infoSubtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#efd541",
    textAlign: "center",
    marginBottom: 20,
  },

  infoText: {
    color: "white",
    lineHeight: 24,
    textAlign: "center",
    marginBottom: 20,
  },

  hoursTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#efd541",
    textAlign: "center",
    marginBottom: 15,
  },

  hoursText: {
    color: "white",
    textAlign: "center",
    fontSize: 16,
  },

  ///* Blog styles*///
  blogCard: {
    width: 250,
    height: 140,
    marginRight: 15,
    borderRadius: 10,
    overflow: "hidden",
  },

  blogImage: {
    width: "100%",
    height: "100%",
  },

  blogTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    paddingHorizontal: 10,
  },
});
