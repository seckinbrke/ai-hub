import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const PurchaseScreen = () => {
  return <SafeAreaView style={styles.container}></SafeAreaView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default PurchaseScreen;
