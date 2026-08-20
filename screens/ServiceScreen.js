import React from "react";
import { ScrollView, Text, View, StyleSheet } from "react-native";

export default function ServiceScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Service</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>📍 Contact</Text>

        <Text>
          EKO Motorwear{"\n"}
          Pierstraat ...{"\n"}
          Kontich{"\n\n"}
          info@ekomotorwear.be{"\n"}
          +32 ...
        </Text>
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 20,
  },

  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 10,
  },

  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
});

