import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {WIDTH} from '../common/constants';

const ButtonCard = ({
  title,
  bgColor,
  onPress,
  borderBottomLeftRadius,
  borderBottomRightRadius,
  height,
  width,
}: any) => {
  return (
    <TouchableOpacity
      style={[
        styles.buttonCard,
        {
          backgroundColor: bgColor,
          borderBottomRightRadius,
          borderBottomLeftRadius,
          height,
          width,
        },
      ]}
      onPress={onPress}>
      <View style={styles.buttonContent}>
        {/* <Image source={icon} style={styles.buttonIcon} /> */}
        <Text style={styles.buttonText}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const HomeScreen = () => {
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
          <ButtonCard
            title="Talk with Echo"
            bgColor="#7BF6AD"
            // icon={require('./assets/mic.png')}
            borderBottomLeftRadius={50}
            height={248}
            width={WIDTH / 2 - 24}
            onPress={() => {}}
          />
        </View>
        <View style={styles.rightButtons}>
          <ButtonCard
            title="Chat With Echo"
            bgColor="#BDF388"
            // icon={require('./assets/chat.png')}
            height={120}
            width={WIDTH / 2 - 24}
            onPress={() => {}}
          />
          <ButtonCard
            title="Search By Image"
            bgColor="#E2E7FF"
            // icon={require('./assets/search.png')}
            borderBottomRightRadius={50}
            height={120}
            width={WIDTH / 2 - 24}
            onPress={() => {}}
          />
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
    justifyContent: 'space-between',
  },
  leftButton: {
    flex: 1, // Occupies one-third of the space
  },
  rightButtons: {
    flex: 1, // Occupies two-thirds of the space
    justifyContent: 'space-between',
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
