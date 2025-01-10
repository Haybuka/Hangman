import { ActivityIndicator, Text, View } from 'react-native';
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
import HomeIcon from '@/components/HomeButton';
import { hangmanStyles } from '@/styles/hangman';

const Home = () => {
  const guessedCount = 6;
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

  useEffect(() => {
    generateWord();
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
    <View style={hangmanStyles.container}>
      <Text style={hangmanStyles.heading}>Hang Man {word}</Text>
      <View style={[hangmanStyles.subheading, hangmanStyles.textContainer]}>
        {wrongGuess === guessedCount && <GameOver word={word} />}

        {handleWordCount(guessedWord) === handleWordCount(word) && (
          <Text style={[hangmanStyles.winner]}> Winner</Text>
        )}

        <View style={hangmanStyles.iconContainer}>
          {wrongGuess !== guessedCount && (
            <>
              <Icon name={'heart'} size={20} color="red" />
              <Text style={hangmanStyles.liveCount}>
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
            <Text style={hangmanStyles.subheading}>
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
            <View style={hangmanStyles.alphabetContainer}>
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
      {isOver && (
        <Button
          text="Add to Word List"
          handlePress={() =>
            handleAddToWordlist(word, wordDefinition ? wordDefinition : '')
          }
        />
      )}
      <View style={hangmanStyles.btnGroup}>
        <HomeIcon />
        {!isGenerating ? (
          <Button text="New Word" handlePress={generateWord} />
        ) : (
          <ActivityIndicator size="large" color="#29427A" />
        )}
      </View>
    </View>
  );
};

export default Home;
