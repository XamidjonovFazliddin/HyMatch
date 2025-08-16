import React, { createContext, useState, ReactNode, useContext } from "react";

interface Job {
  id: number;
  title: string;
  salary: string;
  japaneseLevel: number;
}

interface JobContextType {
  likedJobs: Job[];
  addLikedJob: (job: Job) => void;
}

export const JobContext = createContext<JobContextType>({
  likedJobs: [],
  addLikedJob: () => {},
});

export const JobProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [likedJobs, setLikedJobs] = useState<Job[]>([]);

  const addLikedJob = (job: Job) => {
    if (!likedJobs.some((j) => j.id === job.id)) {
      setLikedJobs([...likedJobs, job]);
    }
  };

  return (
    <JobContext.Provider value={{ likedJobs, addLikedJob }}>
      {children}
    </JobContext.Provider>
  );
};

export const useJobContext = () => useContext(JobContext);