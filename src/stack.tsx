/* eslint-disable react/no-unstable-nested-components */
import {
  BottomTabBarProps,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  getIsFirstLaunchFromStorage,
  setIsFirstLaunchToStorage,
} from './common/functions';
import {
  ChatScreenOptions,
  StackNavigatorScreenOptions,
  TabWrapperScreenOptions,
} from './common/stackOptions';
import BlurBox from './components/box/BlurBox';
import BubbleTabBar from './components/BubbleTabBar';
import {IBubbleTabConfig} from './constants/types';
import HomeScreen from './screens/HomeScreen';
import Screen from './screens/Screen';
import ChatScreen from './screens/ChatScreen';

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
      activeIcon: require('./assets/tab/chat-active.png'),
      name: 'AI Chat',
    },
    {
      activeIcon: require('./assets/tab/art-active.png'),
      name: 'AI Art',
    },
    {
      activeIcon: require('./assets/tab/note-active.png'),
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
        sceneContainerStyle={styles.sceneContainer}
        tabBar={({state, descriptors, navigation}) => (
          <CustomTabBar
            state={state}
            descriptors={descriptors}
            navigation={navigation}
          />
        )}>
        <Tab.Screen
          name="One"
          options={{headerShown: false}} // No header for this screen
          component={HomeScreen}
        />
        <Tab.Screen
          name="Two"
          options={{headerShown: false}} // No header for this screen
          component={Screen}
        />
        <Tab.Screen
          name="Three"
          options={{headerShown: false}} // No header for this screen
          component={Screen}
        />
        <Tab.Screen
          name="home"
          options={{headerShown: false}} // No header for this screen
          component={Screen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <BlurBox>
      <Stack.Navigator
        screenOptions={StackNavigatorScreenOptions}
        initialRouteName={'TabWrapper'}>
        {isFirstLaunch === undefined ? (
          <Stack.Screen
            name="Loading"
            component={() => <View />}
            options={{headerShown: false}}
          />
        ) : (
          <>
            <Stack.Screen
              name="TabWrapper"
              options={TabWrapperScreenOptions}
              component={TabWrapper}
            />
            <Stack.Screen options={ChatScreenOptions} name="ChatScreen" component={ChatScreen} />
          </>
        )}
      </Stack.Navigator>
    </BlurBox>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default StackWrapper;
