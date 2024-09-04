import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {MainMenuCard1, MainMenuCard2, MainMenuCard3} from '../components/MainMenuCards';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.title}>
          Hello, <Text style={styles.name}>James</Text>
        </Text>
        <Text style={styles.subTitle}>How can I assist you right now?</Text>
      </View>
      <View style={styles.buttonContainer}>
        <View style={styles.leftButton}>
          <MainMenuCard1 onPress={() => navigation.navigate('ChatScreen')} />
        </View>
        <View style={styles.rightButtons}>
          <MainMenuCard2 onPress={() => {}} />
          <MainMenuCard3 onPress={() => {}} />
        </View>
      </View>
      {/* Additional components like recent searches go here */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    paddingTop: 86,
  },
  title: {
    fontSize: 32,
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
  buttonContainer: {
    marginTop: 24,
    flexDirection: 'row',
    alignSelf: 'center',
  },
  leftButton: {
    flex: 1,
    alignItems: 'center',
  },
  rightButtons: {
    flex: 1, // Occupies two-thirds of the space
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonCard: {
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10, // Adding depth to the buttons,
    borderRadius: 15,
  },
  buttonContent: {
    alignItems: 'center',
  },
  buttonIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    color: '#0D0D0D', // Dark text for contrast
    fontWeight: '600',
  },
});

export default HomeScreen;
