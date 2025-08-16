import { View, Text, Image, StyleSheet } from "react-native";



export default function JobCard({ job }: any) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: job.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{job.title}</Text>
        <Text>給与: {job.salary} ¥{job.salary} ¥</Text>
        <Text>日本語レベル: N{job.japaneseLevel}</Text>
        <Text>場所: {job.location} ({job.distance} km)</Text>
        <View style={styles.tags}>
          {job.tags.map((tag: string, index: number) => (
            <Text key={index} style={styles.tag}>{tag}</Text>
          ))}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
    width: 300,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 150,
    backgroundColor: "#eee",
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
    marginTop: 10,
  },
  tag: {
    backgroundColor: "#e0e0e0",
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
    fontSize: 12,
  },
});

