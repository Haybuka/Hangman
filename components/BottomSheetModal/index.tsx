import React, { useCallback, useMemo, useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Pressable,
} from 'react-native';
import BottomSheet, {
  BottomSheetFlatList,
  BottomSheetModal,
  BottomSheetView,
} from '@gorhom/bottom-sheet';
import gamerules from '@/utils/gamerules';
import { Feather } from '@expo/vector-icons';
import { colors, font } from '@/styles/globalStyles';

type ItemProps = { rule: string; id: string };

const BottomSheetDrop = () => {
  const [modalState, setModalState] = useState(false);
  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    if (modalState) {
      bottomSheetModalRef.current?.close();
    } else {
      bottomSheetModalRef.current?.present();
    }
  }, []);

  const handleClosePress = useCallback(() => {
    bottomSheetModalRef.current?.close();
    setModalState(false);
  }, []);
  const Item = ({ rule }: ItemProps) => (
    <View style={styles.itemContainer}>
      <View style={styles.listStyle}></View>
      <Text style={styles.itemText}>{rule}</Text>
    </View>
  );

  return (
    <View>
      <TouchableOpacity style={styles.button} onPress={handlePresentModalPress}>
        <Text style={styles.buttonText}>How To Play</Text>
      </TouchableOpacity>

      <BottomSheetModal ref={bottomSheetModalRef}>
        <BottomSheetView style={styles.contentContainer}>
          <View>
            <Pressable onPress={() => handleClosePress()}>
              <Feather name="x" color={'black'} size={20} />
            </Pressable>
            <Text style={styles.heading}>Rules</Text>
          </View>
          <BottomSheetFlatList
            data={gamerules}
            keyExtractor={(item) => item.rule}
            renderItem={({ item }) => <Item rule={item.rule} id={item.rule} />}
            contentContainerStyle={styles.contentContainer}
            bounces
            alwaysBounceVertical
            bouncesZoom
          />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    padding: 10,
    paddingHorizontal: 4,
  },

  heading: {
    fontSize: 16,
    textTransform: 'uppercase',
    fontFamily: font.default,
    letterSpacing: 2,
    textAlign: 'center',
  },
  button: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 10,
    backgroundColor: colors.white,
    flex: 1,
  },
  buttonText: {
    textAlign: 'center',
    color: colors.ash,
    fontFamily: font.default,
    textTransform: 'uppercase',
  },
  listStyle: {
    width: 10,
    height: 10,
    borderWidth: 1,
    borderRadius: 40,
    marginTop: 4,
  },
  itemContainer: {
    padding: 6,
    marginVertical: 6,
    flexDirection: 'row',
    gap: 6,
  },
  itemText: {
    fontSize: 12,
    textTransform: 'uppercase',
    fontFamily: font.default,
    letterSpacing: 2,
  },
});

export default BottomSheetDrop;
