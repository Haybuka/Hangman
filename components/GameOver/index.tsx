import { View, Text, StyleSheet } from 'react-native';
import React from 'react';
import { colors, font } from '@/styles/globalStyles';

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
    color: colors.red,
    textAlign: 'center',
    fontWeight: '600',
    fontFamily: font.fallback,
  },
  correctLetter: {
    fontSize: 22,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontWeight: '500',
    fontFamily: font.default,
  },
});
