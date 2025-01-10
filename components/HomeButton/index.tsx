import React from 'react';
import { Platform, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { Feather } from '@expo/vector-icons';

const HomeIcon = () => {
  return (
    <TouchableOpacity style={styles.homeIcon}>
      <Link href={'/'}>
        <Feather name="home" color={'black'} size={20} />
      </Link>
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
    backgroundColor: 'white',

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
