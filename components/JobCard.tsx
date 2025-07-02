import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { Job } from "../types/types";

interface JobCardProps {
  job: Job;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: job.image }} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.title}>{job.title}</Text>
        <Text style={styles.salary}>Maosh: {job.salary} ¥</Text>
        <Text style={styles.level}>Yapon tili: N{job.japaneseLevel}</Text>
        <Text style={styles.location}>
          Manzil: {job.location} ({job.distance} km)
        </Text>
        <View style={styles.tags}>
          {job.tags.map((tag, index) => (
            <Text key={index} style={styles.tag}>
              {tag}
            </Text>
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
    margin: 10,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 200,
  },
  content: {
    padding: 15,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
  salary: {
    fontSize: 16,
    color: "green",
    marginBottom: 5,
  },
  level: {
    fontSize: 14,
    marginBottom: 5,
  },
  location: {
    fontSize: 14,
    color: "gray",
    marginBottom: 10,
  },
  tags: {
    flexDirection: "row",
    flexWrap: "wrap",
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

export default JobCard;