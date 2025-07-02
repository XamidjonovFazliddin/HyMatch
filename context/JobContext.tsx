import React, { createContext, useState, ReactNode, useContext } from "react";

interface Job {
  id: number;
  title: string;
  salary: string;
  japaneseLevel: number;
  location: string;
  distance: number;
  image: string;
  tags: string[];
}

interface JobContextType {
  likedJobs: Job[];
  addLikedJob: (job: Job) => void;
  removeLikedJob: (jobId: number) => void;
}

export const JobContext = createContext<JobContextType>({
  likedJobs: [],
  addLikedJob: () => {},
  removeLikedJob: () => {},
});

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  const addLikedJob = (job: Job) => {
    if (!likedJobs.some((j) => j.id === job.id)) {
      setLikedJobs([...likedJobs, job]);
    }
  };

  const removeLikedJob = (jobId: number) => {
    setLikedJobs(likedJobs.filter((job) => job.id !== jobId));
  };

  return (
    <JobContext.Provider value={{ likedJobs, addLikedJob, removeLikedJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);