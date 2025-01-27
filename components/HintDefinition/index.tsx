import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '@/styles/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';

type HintDefinitionProp = {
  hint: string;
};
const HintDefinition = ({ hint }: HintDefinitionProp) => {
  const handleHintModal = () => {
    console.log(hint, 'hint');
  };
  return (
    <TouchableOpacity onPress={handleHintModal}>
      <FontAwesome5 name="info" size={25} color={colors.orange} />
    </TouchableOpacity>
  );
};

export default HintDefinition;

const styles = StyleSheet.create({
  infoIcon: {
    backgroundColor: colors.gray,
    height: 30,
    width: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
});
