import {
  Dimensions,
  Modal,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
// import Modal from 'react-native-modal';
import { colors } from '@/styles/globalStyles';
import Entypo from '@expo/vector-icons/Entypo';

type GameModalProp = {
  isModalVisible: boolean;
  handleModalClose: () => void;
  children: React.ReactNode;
};
const GameModal = ({
  isModalVisible,
  handleModalClose,
  children,
}: GameModalProp) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={handleModalClose}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <View>
            <Pressable style={styles.cancelIcon} onPress={handleModalClose}>
              <Entypo name="cross" size={20} color={colors.ash} />
            </Pressable>
          </View>
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
    backgroundColor: '#33333360',
  },
  modalView: {
    // margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});
