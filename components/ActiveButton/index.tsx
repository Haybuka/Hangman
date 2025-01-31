import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import { colors, font } from '@/styles/globalStyles';

type ActiveButtonProp = {
  letter: string;
  guessedWord: string;
  wrongWord: string;
  handleLetterGuessing: (letter: string) => void;
};

const ActiveButton = ({
  letter,
  guessedWord,
  wrongWord,
  handleLetterGuessing,
}: ActiveButtonProp) => {
  return (
    <TouchableOpacity
      style={[
        styles.alphabet,
        `${guessedWord + wrongWord}`.includes(letter) && styles.guessedLetter,
      ]}
      onPress={() => {
        handleLetterGuessing(letter);
      }}
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
    </TouchableOpacity>
  );
};

export default ActiveButton;

const styles = StyleSheet.create({
  alphabet: {
    backgroundColor: colors.white,
    elevation: 3,
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
    fontWeight: 500,
    textTransform: 'uppercase',
    fontFamily: font.default,
  },
});
