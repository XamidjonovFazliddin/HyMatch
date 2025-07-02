import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import BottomNav from "../components/BottomNav";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>HyMatch - Ish Qidiruv Ilovasi</Text>
      <Link href="/swipe" style={styles.button}>
        Ish Qidirishni Boshlash
      </Link>
      <BottomNav />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  button: {
    padding: 15,
    backgroundColor: "#4CAF50",
    color: "white",
    borderRadius: 8,
    fontSize: 16,
  },
});
