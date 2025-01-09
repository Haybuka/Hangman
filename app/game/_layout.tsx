import { Drawer } from 'expo-router/drawer';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';

import { Feather } from '@expo/vector-icons';
import { SafeAreaView, StyleSheet } from 'react-native';
import WordListProvider from '@/context/WordListProvider';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  const navigation = useNavigation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        onPress={() => navigation.goBack()}
        icon={({ color, size }) => (
          <Feather name="home" color={color} size={size} />
        )}
        label={'Home'}
      />
      {/* <DrawerItem
        onPress={() => props.navigation.navigate('about/index')}
        icon={({ color, size }) => (
          <Feather name="list" color={color} size={size} />
        )}
        label={'Word List'}
      /> */}
    </DrawerContentScrollView>
  );
};
export default function RootLayout() {
  return (
    <WordListProvider>
      <SafeAreaView style={styles.container}>
        <Drawer drawerContent={CustomDrawerContent}>
          <Drawer.Screen
            name="(tab)"
            options={{
              drawerLabel: 'Hangman',
              title: 'Game Screen',
              headerShown: false,
            }}
          />
          {/* <Drawer.Screen
                  name="about/index"
                  options={{
                    drawerLabel: 'About',
                    title: 'About Screen',
                    headerShown: false,
                  }}
                /> */}
        </Drawer>
      </SafeAreaView>
      <Toast position="top" bottomOffset={20} />
    </WordListProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#333',
  },
});
