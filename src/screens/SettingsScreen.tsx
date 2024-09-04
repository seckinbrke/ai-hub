import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingsButton from '../components/SettingsButton';
import {Privacy, Share, Star, Terms} from '../components/Icons';
import { theme } from '../constants/theme';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.premiumContainer}>
        <View style={styles.imageContainer}>
          <Image source={require('../assets/stars.png')} style={styles.image} />
        </View>
        <View style={styles.textContainer}>
          <Text style={styles.premiumTitle}>Premium Plan</Text>
          <Text style={styles.premiumDescription}>
            Upgrade your plan and get access to all premium features.
          </Text>
        </View>
      </View>
      <View style={styles.spacing} />
      <SettingsButton
        text="Share with Friends"
        onPress={() => console.log('Account')}
        logo={<Share color={'white'} height={18} width={18} />}
      />
      <SettingsButton
        text="Rate Us"
        onPress={() => console.log('Account')}
        logo={<Star color={'white'} height={18} width={18} />}
      />
      <SettingsButton
        text="Privacy Policy"
        onPress={() => console.log('Account')}
        logo={<Privacy color={'white'} height={18} width={18} />}
      />
      <SettingsButton
        text="Terms of Use"
        onPress={() => console.log('Account')}
        logo={<Terms color={'white'} height={18} width={18} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
  premiumContainer: {
    width: '100%',
    backgroundColor: '#C8FEEE',
    borderRadius: 15,
    flexDirection: 'row',
    padding: 16,
    paddingVertical: 24,
  },
  imageContainer: {
    flex: 0.25,
  },
  image: {
    resizeMode: 'contain',
    width: 60,
    height: 60,
  },
  textContainer: {
    flex: 0.75,
  },
  premiumTitle: {
    fontSize: 18,
    fontFamily: theme.font.bold,
  },
  premiumDescription: {
    fontSize: 12,
    marginTop: 8,
    fontFamily: theme.font.regular,
  },
  spacing: {
    marginTop: 32,
  },
});

export default SettingsScreen;
