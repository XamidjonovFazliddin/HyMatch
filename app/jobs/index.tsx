import { View, Text, StyleSheet, FlatList } from "react-native";
import { useJobContext } from "../../context/JobContext";

export default function JobsScreen() {
  const { likedJobs } = useJobContext();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tanlangan Ishlar</Text>
      
      {likedJobs.length === 0 ? (
        <Text style={styles.emptyText}>Hali tanlangan ishlar yo'q</Text>
      ) : (
        <FlatList
          data={likedJobs}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.jobItem}>
              <Text style={styles.jobTitle}>{item.title}</Text>
              <Text>Maosh: {item.salary}</Text>
              <Text>Yapon tili: N{item.japaneseLevel}</Text>
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f5f5f5"
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center"
  },
  emptyText: {
    textAlign: "center",
    fontSize: 16,
    color: "gray",
    marginTop: 50
  },
  jobItem: {
    backgroundColor: "white",
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
    elevation: 2
  },
  jobTitle: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 5
  }
});