import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useContext, useState } from 'react';
import { WordListContext } from '@/context/WordListProvider';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

const About = () => {
  const { wordList, handleRemoveWordFromList } = useContext(WordListContext);
  const [refreshing, setRefreshing] = useState(false);

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
