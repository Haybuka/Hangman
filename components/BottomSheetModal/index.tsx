import React, { useCallback, useMemo, useRef } from 'react';
import { View, Text, StyleSheet, Button, TouchableOpacity } from 'react-native';
import { BottomSheetModal, BottomSheetView } from '@gorhom/bottom-sheet';

const BottomSheetDrop = () => {
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log('handleSheetChanges', index);
  }, []);

  // renders
  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handlePresentModalPress}>
        <Text style={styles.buttonText}>How To Play</Text>
      </TouchableOpacity>
      <BottomSheetModal ref={bottomSheetModalRef} onChange={handleSheetChanges}>
        <BottomSheetView style={styles.contentContainer}>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
          <Text>Awesome 🎉</Text>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // padding: 24,
    // justifyContent: 'center',
    // backgroundColor: 'grey',
  },
  contentContainer: {
    // flex: 1,
    // alignItems: 'center',
    height: 400,
  },
  button: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    backgroundColor: '#fff',
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontFamily: 'Poppins',
  },
});

export default BottomSheetDrop;
