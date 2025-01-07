import React, { createContext, useState } from 'react';
import Toast from 'react-native-toast-message';

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
    // check if word exists
    console.log(word, 'word');

    const wordExists = wordList.filter((w) => w?.word === word?.word);
    console.log(wordExists, 'exists');
    if (!wordExists || word.word !== '') {
      const newList = [word, ...wordList];
      setWordList(newList);
    } else {
      Toast.show({
        type: 'success',
        text1: `Word Exists`,
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
