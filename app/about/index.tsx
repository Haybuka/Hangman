import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { WordListContext } from '@/context/WordListProvider';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';

const About = () => {
  const { wordList, handleRemoveWordFromList } = useContext(WordListContext);
  const [refreshing, setRefreshing] = useState(false);

  console.log(wordList);
  return (
    <Screen>
      <Text>About Hangman</Text>
      <FlatList
        data={wordList}
        style={styles.flatListStyle}
        renderItem={({ item }) => (
          <View style={styles.wordContainer}>
            <Text style={styles.word}>{item.word}</Text>
            <TouchableOpacity style={styles.viewButton}>
              <Text style={styles.viewText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </Screen>
  );
};

export default About;

const styles = StyleSheet.create({
  flatListStyle: {
    marginVertical: 10,
  },
  wordContainer: {
    marginVertical: 4,
    borderColor: '#000',
    paddingVertical: 10,
    borderBottomWidth: 1,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewButton: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 6,
    paddingHorizontal: 20,
  },
  viewText: {
    textAlign: 'center',
    color: '#000',
  },
  word: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 6,
  },
});
