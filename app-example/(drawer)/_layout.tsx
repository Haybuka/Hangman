import { Drawer } from 'expo-router/drawer';
import { Text, View } from 'react-native';
import {
  DrawerContentComponentProps,
  DrawerContentScrollView,
  DrawerItem,
} from '@react-navigation/drawer';
import { Feather } from '@expo/vector-icons';
import { router } from 'expo-router';

const CustomDrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem
        onPress={() => router.push('/(tabs)/explore')}
        icon={({ color, size }) => (
          <Feather name="list" color={color} size={size} />
        )}
        label={'Feed'}
      />
      <DrawerItem
        onPress={() => router.push('/settings')}
        icon={({ color, size }) => (
          <Feather name="list" color={color} size={size} />
        )}
        label={'Feed Again'}
      />
    </DrawerContentScrollView>
  );
};
export default function RootLayout() {
  return (
    <Drawer drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen
        name="Home Tab" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Home',
          title: 'Home ?',
        }}
      />
      <Drawer.Screen
        name="(tabs)/explore" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: 'Explore',
          title: 'Explore',
        }}
      />
    </Drawer>
  );
}
