import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import SettingsButton from '../components/SettingsButton';
import {Refresh} from '../components/Icons';

const SettingsScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '100%',
          backgroundColor: '#C8FEEE',
          borderRadius: 15,
          flexDirection: 'row',
          padding: 16,
          paddingVertical: 24,
        }}>
        <View style={{flex: 0.25}}>
          <Image
            source={require('../assets/stars.png')}
            style={{resizeMode: 'contain', width: 60, height: 60}}
          />
        </View>
        <View style={{flex: 0.75}}>
          <Text style={{fontSize: 18, fontWeight: 'bold'}}>Premium Plan</Text>
          <Text style={{fontSize: 12, marginTop: 8}}>
            Upgrade your plan and get access to all premium features.
          </Text>
        </View>
      </View>
      <View style={{marginTop: 32}}></View>
      <SettingsButton
        text="Share with Friends"
        onPress={() => console.log('Account')}
        logo={<Refresh color={'white'} height={15} width={15} />}
      />
      <SettingsButton
        text="Rate Us"
        onPress={() => console.log('Account')}
        logo={<Refresh color={'white'} height={15} width={15} />}
      />
      <SettingsButton
        text="Privacy Policy"
        onPress={() => console.log('Account')}
        logo={<Refresh color={'white'} height={15} width={15} />}
      />
      <SettingsButton
        text="Terms of Use"
        onPress={() => console.log('Account')}
        logo={<Refresh color={'white'} height={15} width={15} />}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
  },
});

export default SettingsScreen;
