import React, { createContext, useState } from 'react';

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
    const newList = [...wordList, word];
    setWordList(newList);
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
