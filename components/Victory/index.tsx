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

  return (
    <View>
      <GameModal
        hideDefaultCancel={false}
        isModalVisible={isModalVisible}
        handleModalClose={toggleModal}
      >
        <View style={{ width: windowWidth - 100 }}>
          <Text style={styles.heading}> Victory</Text>
          <View style={styles.imageContainer}>
            <Image
              source={require('@/assets/images/triumph.jpg')}
              style={{ width: '100%', height: '100%' }}
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
  imageContainer: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
    overflow: 'hidden',
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
