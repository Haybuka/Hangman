import { Modal, Pressable, StyleSheet, View } from 'react-native';
// import Modal from 'react-native-modal';
import { colors } from '@/styles/globalStyles';
import Entypo from '@expo/vector-icons/Entypo';

type GameModalProp = {
  isModalVisible: boolean;
  handleModalClose: () => void;
  children: React.ReactNode;
  hideDefaultCancel: boolean;
};
const GameModal = ({
  isModalVisible,
  handleModalClose,
  children,
  hideDefaultCancel,
}: GameModalProp) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleModalClose}
      style={{
        padding: 10,
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          {!hideDefaultCancel && (
            <View>
              <Pressable style={styles.cancelIcon} onPress={handleModalClose}>
                <Entypo name="cross" size={20} color={colors.ash} />
              </Pressable>
            </View>
          )}
          <View style={styles.children}>{children}</View>
        </View>
      </View>
    </Modal>
  );
};

export default GameModal;

const styles = StyleSheet.create({
  children: {
    marginVertical: 10,
  },
  cancelIcon: {
    backgroundColor: colors.gray,
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.ash_opacity,
  },
  modalView: {
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
    margin: 5,
  },
});
