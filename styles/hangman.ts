import { StyleSheet } from 'react-native';
import { colors, font } from './globalStyles';

export const hangmanStyles = StyleSheet.create({
  btnGroup: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  container: {
    padding: 10,
    alignItems: 'center',
    flex: 1,
    paddingTop: 20,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    color: colors.ash,
    textTransform: 'uppercase',
    fontFamily: font.default,
  },
  subheading: {
    textAlign: 'center',
    fontSize: 14,
    color: colors.ash,
    fontFamily: 'SpaceMono',
    backgroundColor: colors.transparent,
  },
  hangman: {
    height: 200,
    backgroundColor: colors.transparent,
  },
  winner: {
    color: 'green',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: font.default,
  },
  liveCount: {
    fontFamily: font.default,
    color: colors.red,
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    marginTop: 5,
  },
  textContainer: { alignItems: 'center', gap: 10 },
  wordContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    position: 'relative',
  },

  alphabetContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginVertical: 20,
    justifyContent: 'center',
  },

  btn: {
    elevation: 4,
    backgroundColor: colors.white,
    padding: 10,
  },
});
