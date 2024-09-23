import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Constants from 'expo-constants';
// import ArrowBack from '../assets/icon/ArrowBack';

import Ionicons from '@expo/vector-icons/Ionicons';

type ScreenProp = {
  children: React.ReactNode;
  bg?: string;
  canGoBack?: boolean;
  handleBackPress?: () => void;
};
function Screen({
  children,
  bg,
  canGoBack = false,
  handleBackPress,
}: ScreenProp) {
  return (
    <SafeAreaView
      style={{
        paddingTop: Constants.statusBarHeight,
        flex: 1,
        backgroundColor: bg ? bg : '#FFFFFF',
      }}
    >
      <View style={styles.container}>
        {/* {
          canGoBack && (
            <TouchableOpacity className="flex-row items-center py-3" onPress={handleBackPress}>

              <View >
                <ArrowBack />
              </View>
              <Text className="mx-3 font-semibold  flex-1 py-2">Back</Text>
              <Ionicons name="search" size={25} color="green" />
            </TouchableOpacity>
          )
        } */}
        {children}
      </View>
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    paddingHorizontal: 20,
    paddingTop: 16,
  },
});
