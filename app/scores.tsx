import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '@/components/RootScreen';
import HeaderLayout from '@/components/Header';

const Scores = () => {
  return (
    <Screen>
      <HeaderLayout title="Scores" />
    </Screen>
  );
};

export default Scores;

const styles = StyleSheet.create({});
