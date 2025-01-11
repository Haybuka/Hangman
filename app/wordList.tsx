import { StyleSheet, Text, View, FlatList, Pressable } from 'react-native';
import React, { useContext, useState } from 'react';
import { WordListContext } from '@/context/WordListProvider';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';
import Toast from 'react-native-toast-message';
import HomeIcon from '@/components/HomeButton';
import HeaderLayout from '@/components/Header';

const WordList = () => {
  const { wordList, handleRemoveWordFromList } = useContext(WordListContext);
  const [refreshing, setRefreshing] = useState(false);

  console.log(wordList);
  return (
    <Screen>
      <HeaderLayout title="Word List" />
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

export default WordList;

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  header: {
    flex: 1,
  },
  headerText: {
    textAlign: 'center',
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 400,
    letterSpacing: 3,
    color: '#333',
    fontFamily: 'Poppins',
  },
  flatListStyle: {
    marginVertical: 10,
  },
  wordContainer: {
    marginVertical: 4,
    borderColor: '#000',
    paddingVertical: 10,
    borderBottomWidth: 0.4,
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

    paddingVertical: 6,

    fontSize: 14,
    letterSpacing: 3,

    fontFamily: 'Poppins',
  },
});
