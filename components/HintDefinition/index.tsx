import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { colors } from '@/styles/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';

type HintDefinitionProp = {
  hint?: string;
};
const HintDefinition = ({ hint }: HintDefinitionProp) => {
  const handleHintModal = () => {
    console.log(hint, 'hint');
  };
  return (
    <View style={styles.hintContainer}>
      {hint ? (
        <TouchableOpacity style={styles.infoIcon} onPress={handleHintModal}>
          <FontAwesome5 name="info" size={15} color={colors.ash} />
        </TouchableOpacity>
      ) : (
        <Text style={styles.subheading}>'OOps, no definition found</Text>
      )}
    </View>
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
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
    justifyContent: 'center',
  },
  subheading: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.ash,
    fontFamily: 'SpaceMono',
    backgroundColor: colors.transparent,
  },
});
