import React from 'react';
import {Pressable, StyleSheet, Text} from 'react-native';
import {WIDTH} from './constants';
import type {NativeStackNavigationOptions as NativeStackNavigationOptionsType} from '@react-navigation/native-stack';
import {triggerVibration} from './functions';
import {TransitionPresets} from '@react-navigation/stack';
import {theme} from '../constants/theme';

type OptionsPropsType = {
  navigation: any;
};

const onPressSettingsButton = (navigation: any) => {
  navigation.navigate('SettingsScreen');
};
const onPressBackButton = (navigation: any) => {
  navigation.goBack();
};

export const StackNavigatorScreenOptions = () => ({
  contentStyle: {backgroundColor: 'transparent'},
  gestureEnabled: true, // Enable gestures (swipe back)
  // animation: 'fade',
  // animationDuration: COMMON_ANIMATION_DURATION,
});

export const HomeScreenStackOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: 'My notes',
  headerShadowVisible: false,
  headerShown: false,
  // headerLargeTitle: true,
  // headerLargeTitleStyle: {
  //   color: theme.colors.main.white,
  //   fontSize: 32,
  //   fontFamily: theme.font.bold,
  // },
  // headerTitleStyle: {
  //   color: theme.colors.main.white,
  //   fontSize: 16,
  //   fontFamily: theme.font.bold,
  // },
  headerTransparent: true,
  headerRight: () => (
    <Pressable
      style={styles.settingsButton}
      onPress={() => {
        triggerVibration();
        onPressSettingsButton(navigation);
      }}></Pressable>
  ),
});

export const NoteDetailStackOptions = ({}: OptionsPropsType &
  NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: '📝',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.main.black,
    borderBottomColor: 'transparent',
  },
  headerBackTitleVisible: true,
  headerBackTitleStyle: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  headerTintColor: theme.colors.main.white,
});

export const TranscriptStackOptions = ({}: OptionsPropsType &
  NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: 'Transcript',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.main.black,
    borderBottomColor: 'transparent',
  },
  headerBackTitleVisible: true,
  headerBackTitleStyle: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  headerTitleStyle: {
    color: theme.colors.main.white,
    fontSize: 16,
    fontFamily: theme.font.bold,
  },
  headerTintColor: theme.colors.main.white,
});

export const QuizStackOptions = ({}: OptionsPropsType &
  NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: 'Quiz',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.main.black,
    borderBottomColor: 'transparent',
  },
  headerBackTitleVisible: true,
  headerBackTitleStyle: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  headerTitleStyle: {
    color: theme.colors.main.white,
    fontSize: 16,
    fontFamily: theme.font.bold,
  },
  headerTintColor: theme.colors.main.white,
});

export const SettingsStackOptions = ({}: OptionsPropsType &
  NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: 'Settings',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.main.black,
    borderBottomColor: 'transparent',
  },
  headerBackTitleVisible: true,
  headerBackTitleStyle: {
    fontFamily: theme.font.bold,
    fontSize: 16,
  },
  headerTitleStyle: {
    color: theme.colors.main.white,
    fontSize: 16,
    fontFamily: theme.font.bold,
  },
  headerTintColor: theme.colors.main.white,
});

export const ResultScreenStackOptions = ({}: OptionsPropsType &
  NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: '',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.main.black,
    borderBottomColor: 'transparent',
  },
  headerLeft: () => <Text style={styles.title}>Your AI Cover 💫</Text>,
});

export const PaywallScreenStackOptions = ({}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: '',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: 'transparent',
    borderBottomColor: 'transparent',
  },
  headerLeft: () => false,

  ...TransitionPresets.ModalSlideFromBottomIOS, // Add this to enable slide-up transition
});

export const SettingsScreenStackOptions = ({
  navigation,
}: OptionsPropsType & NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  title: '',
  headerShadowVisible: false,
  headerStyle: {
    backgroundColor: theme.colors.main.black,
    borderBottomColor: 'transparent',
  },
  headerLeft: () => (
    <Pressable
      style={styles.settingsButton}
      onPress={() => {
        triggerVibration();
        onPressBackButton(navigation);
      }}></Pressable>
  ),
});

export const Paywall2ScreenStackOptions = ({}: OptionsPropsType &
  NativeStackNavigationOptionsType) => ({
  gestureEnabled: false,
  headerShown: false,
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    height: 40,
    width: WIDTH,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
  },
  paywallBack: {
    width: 25,
    height: 25,
  },
  backButtonIcon: {
    color: theme.colors.grey[200],
  },
  backImage: {
    height: 20,
    width: 20,
  },
  title: {
    fontSize: 22,
    fontFamily: theme.font.bold,
    color: '#FFF',
    marginLeft: 10,
  },
  settingsButton: {
    width: 20,
    height: 20,
    marginRight: 5,
  },
  settingsImage: {
    height: 20,
    width: 20,
  },
  logo: {width: 65, height: 16, marginLeft: 5},
  skipText: {
    fontSize: 14,
    color: '#A1A1A1',
  },
});
