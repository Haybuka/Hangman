import React, { createContext, useEffect, useState } from 'react';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { setStorageItem, getStorageItem } from '@/utils/asyncStorage';

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

  const handleAddWordToList = async (word: wordType) => {
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
      await setStorageItem('word-list', newList);

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

  const getStorageData = async (key: string) => {
    const wordStorage = await getStorageData(key);
    console.log(wordStorage, 'word storage');
  };

  useEffect(() => {
    getStorageData('word-list');
  }, []);
  return (
    <WordListContext.Provider value={values}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
