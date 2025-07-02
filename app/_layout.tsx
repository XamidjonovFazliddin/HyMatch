import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function RootLayout() {
  const colorScheme = useColorScheme();

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: colorScheme === "dark" ? Colors.darker : Colors.lighter,
        },
      }}
    >
      <Stack.Screen name="index" options={{ title: "HyMatch" }} />
      <Stack.Screen name="swipe/index" options={{ title: "Ishlar" }} />
      <Stack.Screen name="jobs/index" options={{ title: "Tanlanganlar" }} />
      <Stack.Screen name="profile/index" options={{ title: "Profil" }} />
    </Stack>
  );
}