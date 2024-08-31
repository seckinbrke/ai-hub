import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const BackgroundWithLines = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Hello, <Text style={styles.name}>James </Text>{' '}
        </Text>
        <Text style={styles.subTitle}>How can I assist you right now?</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    padding: 16,
  },
  title: {
    fontSize: 32,
    // color gray
    color: '#B0B0B0',
  },
  name: {
    fontSize: 32,
    color: 'white',
    fontWeight: '600',
  },
  subTitle: {
    fontSize: 20,
    color: '#B0B0B0',
    marginTop: 8,
  },
});

export default BackgroundWithLines;
