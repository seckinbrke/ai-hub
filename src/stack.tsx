/* eslint-disable react/no-unstable-nested-components */
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  StackNavigatorScreenOptions,
  HomeScreenStackOptions,
} from './common/stackOptions';
import HomeScreen from './screens/HomeScreen';
import {
  getIsFirstLaunchFromStorage,
  setIsFirstLaunchToStorage,
} from './common/functions';
import BubbleTabBar from './components/BubbleTabBar';
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {IBubbleTabConfig} from './constants/types';
import BlurBox from './components/box/BlurBox';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const StackWrapper = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState<string | undefined>(
    undefined,
  );

  useEffect(() => {
    returnIsFirstLaunch();
  }, []);

  const returnIsFirstLaunch = async () => {
    const isFirstLaunchInner = await getIsFirstLaunchFromStorage();
    if (isFirstLaunchInner) {
      setIsFirstLaunch('false');
    } else {
      setIsFirstLaunch('true');
      setIsFirstLaunchToStorage('true');
    }
  };

  const tabs: IBubbleTabConfig[] = [
    {
      activeIcon: require('./assets/tab/home-active.png'),
      name: 'Home',
    },
    {
      activeIcon: require('./assets/tab/home-active.png'),
      name: 'AI Chat',
    },
    {
      activeIcon: require('./assets/tab/home-active.png'),
      name: 'AI Art',
    },
    {
      activeIcon: require('./assets/tab/home-active.png'),
      name: 'AI Note',
    },
  ];

  const CustomTabBar: React.FC<BottomTabBarProps | any> = ({
    state,
    descriptors,
    navigation,
    insets,
  }) => {
    return (
      <BubbleTabBar
        state={state}
        descriptors={descriptors}
        navigation={navigation}
        tabs={tabs}
        insets={insets}
      />
    );
  };

  const TabWrapper = () => {
    return (
      <Tab.Navigator
        screenOptions={StackNavigatorScreenOptions as any}
        sceneContainerStyle={{backgroundColor: 'transparent'}}
        tabBar={({state, descriptors, navigation}) => (
          <CustomTabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
          />
        )}>
        <Tab.Screen
          name="One"
          options={HomeScreenStackOptions as any}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Two"
          options={HomeScreenStackOptions as any}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Three"
          options={HomeScreenStackOptions as any}
          component={HomeScreen}
        />
        <Tab.Screen
          name="home"
          options={HomeScreenStackOptions as any}
          component={HomeScreen}
        />
      </Tab.Navigator>
    );
  };

  if (isFirstLaunch === undefined) {
    return null;
  }

  return (
    <BlurBox>
      <Stack.Navigator
        screenOptions={StackNavigatorScreenOptions as any}
        initialRouteName={'HomeScreen'}>
        <Stack.Screen
          options={HomeScreenStackOptions as any}
          name="HomeScreen"
          component={TabWrapper}
        />
      </Stack.Navigator>
    </BlurBox>
  );
};

export default StackWrapper;
