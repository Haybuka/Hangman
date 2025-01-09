import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';

const HomeScreen = () => {
  return (
    <Screen>
      <View style={styles.heading}>
        <Text style={styles.title}>Hangman</Text>
        <Text style={styles.subtitle}>Word Puzzle Game</Text>
      </View>
      <View style={styles.imgBox}></View>
      <View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Start Game</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>How To Play</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>High Scores</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  heading: {
    marginVertical: 4,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 3,
    textAlign: 'center',
    marginVertical: 6,
  },
  subtitle: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontWeight: 600,
    letterSpacing: 3,
    textAlign: 'center',
  },
  imgBox: {},
  button: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    elevation: 4,
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 5,
  },
  word: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 6,
  },
});
