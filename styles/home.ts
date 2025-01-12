import { StyleSheet, Platform } from 'react-native';
import { colors, font } from './globalStyles';

export const homeStyles = StyleSheet.create({
  heading: {
    marginVertical: 4,
    paddingVertical: 10,
  },
  title: {
    fontSize: 25,
    textTransform: 'uppercase',
    fontWeight: 400,
    letterSpacing: 3,
    textAlign: 'center',
    fontFamily: font.default,
  },
  subtitle: {
    fontSize: 14,
    letterSpacing: 3,
    textAlign: 'center',
    fontFamily: font.default,
    textTransform: 'uppercase',
  },
  imgBox: {
    marginVertical: 10,
    ...Platform.select({
      ios: {
        height: 500,
      },
      android: {
        height: 400,
      },
      default: {
        height: 500,
      },
    }),
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
  boldText: {
    fontWeight: 500,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 10,
    gap: 5,
  },
  word: {
    textTransform: 'capitalize',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 6,
  },
});
