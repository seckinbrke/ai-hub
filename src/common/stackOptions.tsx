import React from 'react';
import {Back, Refresh, Settings} from '../components/Icons';
import type {NativeStackNavigationOptions as NativeStackNavigationOptionsType} from '@react-navigation/native-stack';
import MotionPress from '../components/Motion/MotionPress';
import {StyleSheet} from 'react-native';
import CustomHeader from '../components/CustomHeader';

type OptionsPropsType = {
  navigation: any;
  route: any;
};

export const StackNavigatorScreenOptions = () => ({
  contentStyle: {backgroundColor: 'transparent'},
  headerShown: false,
  gestureEnabled: true,
  animation: 'fade',
  animationDuration: 70,
});

export const RootTabsScreenOptions = (): any => ({
  headerShown: false,
  animation: 'shift',
  transitionSpec: {
    animation: 'timing',
    config: {
      duration: 400,
    },
  },
  sceneStyleInterpolator: ({current}: any) => ({
    sceneStyle: {
      opacity: current.progress.interpolate({
        inputRange: [-1, 0, 1],
        outputRange: [0, 1, 0],
      }),
    },
  }),
});

export const SettingsScreenOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  headerShown: true,
  // animation: 'none',
  // freezeOnBlur: true,
  header: () => (
    <CustomHeader
      headerLeft={<BackButton navigation={navigation} />}
      title="Settings"
    />
  ),
});

export const TabWrapperScreenOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  headerShown: true,
  headerTitle: '',
  headerTransparent: true,
  headerTitleStyle: {
    color: '#FFF',
    fontSize: 22,
  },
  header: () => (
    <CustomHeader headerRight={<SettingsButton navigation={navigation} />} />
  ),
});

export const ChatScreenOptions = ({
  navigation,
  route,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  headerShown: true,
  header: () => (
    <CustomHeader
      headerLeft={<BackButton navigation={navigation} />}
      title="Chat with Echo"
      headerRight={
        <RefreshButton
          navigation={navigation}
          route={route}
          onPress={() => route.params?.refreshConversation()}
        />
      }
    />
  ),
});

const RefreshButton = ({onPress}: any) => {
  return (
    <MotionPress onPress={onPress} style={styles.buttonContainer}>
      <Refresh color={'white'} height={20} width={20} />
    </MotionPress>
  );
};

const SettingsButton = ({navigation}: any) => {
  return (
    <MotionPress
      onPress={() => navigation.navigate('SettingsScreen')}
      style={styles.buttonContainer}>
      <Settings color={'white'} height={22} width={22} />
    </MotionPress>
  );
};

const BackButton = ({navigation}: any) => {
  return (
    <MotionPress
      onPress={() => navigation.goBack()}
      style={styles.buttonContainer}>
      <Back color={'white'} />
    </MotionPress>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 16,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 100,
  },
  headerContainer: {
    height: 120,
    backgroundColor: 'blue',
    alignItems: 'flex-end',
    flexDirection: 'row',
  },
});
