import React from 'react';
import {Back, Refresh} from '../components/Icons';
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
  gestureEnabled: true,
  headerShown: false,
});

export const TabWrapperScreenOptions = () => ({
  headerShown: true,
  headerTitle: '',
  headerTransparent: true,
  headerTitleStyle: {
    color: '#FFF',
    fontSize: 22,
  },
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
    <MotionPress
      onPress={onPress}
      style={styles.buttonContainer}>
      <Refresh color={'white'} height={22} width={22} />
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
