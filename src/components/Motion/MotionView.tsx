import React from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';

type MotionViewProps = {
  children: React.ReactNode;
  animatedValue: Animated.Value;
  style?: StyleProp<ViewStyle>;
};

const MotionView: React.FC<MotionViewProps> = ({
  children,
  animatedValue,
  style,
}) => {
  const animatedStyle = {
    transform: [{scale: animatedValue}],
    opacity: animatedValue,
  };

  return (
    <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
  );
};

export default MotionView;
