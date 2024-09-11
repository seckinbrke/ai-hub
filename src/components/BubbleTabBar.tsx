/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useEffect, useMemo, useRef} from 'react';
import {View, StyleSheet, Animated} from 'react-native';

import BubbleTab from './BubbleTab';
import {IBubbleTabBar, IRoute} from '../constants/types';

import {
  defaultIconRenderer,
  defaultActiveTabSize,
  defaultDisabledTabSize,
} from '../constants/tabbar';
import LinearGradient from 'react-native-linear-gradient';
import {theme} from '../constants/theme';
import {WIDTH} from '../common/constants';

const BubbleTabBar: React.FC<IBubbleTabBar> = ({
  iconRenderer = defaultIconRenderer,
  activeTabSize = defaultActiveTabSize,
  disabledTabSize = defaultDisabledTabSize,
  tabs,
  style,
  state,
  descriptors,
  navigation,
}) => {
  const buttonTotalWidth = defaultActiveTabSize + 3 * defaultDisabledTabSize;
  const emptySpace = WIDTH - buttonTotalWidth;
  const initialPoint = emptySpace + defaultActiveTabSize / 2 - 18;
  const everyStep = (defaultDisabledTabSize + defaultActiveTabSize / 2) / 2 - 5;
  const tabRoutes = useMemo(() => {
    const {routes} = state;
    return routes.slice(0, tabs.length);
  }, [state.routes]);

  const translateX = useRef(
    new Animated.Value(state.index * everyStep),
  ).current;

  useEffect(() => {
    // Animate the indicator when the active tab changes
    Animated.timing(translateX, {
      toValue: state.index * everyStep,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [state.index, translateX]);

  return (
    <View style={[styles.container, style]}>
      <Animated.View
        style={[
          styles.indicator,
          {
            left: initialPoint,
            width: 50,
            transform: [{translateX}],
          },
        ]}>
        <LinearGradient
          colors={theme.colors.gradients.generalGradient} // Customize the gradient colors here
          style={styles.gradient}
        />
      </Animated.View>
      {tabRoutes.map(
        ({key: routeKey, name: routeName}: IRoute, index: number) => {
          const currentTabConfig = tabs[index];
          const {name, inactiveColor, activeIcon, disabledIcon} =
            currentTabConfig;
          const {options} = descriptors[routeKey];
          const {
            tabBarLabel: optionTabBarLabel,
            title: optionTitle,
            tabBarAccessibilityLabel: accessibilityLabel,
          } = options;

          const tabName = useMemo(() => {
            return name || optionTabBarLabel || optionTitle || routeName;
          }, [name, optionTabBarLabel, optionTitle]);

          const isActive = state.index === index;

          const onPress = useCallback(() => {
            const event = navigation.emit({
              type: 'tabPress',
              target: routeKey,
            });

            if (!isActive && !event.defaultPrevented) {
              navigation.navigate(routeName);
            }
          }, [routeKey, routeName, isActive]);

          const onLongPress = useCallback(() => {
            navigation.emit({
              type: 'tabLongPress',
              target: routeKey,
            });
          }, [routeKey]);

          const accessibilityState = {selected: isActive};
          const currentIcon = disabledIcon
            ? isActive
              ? activeIcon
              : disabledIcon
            : activeIcon;

          return (
            <BubbleTab
              key={`tab-${index}`}
              iconRenderer={iconRenderer}
              activeTabSize={activeTabSize}
              disabledTabSize={disabledTabSize}
              isActive={isActive}
              icon={currentIcon}
              inactiveColor={inactiveColor}
              tabName={tabName}
              onPress={onPress}
              onLongPress={onLongPress}
              accessibilityRole="button"
              accessibilityState={accessibilityState}
              accessibilityLabel={accessibilityLabel}
            />
          );
        },
      )}
    </View>
  );
};

export default BubbleTabBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: 90,
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    borderTopWidth: 2,
    borderColor: 'rgba(30, 32, 30, 0.9)',
    gap: 16,
  },
  indicator: {
    position: 'absolute',

    height: 2,
    borderRadius: 10,
  },
  gradient: {
    flex: 1,
  },
});
