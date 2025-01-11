import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeIcon from '../HomeButton';

const HeaderLayout = ({ title }) => {
  return (
    <View style={styles.headerContainer}>
      <HomeIcon />
      <View style={styles.header}>
        <Text style={styles.headerText}>Word List</Text>
      </View>
    </View>
  );
};

export default HeaderLayout;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 400,
    letterSpacing: 3,
    color: '#333',
    fontFamily: 'Poppins',
  },
});
