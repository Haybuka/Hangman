import React from 'react';
import { Stack } from 'expo-router';

const TabLayout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="(settings)" />
    </Stack>
  );
};

export default TabLayout;
