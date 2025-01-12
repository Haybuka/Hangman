import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Link, useRouter } from 'expo-router';
import { Feather } from '@expo/vector-icons';
import { colors } from '@/styles/globalStyles';

const HomeIcon = () => {
  const router = useRouter();
  return (
    <TouchableOpacity
      style={styles.homeIcon}
      onPress={() => router.navigate('/')}
    >
      <View>
        <Feather name="home" color={'black'} size={20} />
      </View>
    </TouchableOpacity>
  );
};

export default HomeIcon;

const styles = StyleSheet.create({
  homeIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,

    borderRadius: 20,
    backgroundColor: colors.white,

    ...Platform.select({
      ios: {
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 0.5,
        shadowColor: '#33333361',
        shadowRadius: 1,
      },
      android: {
        elevation: 4,
      },
      default: {
        height: 500,
      },
    }),
  },
});
