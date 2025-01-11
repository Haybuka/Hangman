import { Text, View, FlatList } from 'react-native';
import React, { useContext, useState } from 'react';
import { WordListContext } from '@/context/WordListProvider';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';
import HeaderLayout from '@/components/Header';
import wordlistStyles from '@/styles/wordlist';

const WordList = () => {
  const { wordList, handleRemoveWordFromList } = useContext(WordListContext);
  const [refreshing, setRefreshing] = useState(false);

  return (
    <Screen>
      <HeaderLayout title="Word List" />
      <FlatList
        data={wordList}
        style={wordlistStyles.flatListStyle}
        renderItem={({ item }) => (
          <View style={wordlistStyles.wordContainer}>
            <Text style={wordlistStyles.word}>{item?.word}</Text>
            <TouchableOpacity style={wordlistStyles.viewButton}>
              <Text style={wordlistStyles.viewText}>View</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </Screen>
  );
};

export default WordList;
