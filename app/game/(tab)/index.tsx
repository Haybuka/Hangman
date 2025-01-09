import { ActivityIndicator, StyleSheet, Text, View } from 'react-native';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import alphabets from '@/utils/alphabets';
import hangmanWords from '@/utils/hangmanWords';
import ActiveButton from '@/components/ActiveButton';
import DummyButton from '@/components/DummyButton';
import LetterDisplay from '@/components/LetterDisplay';

import Icon from 'react-native-vector-icons/FontAwesome';
import { useGetDefinition } from '@/api';
import GameOver from '@/components/GameOver';
import * as Haptics from 'expo-haptics';
import Button from '@/components/Button';
import { WordListContext } from '@/context/WordListProvider';
import Toast from 'react-native-toast-message';

const Home = () => {
  const guessedCount = 6;
  // context to handle update of the word list
  const { handleAddWordToList } = useContext(WordListContext);

  const [word, setWord] = useState('');
  const [guessedWord, setGuessedWord] = useState('');
  const [wrongWord, setWrongWord] = useState('');
  const [totalLetters, setTotalLetters] = useState('');
  const [wrongGuess, setWrongGuess] = useState(0);
  const [isGenerating, setIsGenerating] = useState(false);

  const { data: wordDefinition, isFetched } = useGetDefinition(word);

  const handleLetterGuessing = (letter: string) => {
    if (word.includes(letter)) {
      setGuessedWord(guessedWord + letter);
    } else {
      Haptics.notificationAsync(Haptics.NotificationFeedbackType.Success);
      setWrongGuess((prev) => prev + 1);
      setWrongWord(wrongWord + letter);
    }
    setTotalLetters(totalLetters + letter);
  };

  const handleGuessCount = (wordUsed: string) => {
    let count = '';
    for (let i = 0; i < wordUsed.length; i++) {
      if (!count.includes(wordUsed[i])) {
        count += wordUsed[i];
      }
    }
  };

  const generateWord = useCallback(() => {
    setIsGenerating(true);
    const randomNumber = Math.round(Math.random() * hangmanWords.length) + 1;
    setWord(hangmanWords[randomNumber]);
    setWrongGuess(0);
    setTotalLetters('');
    setGuessedWord('');
    setWrongWord('');
    setTimeout(() => {
      setIsGenerating(false);
    }, 2000);
  }, []);

  const handleWordCount = (wordUsed: string) => {
    let wordCounter = '';
    for (let index = 0; index < wordUsed.length; index++) {
      if (wordCounter.includes(wordUsed[index])) {
        continue;
      } else {
        wordCounter += wordUsed[index];
      }
    }
    return wordCounter.length;
  };

  const handleAddToWordlist = (word: string, meaning: string) => {
    const dictionaryWord = { word, meaning };

    if (word !== '') {
      handleAddWordToList(dictionaryWord);
    } else {
      Toast.show({
        type: 'error',
        text1: `Entry not valid.`,
      });
    }
  };

  let isOver = handleWordCount(guessedWord) === handleWordCount(word);

  useEffect(() => {
    handleGuessCount(word);
  }, [word]);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Hang Man {word}</Text>
      <View style={[styles.subheading, styles.textContainer]}>
        {wrongGuess === guessedCount && <GameOver word={word} />}

        {handleWordCount(guessedWord) === handleWordCount(word) && (
          <Text style={[styles.winner]}> Winner</Text>
        )}

        <View style={styles.iconContainer}>
          {wrongGuess !== guessedCount && (
            <>
              <Icon name={'heart'} size={20} color="red" />
              <Text style={styles.liveCount}>
                {wrongGuess} / {guessedCount}
              </Text>
            </>
          )}
        </View>
      </View>
      <LetterDisplay word={word} guessedWord={guessedWord} />
      {!isOver && (
        <View>
          {isFetched ? (
            <Text style={styles.subheading}>
              Hints : {wordDefinition ? wordDefinition : 'OOps, no hint found'}
            </Text>
          ) : (
            <ActivityIndicator size="large" color="#29427A" />
          )}
        </View>
      )}
      {handleWordCount(guessedWord) !== handleWordCount(word) && (
        <View>
          {word && (
            <View style={styles.alphabetContainer}>
              {alphabets.map(({ letter }, id) =>
                !totalLetters.includes(letter) &&
                wrongGuess !== guessedCount ? (
                  <ActiveButton
                    key={id}
                    handleLetterGuessing={handleLetterGuessing}
                    wrongWord={wrongWord}
                    guessedWord={guessedWord}
                    letter={letter}
                  />
                ) : (
                  <DummyButton
                    key={id}
                    wrongWord={wrongWord}
                    guessedWord={guessedWord}
                    letter={letter}
                  />
                )
              )}
            </View>
          )}
        </View>
      )}
      <View>
        {!isGenerating ? (
          <Button text="New Word" handlePress={generateWord} />
        ) : (
          <ActivityIndicator size="large" color="#29427A" />
        )}
      </View>
      {isOver && (
        <Button
          text="Add to Word List"
          handlePress={() =>
            handleAddToWordlist(word, wordDefinition ? wordDefinition : '')
          }
        />
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
  },
  subheading: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    fontFamily: 'SpaceMono',
  },
  winner: {
    color: 'green',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  liveCount: {
    fontFamily: 'Poppins',
  },
  textContainer: { alignItems: 'center', gap: 10 },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
  },
  words: {
    borderBottomWidth: 1,
    borderBottomColor: '#333',
    width: 45,
    height: 45,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 10,
    textAlign: 'center',
  },
  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 50,
    justifyContent: 'center',
  },
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
  btn: {
    elevation: 4,
    backgroundColor: '#fff',
    padding: 10,
  },
});
