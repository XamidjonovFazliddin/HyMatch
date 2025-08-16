import { JobProvider } from "./context/JobContext";
import RootLayout from "./app/_layout";

export default function App() {
  return (
    <JobProvider>
        <RootLayout />
    </JobProvider>
  );
}