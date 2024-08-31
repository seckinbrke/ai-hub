/* eslint-disable @typescript-eslint/no-unused-vars */
import BlurBackground from './components/BlurBackground/BlurBackground';
import styles from './styles';
import {View, ViewProps} from 'react-native';
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
    <View style={[styles.wrapper, props.style]}>
      {props.children}
      <BlurBackground />
    </View>
  );
};

export default BlurBox;
