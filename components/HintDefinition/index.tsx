import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { colors } from '@/styles/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';

type HintDefinitionProp = {
  hint?: string;
  isGameOver: boolean;
  isDefinitionFetched: boolean;
};
const HintDefinition = ({
  hint,
  isDefinitionFetched,
  isGameOver,
}: HintDefinitionProp) => {
  const handleHintModal = () => {
    console.log(hint, 'hint');
  };
  return (
    <View style={styles.hintParent}>
      {!isGameOver && (
        <View>
          {isDefinitionFetched ? (
            <View style={styles.hintContainer}>
              {hint ? (
                <TouchableOpacity
                  style={styles.infoIcon}
                  onPress={handleHintModal}
                >
                  <FontAwesome5 name="info" size={13} color={colors.ash} />
                </TouchableOpacity>
              ) : (
                <Text style={styles.subheading}>
                  'OOps, no definition found
                </Text>
              )}
            </View>
          ) : (
            <ActivityIndicator size="large" color="#29427A" />
          )}
        </View>
      )}
    </View>
  );
};

export default HintDefinition;

const styles = StyleSheet.create({
  infoIcon: {
    backgroundColor: colors.gray,
    height: 25,
    width: 25,
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
  hintText: {
    textAlign: 'center',
  },
  hintParent: {
    marginVertical: 15,
    paddingHorizontal: 2,
  },
  subheading: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.ash,
    fontFamily: 'SpaceMono',
    backgroundColor: colors.transparent,
  },
});
