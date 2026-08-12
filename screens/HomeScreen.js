import React from "react";
import { View, Text, StyleSheet, ImageBackground } from "react-native";

export default function HomeScreen() {
  return (
    <ImageBackground source={require("../assets/moto.jpg")} style={styles.hero}>
      <Text style={styles.title}>EKO MOTORWEAR</Text>

      <Text style={styles.subtitle}>Motoruitrusting voor elke rit</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  hero: {
    width: "100%",
    height: 300,
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
});
