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

const VictoryDisplay = () => {
  const [isModalVisible, setIsModalVisible] = useState(true);

  const handleHintModal = () => {
    toggleModal();
  };

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const windowWidth = Dimensions.get('window').width;

  const word = 'Hang man';
  const imgSrc = require('@/assets/images/triumph.jpg');
  return (
    <View>
      <GameModal
        hideDefaultCancel={false}
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
              style={[styles.image, { resizeMode: 'contain' }]}
              source={imgSrc}
            />
            <Image
              style={[styles.image, { resizeMode: 'contain' }]}
              source={imgSrc}
            />
          </View>
          <View style={styles.btnGroup}>
            <Button
              otherStyles={{ backgroundColor: colors.red }}
              text="Next"
              handlePress={() => console.log('next')}
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
    transform: 'rotate(-20deg) translateY(0%)',
    position: 'absolute',
    top: -50,
  },
  imageContainer: {
    height: 100,
    position: 'relative',
    overflow: 'hidden',
    padding: 10,
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
    color: colors.ash,
    textTransform: 'uppercase',
    fontFamily: font.default,
    marginVertical: 10,
    fontWeight: 'black',
  },
});
