import React from 'react';
import { SafeAreaView, StyleSheet, View } from 'react-native';
import Constants from 'expo-constants';
import { colors } from '@/styles/globalStyles';

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
        backgroundColor: bg ? bg : colors.white,
      }}
    >
      <View style={styles.container}>{children}</View>
    </SafeAreaView>
  );
}

export default Screen;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});
