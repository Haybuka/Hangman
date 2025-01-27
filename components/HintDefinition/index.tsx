import { StyleSheet, Text, View } from 'react-native';
import React from 'react';

type HintDefinitionProp = {
  hint: string;
};
const HintDefinition = ({ hint }: HintDefinitionProp) => {
  return (
    <View>
      <Text>HintDefinition</Text>
    </View>
  );
};

export default HintDefinition;

const styles = StyleSheet.create({});
