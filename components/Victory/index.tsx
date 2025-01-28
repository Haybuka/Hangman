import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
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

  const word = 'Hang man';
  return (
    <View>
      <GameModal
        hideDefaultCancel={false}
        isModalVisible={isModalVisible}
        handleModalClose={toggleModal}
      >
        <View>
          <Text style={styles.heading}> Victory</Text>
          <Text>VictoryDisplay</Text>
          <View>
            <Button
              otherStyles={{ backgroundColor: colors.red }}
              text="Next"
              handlePress={() => console.log('next')}
            />
            <TouchableOpacity style={styles.btn}>
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
  btnGroup: {},
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
  },
});
