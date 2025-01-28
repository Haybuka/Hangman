import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, { useState } from 'react';
import { colors } from '@/styles/globalStyles';
import { FontAwesome5 } from '@expo/vector-icons';
import GameModal from '../GameModal';

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
  const [isModalVisible, setIsModalVisible] = useState(false);

  const handleHintModal = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  return (
    <View style={styles.hintParent}>
      {!isGameOver && (
        <View>
          {isDefinitionFetched ? (
            <View style={styles.hintContainer}>
              <TouchableOpacity
                style={styles.infoIcon}
                onPress={handleHintModal}
              >
                <FontAwesome5 name="info" size={13} color={colors.ash} />
              </TouchableOpacity>

              <GameModal
                hideDefaultCancel={false}
                isModalVisible={isModalVisible}
                handleModalClose={toggleModal}
              >
                {hint ? (
                  <Text style={styles.subheading}>{hint}</Text>
                ) : (
                  <Text style={styles.subheading}>
                    'OOps, no definition found
                  </Text>
                )}
              </GameModal>
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
    fontSize: 15,
    color: 'colors.ash',
    fontFamily: 'SpaceMono',
    backgroundColor: colors.transparent,
    flexWrap: 'wrap',
  },
});
