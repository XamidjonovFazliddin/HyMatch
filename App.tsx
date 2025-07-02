import { JobProvider } from "./context/JobContext";
import { LanguageProvider } from "./context/LanguageContext";
import RootLayout from "./app/_layout";

export default function App() {
  return (
    <JobProvider>
      <LanguageProvider>
        <RootLayout />
      </LanguageProvider>
    </JobProvider>
  );
}