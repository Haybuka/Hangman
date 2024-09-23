import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

type GameOverProp = {
  word: string;
};

export default function GameOver({ word }: GameOverProp) {
  return (
    <View>
      <Text style={[styles.error]}> Game Over</Text>
      <Text style={[styles.correctLetter]}> {word}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  error: {
    color: 'red',
    // fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
  },
  correctLetter: {
    // color: 'green',
    fontSize: 22,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
  },
});
