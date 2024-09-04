import React, {useEffect, useState} from 'react';
import {
  Animated,
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {useAnimation} from 'react-native-animation-hooks';

import {
  IAccessibility,
  IBubbleTabConfig,
  TIconRenderer,
  TBubbleTabBarIcon,
} from '../constants/types';
import {theme} from '../constants/theme';

interface IBubbleTabParent
  extends Omit<IBubbleTabConfig, 'name' | 'activeIcon'>,
    IAccessibility {}

export interface IBubbleTab extends IBubbleTabParent {
  iconRenderer: TIconRenderer;
  activeTabSize: number;
  disabledTabSize: number;
  tabName: string;
  icon: TBubbleTabBarIcon;
  isActive: boolean;
  testID?: string;
  onPress?: (event: GestureResponderEvent) => void;
  onLongPress?: (event: GestureResponderEvent) => void;
}

const BubbleTab: React.FC<IBubbleTab> = ({
  iconRenderer,
  activeTabSize,
  disabledTabSize,
  tabName,
  icon,
  isActive,
  onPress,
  onLongPress,
  accessibilityRole,
  accessibilityLabel,
  accessibilityState,
  testID,
}) => {
  const [isOpenAnimation, setIsOpenAnimation] = useState(isActive);

  const tabWidth = useAnimation({
    type: 'timing',
    initialValue: isActive ? activeTabSize : disabledTabSize,
    toValue: isOpenAnimation ? activeTabSize : 50,
    duration: 300,
    useNativeDriver: false,
  });

  const labelOpacity = useAnimation({
    type: 'timing',
    initialValue: isActive ? 1 : 0,
    toValue: isOpenAnimation ? 1 : 0,
    duration: isOpenAnimation ? 150 : 100,
    delay: isOpenAnimation ? 150 : 0,
    useNativeDriver: true,
  });

  useEffect(() => setIsOpenAnimation(isActive), [isActive]);

  const renderedIcon = iconRenderer({icon});

  return (
    <TouchableOpacity
      onPress={onPress}
      onLongPress={onLongPress}
      accessibilityRole={accessibilityRole}
      accessibilityState={accessibilityState}
      accessibilityLabel={accessibilityLabel}
      testID={testID}
      style={styles.touchableContainer}>
      <Animated.View
        style={[styles.animatedWrapper, {width: tabWidth}]}>
        {renderedIcon}
        {isActive && (
          <Animated.Text
            style={[styles.label, {opacity: labelOpacity}]}
            numberOfLines={1}>
            {tabName}
          </Animated.Text>
        )}
      </Animated.View>
    </TouchableOpacity>
  );
};

export default BubbleTab;

const styles = StyleSheet.create({
  touchableContainer: {
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'center',
  },
  animatedWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: 'rgba(30,32,30,0.9)',
  },
  label: {
    marginLeft: 10,
    fontSize: 14.5,
    fontWeight: 'bold',
    width: 'auto',
    height: 'auto',
    color: theme.colors.gradients.generalGradient[0],
    fontFamily: theme.font.bold,
  },
});
