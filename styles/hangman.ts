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
  heading: {
    fontSize: 20,
    textAlign: 'center',
    color: '#333',
    textTransform: 'uppercase',
    fontFamily: 'Poppins',
  },
  subheading: {
    marginVertical: 10,
    textAlign: 'center',
    fontSize: 14,
    color: '#333',
    fontFamily: 'SpaceMono',
  },
  winner: {
    color: 'green',
    fontSize: 22,
    fontWeight: '600',
    fontFamily: 'Poppins',
  },
  liveCount: {
    fontFamily: 'Poppins',
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
});
