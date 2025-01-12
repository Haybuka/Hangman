import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors, font } from '@/styles/globalStyles';

type DummyButtonProp = {
  letter: string;
  guessedWord: string;
  wrongWord: string;
};
const DummyButton = ({ letter, guessedWord, wrongWord }: DummyButtonProp) => {
  return (
    <View
      style={[
        styles.alphabet,
        `${guessedWord + wrongWord}`.includes(letter) && styles.guessedLetter,
      ]}
    >
      <Text
        style={[
          styles.letter,
          guessedWord.includes(letter) && styles.correctLetter,
          wrongWord.includes(letter) && styles.wrongLetter,
        ]}
      >
        {letter}
      </Text>
    </View>
  );
};

export default DummyButton;

const styles = StyleSheet.create({
  alphabet: {
    backgroundColor: colors.white,
    elevation: 4,
    padding: 4,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 4,
    borderRadius: 6,
  },
  guessedLetter: {
    backgroundColor: colors.ash,
  },
  correctLetter: {
    color: colors.green,
  },
  wrongLetter: {
    color: colors.red,
  },
  letter: {
    fontSize: 20,
    fontWeight: 600,
    textTransform: 'uppercase',
    fontFamily: font.default,
  },
});
