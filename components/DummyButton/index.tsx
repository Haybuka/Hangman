import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

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
    backgroundColor: '#fff',
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
    backgroundColor: '#333',
  },
  correctLetter: {
    color: 'green',
  },
  wrongLetter: {
    color: 'red',
  },
  letter: {
    fontSize: 20,
    fontWeight: '700',
    textTransform: 'uppercase',
  },
});
