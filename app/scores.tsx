import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import HomeIcon from '@/components/HomeButton';
import Screen from '@/components/RootScreen';

const Scores = () => {
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.nav}>
          <Text style={styles.navItem}>Scores</Text>
          <HomeIcon />
        </View>
      </View>
    </View>
  );
};

export default Scores;

const styles = StyleSheet.create({
  nav: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  navItem: {
    flex: 1,
    fontSize: 16,
    textAlign: 'center',
    color: '#333',
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
  },
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
  },
});
