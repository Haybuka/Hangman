import { Drawer } from 'expo-router/drawer';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        onPress={() => {}}
        icon={({ color, size }) => (
          <Feather name="list" color={color} size={size} />
        )}
        label={'Data Services'}
      />
    </DrawerContentScrollView>
  );
};
export default function RootLayout() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
    Poppins: require('../assets/fonts/Poppins-Regular.ttf'),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Drawer drawerContent={CustomDrawerContent}>
          <Drawer.Screen
            name="(tab)"
            options={{
              drawerLabel: 'Home',
              title: 'Home Screen',
              headerShown: true,
            }}
          />
          <Drawer.Screen
            name="about"
            options={{
              drawerLabel: 'About',
              title: 'About Screen',
              headerShown: false,
            }}
          />
        </Drawer>
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
