import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>EKO-MOTORWEAR</Text>

      <Text style={styles.subtitle}>Premium motorkleding en accessoires</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#111",
  },

  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "#ff6600",
  },

  subtitle: {
    fontSize: 16,
    color: "white",
    marginTop: 10,
  },
});
