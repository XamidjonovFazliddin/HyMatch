import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen name="index" options={{ title: "HyMatch" }} />
      <Stack.Screen name="swipe/index" options={{ title: "仕事一覧" }} />
      <Stack.Screen name="jobs/index" options={{ title: "保存済み" }} />
      <Stack.Screen name="profile/index" options={{ title: "プロフィール" }} />
    </Stack>
  );
}