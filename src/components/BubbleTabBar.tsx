/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useMemo} from 'react';
import {View, StyleSheet} from 'react-native';

import BubbleTab from './BubbleTab';
import {IBubbleTabBar, IRoute} from '../constants/types';

import {
  defaultIconRenderer,
  defaultActiveTabSize,
  defaultDisabledTabSize,
} from '../constants/tabbar';

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
  const tabRoutes = useMemo(() => {
    const {routes} = state;
    return routes.slice(0, tabs.length);
  }, [state.routes]);

  return (
    <View style={[styles.container, style]}>
      {tabRoutes.map(
        ({key: routeKey, name: routeName}: IRoute, index: number) => {
          const currentTabConfig = tabs[index];
          const {
            name,
            inactiveColor,
            activeIcon,
            disabledIcon,
          } = currentTabConfig;
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
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    borderTopWidth: 2,
    borderColor: 'rgba(30, 32, 30, 0.9)',
    gap: 16,
  },
});
