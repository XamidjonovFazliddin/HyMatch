import React, { useState, useRef } from "react";
import { View, Text, StyleSheet, PanResponder, Animated, TouchableOpacity } from "react-native";
import { useJobContext } from '../../context/JobContext';
import JobCard from "../../components/JobCard";
import FilterModal from "../../components/FilterModal";
import { jobsData } from "../../constants/data";

export default function SwipeScreen() {
  const { addLikedJob } = useJobContext();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showFilters, setShowFilters] = useState(false);
  const [filteredJobs, setFilteredJobs] = useState(jobsData);
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }], {
      useNativeDriver: false,
    }),
    onPanResponderRelease: (_, gesture) => {
      if (gesture.dx > 120) {
        addLikedJob(filteredJobs[currentIndex]);
        goToNextJob();
      } else if (gesture.dx < -120) {
        goToNextJob();
      } else {
        Animated.spring(pan, {
          toValue: { x: 0, y: 0 },
          useNativeDriver: false,
        }).start();
      }
    },
  });

  const goToNextJob = () => {
    Animated.spring(pan, {
      toValue: { x: 0, y: 0 },
      useNativeDriver: false,
    }).start(() => {
      setCurrentIndex(currentIndex + 1);
    });
  };

  if (currentIndex >= filteredJobs.length) {
    return (
      <View style={styles.container}>
        <Text style={styles.noMoreJobs}>すべての仕事をチェックしました</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <FilterModal
        visible={showFilters}
        onClose={() => setShowFilters(false)}
        onApply={(filters) => {
          const filtered = jobsData.filter((job) => {
            const minSalaryValue = parseInt(job.salary.split('-')[0]);
    
            return (
                (!filters.minSalary || minSalaryValue >= filters.minSalary) &&
                (!filters.maxDistance || job.distance <= filters.maxDistance) &&
                (!filters.jlptLevel || job.japaneseLevel <= filters.jlptLevel)
            );
          });
          setFilteredJobs(filtered);
          setCurrentIndex(0);
          setShowFilters(false);
        }}
      />

      <Animated.View
        {...panResponder.panHandlers}
        style={[
          pan.getLayout(),
          {
            zIndex: 1,
            position: "absolute",
            top: 50,
          },
        ]}
      >
        <JobCard job={filteredJobs[currentIndex]} />
      </Animated.View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, styles.dislikeButton]}
          onPress={() => goToNextJob()}
        >
          <Text style={styles.buttonText}>✖️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.likeButton]}
          onPress={() => {
            addLikedJob(filteredJobs[currentIndex]);
            goToNextJob();
          }}
        >
          <Text style={styles.buttonText}>❤️</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.filterButton]}
          onPress={() => setShowFilters(true)}
        >
          <Text style={styles.buttonText}>🔍</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  noMoreJobs: {
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: "100%",
    position: "absolute",
    bottom: 50,
  },
  button: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
  likeButton: {
    backgroundColor: "#4CAF50",
  },
  dislikeButton: {
    backgroundColor: "#F44336",
  },
  filterButton: {
    backgroundColor: "#2196F3",
  },
  buttonText: {
    fontSize: 24,
  },
});

