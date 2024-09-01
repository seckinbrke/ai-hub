import React, {useRef} from 'react';
import {Pressable, Animated, ViewStyle} from 'react-native';
import {
  collapseAnimatedView,
  expandAnimatedView,
  triggerVibration,
} from '../../common/functions';

type MotionPressProps = {
  children: React.ReactNode;
  onPress: any;
  style?: ViewStyle | any;
  disabled?: boolean;
  styleContainer?: ViewStyle | any;
};

const MotionPress: React.FC<MotionPressProps> = ({
  children,
  onPress,
  style,
  disabled,
  styleContainer,
}) => {
  const scale = useRef(new Animated.Value(1)).current;

  const pressInAnimation = () => collapseAnimatedView(scale, 0.9);
  const pressOutAnimation = () => expandAnimatedView(scale);

  const animatedStyle = {
    transform: [{scale}],
  };

  return (
    <Pressable
      disabled={disabled}
      onPressIn={pressInAnimation}
      onPress={() => {
        triggerVibration();
        onPress();
      }}
      style={[styleContainer]}
      onPressOut={pressOutAnimation}>
      <Animated.View style={[animatedStyle, style]}>{children}</Animated.View>
    </Pressable>
  );
};
export default MotionPress;
