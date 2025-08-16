import { View, Text, StyleSheet, FlatList } from "react-native";

export default function JobsScreen() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>保存済みの仕事</Text>
      <Text style={styles.emptyText}>保存された仕事がありません</Text>
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
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 50,
  },
});