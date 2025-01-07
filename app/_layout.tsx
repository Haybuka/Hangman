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
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import WordListProvider from '@/context/WordListProvider';
import Toast from 'react-native-toast-message';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      {/* <DrawerItemList {...props} /> */}
      <DrawerItem
        onPress={() => props.navigation.navigate('(tab)')}
        icon={({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        )}
        label={'Home'}
      />
      <DrawerItem
        onPress={() => props.navigation.navigate('about/index')}
        icon={({ color, size }) => (
          <Feather name="list" color={color} size={size} />
        )}
        label={'Word List'}
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

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider
        value={colorScheme === 'dark' ? DefaultTheme : DefaultTheme}
      >
        {/* <StatusBar backgroundColor={'#000'} /> */}
        <WordListProvider>
          <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaView style={styles.container}>
              <Drawer drawerContent={CustomDrawerContent}>
                <Drawer.Screen
                  name="(tab)"
                  options={{
                    drawerLabel: 'Home',
                    title: 'Home Screen',
                    headerShown: false,
                  }}
                />
                <Drawer.Screen
                  name="about/index"
                  options={{
                    drawerLabel: 'About',
                    title: 'About Screen',
                    headerShown: false,
                  }}
                />
              </Drawer>
            </SafeAreaView>
          </GestureHandlerRootView>
          <Toast position="top" bottomOffset={20} />
        </WordListProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
