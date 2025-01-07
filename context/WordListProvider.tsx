import React, { createContext, useState } from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

type wordType = {
  word: string;
  meaning: string;
};
type wordListsType = wordType[];

const initialState: wordListsType = [
  {
    word: '',
    meaning: '',
  },
];

export const WordListContext = createContext({
  wordList: initialState,
  handleAddWordToList: (word: wordType) => {},
  handleRemoveWordFromList: (word: wordType) => {},
});

type WordListProp = {
  children: React.ReactNode;
};

const WordListProvider = ({ children }: WordListProp) => {
  const [wordList, setWordList] = useState([] as wordListsType);

  const handleAddWordToList = (word: wordType) => {
    const wordExists = wordList.filter((w) => w?.word === word?.word);
    if (wordExists.length >= 1) {
      Toast.show({
        type: 'success',
        text1: `Word Exists`,
      });
    } else {
      const toUpperCase =
        word?.word.slice(0, 1).toUpperCase() + word.word.slice(1);

      const newList = [word, ...wordList];
      setWordList(newList);
      Toast.show({
        type: 'success',
        text1: `${toUpperCase} added.`,
      });
    }
  };

  const handleRemoveWordFromList = (removeWord: wordType) => {
    const newList = wordList.filter((word) => word.word !== removeWord.word);
    setWordList(newList);
  };

  const values = {
    wordList,
    handleAddWordToList,
    handleRemoveWordFromList,
  };

  return (
    <WordListContext.Provider value={values}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
