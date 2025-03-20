import { Stack } from 'expo-router';

export default function OtherLayout() {
  return (
    <Stack>
      <Stack.Screen name="todo" options={{headerShown: false}} />
      <Stack.Screen name="payment" options={{headerShown: false}} />
    </Stack>
  );
}
