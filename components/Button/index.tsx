import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  StyleProp,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { colors, font } from '@/styles/globalStyles';

type ButtonProp = {
  handlePress: () => void;
  text: string;
  otherStyles?: ViewStyle;
};
const Button = ({ handlePress, text, otherStyles }: ButtonProp) => {
  return (
    <TouchableOpacity
      style={[styles.btn, { ...otherStyles }]}
      onPress={handlePress}
    >
      <Text
        style={[
          styles.text,
          { color: otherStyles ? colors.white : colors.ash },
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: colors.white,
    padding: 10,
    marginVertical: 4,
    width: 150,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    ...Platform.select({
      ios: {
        shadowOffset: { width: 3, height: 3 },
        shadowOpacity: 1,
        shadowColor: '#3333333d',
        shadowRadius: 1,
      },
      android: {
        elevation: 2,
      },
      default: {
        height: 500,
      },
    }),
  },
  text: {
    fontFamily: font.default,
  },
});
