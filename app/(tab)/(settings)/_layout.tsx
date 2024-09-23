import React from 'react';
import { Stack } from 'expo-router';

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
      <Stack.Screen name="about" />
      {/* <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
      <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
};

export default SettingsLayout;
