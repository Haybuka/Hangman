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
    try {
      const wordExists = wordList?.filter((w) => w?.word === word?.word);
      if (wordExists?.length >= 1) {
        Toast.show({
          type: 'success',
          text1: `Word Exists`,
        });
      } else {
        const toUpperCase =
          word?.word?.slice(0, 1).toUpperCase() + word?.word?.slice(1);

        const newList = [word, ...wordList];

        await setStorageItem('@Word_list', JSON.stringify(newList));

        setWordList(newList);
        Toast.show({
          type: 'success',
          text1: `${toUpperCase} added.`,
        });
      }
    } catch (error) {}
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
    try {
      const wordStorage = (await AsyncStorage.getItem(key)) as string;

      if (wordStorage !== null) {
        return JSON.parse(wordStorage);
      } else {
        return { title: undefined, items: undefined };
      }
    } catch (error) {}
  };

  useEffect(() => {
    const list = getStorageData('@Word_list');
    console.log(list, 'word');
  }, [wordList]);
  // useEffect(() => {
  //   const wordStorage = getStorageData(
  //     '@Word_list'
  //   ) as unknown as wordListsType;
  //   setWordList(wordStorage);
  //   console.log(wordStorage, 'word storage');
  // }, []);
  return (
    <WordListContext.Provider value={values}>
      {children}
    </WordListContext.Provider>
  );
};

export default WordListProvider;
