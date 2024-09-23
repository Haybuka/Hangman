import { View, Text, Pressable, TouchableOpacity } from 'react-native';
import React from 'react';

const DrawerTabbing = (props: any) => {
  return (
    <View>
      <Text>Home Drawer Tabbing</Text>
      <TouchableOpacity onPress={() => console.log(props)}>
        <Text>Toggle Drawer</Text>
      </TouchableOpacity>
    </View>
  );
};

export default DrawerTabbing;
