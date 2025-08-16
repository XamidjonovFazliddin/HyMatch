import { View, Text, StyleSheet, TextInput, Button } from "react-native";

export default function ProfileScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>プロフィール</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
  },
});