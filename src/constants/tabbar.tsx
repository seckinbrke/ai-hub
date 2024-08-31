import * as React from 'react';
import {Dimensions, Image, ImageSourcePropType, StyleSheet} from 'react-native';

const screenWidth = Dimensions.get('screen').width;

export const defaultIconRenderer = ({icon}: any) => {
  const isImageSource = (icon: any): icon is ImageSourcePropType => icon;

  if (!isImageSource(icon)) {
    return null;
  }

  return <Image source={icon} style={styles.icon} resizeMode="contain" />;
};

const styles = StyleSheet.create({
  icon: {
    height: 20,
    width: 20,
  },
});

export const defaultActiveTabSize = (screenWidth - 50) / 2.6;

export const defaultDisabledTabSize = 80;

export const defaultBackgroundColor = 'transparent';
