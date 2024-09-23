import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type LetterDisplayProp = {
  word: string;
  guessedWord: string;
};
const LetterDisplay = ({ word, guessedWord }: LetterDisplayProp) => {
  return (
    <View style={styles.wordContainer}>
      {[...word].map((letter, id) => (
        <View key={id} style={styles.words}>
          <Text style={[styles.letter]}>
            {guessedWord.includes(letter) ? letter : ''}
          </Text>
        </View>
      ))}
    </View>
  );
};

export default LetterDisplay;

const styles = StyleSheet.create({
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  words: {
    borderBottomWidth: 1,
    borderBottomColor: '#3333335b',
    width: 40,
    height: 40,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    textAlign: 'center',
  },
  letter: {
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'uppercase',
  },
});
