import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useContext } from 'react';
import { WordListContext } from '@/context/WordListProvider';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';

const About = () => {
  const { wordList, handleWordList } = useContext(WordListContext);

  console.log(wordList);
  return (
    <Screen>
      <FlatList
        data={wordList}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.wordContainer}>
            <Text style={styles.word}>{item.word}</Text>
          </TouchableOpacity>
        )}
      />
    </Screen>
  );
};

export default About;

const styles = StyleSheet.create({
  wordContainer: {
    marginVertical: 4,
    elevation: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 10,
      height: 10,
    },
    shadowOpacity: 1,
  },
  word: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18,
  },
});
