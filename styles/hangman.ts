import { StyleSheet } from 'react-native';

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
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // backgroundColor: 'red',
    width: '100%',
  },
  heading: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
  },
  subheading: {
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    fontFamily: 'SpaceMono',
    backgroundColor: 'transparent',
  },
  winner: {
    color: 'green',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  liveCount: {
    fontFamily: 'Poppins',
    position: 'absolute',
    width: '100%',
    color: '#AE0A25',
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
    marginVertical: 50,
    justifyContent: 'center',
  },

  btn: {
    elevation: 4,
    backgroundColor: '#fff',
    padding: 10,
  },
  hintContainer: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 4,
    justifyContent: 'center',
  },
  hintText: {
    textAlign: 'center',
  },
});
