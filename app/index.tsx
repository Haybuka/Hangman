import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <Screen>
      <Text>Hangman - Home</Text>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: 10,
  },
  wordContainer: {
    marginVertical: 4,
    borderColor: '#000',
    paddingVertical: 10,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewButton: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 6,
    paddingHorizontal: 20,
  },
  viewText: {
    textAlign: 'center',
    color: '#000',
  },
  word: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 6,
  },
});
