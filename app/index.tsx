import React from 'react';
import { StyleSheet, Text, View, Platform } from 'react-native';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';

const HomeScreen = (props: any) => {
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
            <Link href="/hangman" style={[styles.buttonText, styles.boldText]}>
              Start Game
            </Link>
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
    fontWeight: 400,
    letterSpacing: 3,
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 3,
    textAlign: 'center',
    fontFamily: 'Poppins',
  },
  imgBox: {
    marginVertical: 10,
    ...Platform.select({
      ios: {
        height: 500,
      },
      android: {
        height: 400,
      },
      default: {
        height: 500,
      },
    }),
  },
  button: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Poppins',
  },
  boldText: {
    fontWeight: 500,
    fontSize: 16,
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
