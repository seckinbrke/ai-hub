import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { theme } from '../constants/theme';

interface CustomHeaderProps {
  headerLeft?: React.ReactNode;
  title?: string;
  headerRight?: React.ReactNode;
}

const CustomHeader: React.FC<CustomHeaderProps> = ({
  headerLeft,
  title,
  headerRight,
}) => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.buttonContainer}>
        <View style={styles.leftContainer}>{headerLeft}</View>
        <View style={styles.titleContainer}>
          <Text style={styles.titleText}>{title}</Text>
        </View>
        <View style={styles.rightContainer}>{headerRight}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    justifyContent: 'flex-end',
    height: 120,
    backgroundColor: 'transparent',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    backgroundColor: 'transparent',
  },
  leftContainer: {
    flex: 1,
    alignItems: 'flex-start',
  },
  titleContainer: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleText: {
    fontSize: 18,
    color: 'white',
    fontFamily: theme.font.bold,
  },
  rightContainer: {
    flex: 1,
    alignItems: 'flex-end',
  },
});

export default CustomHeader;
