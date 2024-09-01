/* eslint-disable @typescript-eslint/no-unused-vars */
import BlurBackground from './components/BlurBackground/BlurBackground';
import styles from './styles';
import {ImageBackground, View, ViewProps} from 'react-native';
import React from 'react';
import {SafeAreaViewProps} from 'react-native-safe-area-context';

type Props = ViewProps & {
  children?: React.ReactNode;
  bottomBlur?: boolean;
  edges?: SafeAreaViewProps['edges'];
};

const BlurBox = ({
  bottomBlur,
  edges = [],
  ...props
}: React.PropsWithChildren<Props>): JSX.Element => {
  return (
    <ImageBackground
      imageStyle={{opacity: 0.2}}
      source={require('../../assets/main-bg.png')}
      style={[styles.wrapper, props.style]}>
      {props.children}
      <BlurBackground />
    </ImageBackground>
  );
};

export default BlurBox;
