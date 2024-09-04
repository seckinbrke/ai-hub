import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MotionPress from './Motion/MotionPress';
// import {Send} from './Icons';

export type Props = {
  text: string;
  logo: any;
  onPress: any;
};

const SettingsButton: React.FC<Props> = ({onPress, logo, text}) => {
  return (
    <MotionPress
      style={{flexDirection: 'row', alignItems: 'center', marginVertical: 16}}
      onPress={onPress}>
      <View style={styles.buttonContainer}>{logo}</View>
      <Text style={{marginLeft: 8, color: 'white', fontSize: 15}}>{text}</Text>
    </MotionPress>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 12,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 100,
  },
});

export default SettingsButton;
