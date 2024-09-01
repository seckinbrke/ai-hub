/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AlertNotificationRoot} from 'react-native-alert-notification';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import SplashScreen from 'react-native-splash-screen';
import {fetchPurchases} from './common/functions';
import {useDispatch} from 'react-redux';
import {setIsSubs} from './redux/features/appSlice';
import StackWrapper from './stack';
import {theme} from './constants/theme';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initApp = async () => {
      // const sub = await fetchPurchases(true);
      // dispatch(setIsSubs(sub));
      SplashScreen.hide();
    };

    initApp(); // Execute the initialization function
  }, [dispatch]);

  return (
    <GestureHandlerRootView
      style={{flex: 1, backgroundColor: theme.colors.main.black}}>
      <AlertNotificationRoot theme={'dark'} colors={theme.colors.alerts as any}>
        <SafeAreaProvider
          style={{flex: 1, backgroundColor: theme.colors.main.black}}>
          <NavigationContainer>
            <StackWrapper />
          </NavigationContainer>
        </SafeAreaProvider>
      </AlertNotificationRoot>
    </GestureHandlerRootView>
  );
};

export default App;
