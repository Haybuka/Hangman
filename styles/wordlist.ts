import { StyleSheet } from 'react-native';
import { colors, font } from './globalStyles';

const wordlistStyles = StyleSheet.create({
  flatListStyle: {
    marginVertical: 10,
  },
  wordContainer: {
    marginVertical: 4,
    borderColor: colors.black,
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
    color: colors.ash,
  },
  word: {
    textTransform: 'capitalize',
    paddingVertical: 6,
    fontSize: 14,
    letterSpacing: 3,
    fontFamily: font.default,
  },
});

export default wordlistStyles;
