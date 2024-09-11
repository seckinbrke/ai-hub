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
  PurchaseScreenOptions,
  SettingsScreenOptions,
  StackNavigatorScreenOptions,
  TabWrapperScreenOptions,
  TaskChatScreenOptions,
} from './common/stackOptions';
import BubbleTabBar from './components/BubbleTabBar';
import {IBubbleTabConfig} from './constants/types';
import HomeScreen from './screens/HomeScreen';
import Screen from './screens/Screen';
import ChatScreen from './screens/ChatScreen';
import SettingsScreen from './screens/SettingsScreen';
import PurchaseScreen from './screens/PurchaseScreen';
import AIChatScreen from './screens/AIChatScreen';
import TaskChatScreen from './screens/TaskChatScreen';

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

  const Loading = () => {
    return <View />;
  };

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
        tabBar={props => (
          <CustomTabBar
            {...props}
            state={props.state}
            descriptors={props.descriptors}
            navigation={props.navigation}
          />
        )}>
        <Tab.Screen
          name="One"
          options={{headerShown: false}}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Two"
          options={{headerShown: false}}
          component={AIChatScreen}
        />
        <Tab.Screen
          name="Three"
          options={{headerShown: false}}
          component={Screen}
        />
        <Tab.Screen
          name="home"
          options={{headerShown: false}}
          component={Screen}
        />
      </Tab.Navigator>
    );
  };

  return (
    <Stack.Navigator
      screenOptions={StackNavigatorScreenOptions as any}
      initialRouteName={'PurchaseScreen'}>
      {isFirstLaunch === undefined ? (
        <Stack.Screen
          name="Loading"
          component={Loading}
          options={{headerShown: false}}
        />
      ) : (
        <>
          <Stack.Screen
            name="TabWrapper"
            options={TabWrapperScreenOptions as any}
            component={TabWrapper}
          />
          <Stack.Screen
            options={ChatScreenOptions}
            name="ChatScreen"
            component={ChatScreen}
          />
          <Stack.Screen
            options={SettingsScreenOptions as any}
            name="SettingsScreen"
            component={SettingsScreen}
          />
          <Stack.Screen
            options={PurchaseScreenOptions as any}
            name="PurchaseScreen"
            component={PurchaseScreen}
          />
          <Stack.Screen
            options={TaskChatScreenOptions as any}
            name="TaskChatScreen"
            component={TaskChatScreen}
          />
        </>
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  sceneContainer: {
    backgroundColor: 'transparent',
  },
});

export default StackWrapper;
