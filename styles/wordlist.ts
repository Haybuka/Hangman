import { StyleSheet } from 'react-native';

const wordlistStyles = StyleSheet.create({
  flatListStyle: {
    marginVertical: 10,
  },
  wordContainer: {
    marginVertical: 4,
    borderColor: '#000',
    paddingVertical: 10,
    borderBottomWidth: 0.4,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  viewButton: {
    borderWidth: 1,
    borderRadius: 40,
    padding: 6,
    paddingHorizontal: 20,
  },
  viewText: {
    textAlign: 'center',
    color: '#000',
  },
  word: {
    textTransform: 'capitalize',
    paddingVertical: 6,
    fontSize: 14,
    letterSpacing: 3,
    fontFamily: 'Poppins',
  },
});

export default wordlistStyles;
