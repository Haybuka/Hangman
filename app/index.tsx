import React from 'react';
import { Text, View } from 'react-native';
import Screen from '@/components/RootScreen';
import { TouchableOpacity } from 'react-native';
import { Link } from 'expo-router';
import { homeStyles } from '@/styles/home';
import BottomSheetDrop from '@/components/BottomSheetModal';

const HomeScreen = () => {
  return (
    <Screen>
      <View style={homeStyles.heading}>
        <Text style={homeStyles.title}>Hangman</Text>
        <Text style={homeStyles.subtitle}>Word Puzzle Game</Text>
      </View>
      <View style={homeStyles.imgBox}></View>
      <View>
        <View style={homeStyles.buttonGroup}>
          <TouchableOpacity style={homeStyles.button}>
            <Link
              href="/hangman"
              style={[homeStyles.buttonText, homeStyles.boldText]}
            >
              Start Game
            </Link>
          </TouchableOpacity>
        </View>
        <View style={homeStyles.buttonGroup}>
          {/* <TouchableOpacity style={homeStyles.button}>
            <Text style={homeStyles.buttonText}>How To Play</Text>
          </TouchableOpacity> */}
          <BottomSheetDrop />

          <TouchableOpacity style={homeStyles.button}>
            <Text style={homeStyles.buttonText}>High Scores</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Screen>
  );
};

export default HomeScreen;
