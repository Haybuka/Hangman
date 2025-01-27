import {
  ActivityIndicator,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useCallback, useEffect, useState, useContext } from 'react';
import alphabets from '@/utils/alphabets';
import hangmanWords from '@/utils/hangmanWords';
import ActiveButton from '@/components/ActiveButton';
import DummyButton from '@/components/DummyButton';
import LetterDisplay from '@/components/LetterDisplay';

import { useGetDefinition } from '@/api';
import GameOver from '@/components/GameOver';
import * as Haptics from 'expo-haptics';
import Button from '@/components/Button';
import { WordListContext } from '@/context/WordListProvider';
import Toast from 'react-native-toast-message';
import HomeIcon from '@/components/HomeButton';
import { hangmanStyles } from '@/styles/hangman';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import Constants from 'expo-constants';
import { colors } from '@/styles/globalStyles';

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

  const handleHintSelect = () => {
    let wordLeft = '';

    for (let index = 0; index < word.length; index++) {
      const element = word[index];
      if (guessedWord.includes(element)) {
        continue;
      } else {
        wordLeft += element;
      }
    }

    // handleLetterGuessing

    console.log('guessed word ', guessedWord);
  };

  return (
    <SafeAreaView
      style={{
        paddingTop: Constants.statusBarHeight,
        flex: 1,
      }}
    >
      <View style={hangmanStyles.container}>
        <View style={hangmanStyles.headingContainer}>
          <View style={hangmanStyles.iconContainer}>
            {wrongGuess !== guessedCount && (
              <>
                <Feather name="heart" color={'#AE0A25'} size={30} />
                <Text style={hangmanStyles.liveCount}>{wrongGuess}</Text>
              </>
            )}
          </View>
          <Text style={hangmanStyles.heading}> {word}</Text>
          <TouchableOpacity onPress={handleHintSelect}>
            <FontAwesome5 name="lightbulb" size={25} color={colors.orange} />Í
          </TouchableOpacity>
        </View>
        <View
          style={[
            hangmanStyles.hangman,
            { height: wrongGuess === guessedCount ? 100 : 200 },
          ]}
        ></View>
        <View style={[hangmanStyles.subheading, hangmanStyles.textContainer]}>
          {wrongGuess === guessedCount && <GameOver word={word} />}

          {handleWordCount(guessedWord) === handleWordCount(word) && (
            <Feather name="check" color={colors.green} size={30} />
          )}
        </View>
        <LetterDisplay word={word} guessedWord={guessedWord} />
        <View style={hangmanStyles.hintParent}>
          {!isOver && (
            <View>
              {isFetched ? (
                <View>
                  <View style={hangmanStyles.hintContainer}>
                    <Text style={hangmanStyles.subheading}>
                      {wordDefinition ? wordDefinition : 'OOps, no hint found'}
                    </Text>
                  </View>
                </View>
              ) : (
                <ActivityIndicator size="large" color="#29427A" />
              )}
            </View>
          )}
        </View>
        <View>
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
        </View>
        <View style={hangmanStyles.btnGroup}>
          <HomeIcon />
          {!isGenerating ? (
            <Button text="New Word" handlePress={generateWord} />
          ) : (
            <ActivityIndicator size="large" color="#29427A" />
          )}
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
