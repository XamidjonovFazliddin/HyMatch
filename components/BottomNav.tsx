import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";

const BottomNav = () => {
  return (
    <View style={styles.container}>
      <Link href="/swipe" asChild>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="home" size={24} color="black" />
          <Text style={styles.text}>Ishlar</Text>
        </TouchableOpacity>
      </Link>
      <Link href="./jobs" asChild>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="list" size={24} color="black" />
          <Text style={styles.text}>Tanlanganlar</Text>
        </TouchableOpacity>
      </Link>
      <Link href="./profile" asChild>
        <TouchableOpacity style={styles.button}>
          <FontAwesome name="user" size={24} color="black" />
          <Text style={styles.text}>Profil</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    padding: 15,
    backgroundColor: "#f8f8f8",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  button: {
    alignItems: "center",
  },
  text: {
    fontSize: 12,
    marginTop: 5,
  },
});

export default BottomNav;