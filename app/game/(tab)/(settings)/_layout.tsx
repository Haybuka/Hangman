import React from 'react';
import { Stack } from 'expo-router';

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="about" />
      {/*
      <Stack.Screen name="+not-found" /> */}
    </Stack>
  );
};

export default SettingsLayout;
