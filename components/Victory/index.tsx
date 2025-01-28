import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Dimensions,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import GameModal from '../GameModal';
import { colors, font } from '@/styles/globalStyles';
import Button from '../Button';
import LetterDisplay from '../LetterDisplay';

type VictoryDisplayProp = {
  handleGenerateWord: () => void;
  isVictoryModal: boolean;
};
const VictoryDisplay = ({
  handleGenerateWord,
  isVictoryModal,
}: VictoryDisplayProp) => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleHintModal = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
    console.log(isVictoryModal, 'victory modal');
  };
  const windowWidth = Dimensions.get('window').width;

  const word = 'Hangman';
  const imgSrc = require('@/assets/images/triumph.jpg');

  const handleNextWord = () => {
    handleGenerateWord();
    toggleModal();
  };
  return (
    <View>
      <GameModal
        hideDefaultCancel
        isModalVisible={isModalVisible}
        handleModalClose={toggleModal}
        bgColor={colors.gray_white}
      >
        <View
          style={{ width: windowWidth - 100, backgroundColor: '#fbf8f86f' }}
        >
          <Text style={styles.heading}> Victory</Text>
          <View style={styles.imageContainer}>
            <Image
              style={[
                styles.image,
                { transform: 'rotate(260deg) translate(75%,-58%)' },
              ]}
              source={imgSrc}
            />
            <Image
              style={[
                styles.image,
                { transform: 'rotate(340deg) translate(58%,15%)' },
              ]}
              source={imgSrc}
            />
          </View>
          <View style={styles.wordContainer}>
            {[...word].map((letter, id) => (
              <View key={id} style={styles.words}>
                <Text style={[styles.letter]}>{letter}</Text>
              </View>
            ))}
          </View>
          <View style={styles.btnGroup}>
            <Button
              otherStyles={{ backgroundColor: colors.red }}
              text="Next"
              handlePress={handleNextWord}
            />
            <TouchableOpacity style={styles.btn} onPress={toggleModal}>
              <Text style={styles.btnText}>Exit</Text>
            </TouchableOpacity>
          </View>
        </View>
      </GameModal>
    </View>
  );
};

export default VictoryDisplay;

const styles = StyleSheet.create({
  image: {
    height: 100,
    width: 200,
    resizeMode: 'contain',
    position: 'absolute',
    top: -50,

    transformOrigin: 'bottom right',
  },
  imageContainer: {
    height: 100,
    position: 'relative',
    overflow: 'hidden',
  },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 5,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  words: {
    borderBottomWidth: 1,
    borderBottomColor: '#3333335b',
    width: 30,
    height: 30,
    justifyContent: 'flex-end',
    alignItems: 'center',
    paddingBottom: 8,
    textAlign: 'center',
  },
  letter: {
    fontSize: 18,
    fontWeight: '400',
    textTransform: 'uppercase',
    fontFamily: font.default,
  },

  btnGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: colors.white,
    padding: 10,
    borderRadius: 10,
    marginVertical: 4,
  },
  btnText: {
    textAlign: 'center',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    textTransform: 'uppercase',
    fontFamily: font.default,
    marginVertical: 10,
    color: colors.green,
    fontWeight: '700',
    letterSpacing: 10,
  },
});
