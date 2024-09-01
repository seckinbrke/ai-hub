import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {WIDTH} from '../common/constants';
import {Chat, Microphone, Photo} from './Icons';
import MotionPress from './Motion/MotionPress';

export const MainMenuCard1 = ({onPress}: any) => {
  return (
    <MotionPress style={[styles.buttonCard, styles.button1]} onPress={onPress}>
      <View style={styles.buttonContent1}>
        {/* <Image source={icon} style={styles.buttonIcon} /> */}
        <View style={styles.button1Left}>
          <View style={styles.circle}>
            <Microphone height={20} width={20} />
          </View>
          <Text style={styles.buttonText1}>Talk with Echo</Text>
        </View>
        <View style={styles.button1Right}>
          <Image
            source={require('../assets/button1-bg.png')}
            style={styles.button1Image}
          />
        </View>
      </View>
    </MotionPress>
  );
};

export const MainMenuCard2 = ({onPress}: any) => {
  return (
    <MotionPress style={[styles.buttonCard, styles.button2]} onPress={onPress}>
      <Image
        source={require('../assets/button2-bg.png')}
        style={styles.button2Image}
      />
      <View style={styles.buttonContent2}>
        {/* <Image source={icon} style={styles.buttonIcon} /> */}
        <View style={styles.circle}>
          <Chat height={20} width={20} />
        </View>
        <Text style={styles.buttonText2}>Chat with Echo</Text>
      </View>
    </MotionPress>
  );
};

export const MainMenuCard3 = ({onPress}: any) => {
  return (
    <MotionPress style={[styles.buttonCard, styles.button3]} onPress={onPress}>
      <Image
        source={require('../assets/button3-bg.png')}
        style={styles.button3Image}
      />
      <View style={styles.buttonContent3}>
        <View style={styles.circle}>
          <Photo height={20} width={20} />
        </View>
        <Text style={styles.buttonText3}>Create Image</Text>
      </View>
    </MotionPress>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    marginTop: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonCard: {
    shadowColor: 'grey',
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 0.4,
    shadowRadius: 3,
    elevation: 10,
    borderRadius: 15,
  },

  buttonIcon: {
    width: 32,
    height: 32,
    marginBottom: 8,
  },

  // 1
  buttonContent1: {
    flex: 1,
    flexDirection: 'row',
  },
  buttonText1: {
    fontSize: 24,
    lineHeight: 40,
    color: '#0D0D0D',
    fontWeight: '600',
    marginTop: 32,
    textAlign: 'left',
    marginLeft: 16,
  },
  button1: {
    backgroundColor: '#7BF6AD',
    borderBottomLeftRadius: 50,
    height: 248,
    width: WIDTH / 2 - 30,
    flexDirection: 'row',
  },
  button1Left: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1Right: {
    flex: 0.55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  button1Image: {
    position: 'absolute',
    top: -9,
    right: 0,
  },

  // 2
  buttonText2: {
    fontSize: 16,
    color: '#0D0D0D',
    fontWeight: '600',
    marginTop: 16,
  },
  buttonContent2: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  button2: {
    backgroundColor: '#BDF388',
    height: 120,
    width: WIDTH / 2 - 30,
  },
  button2Image: {
    position: 'absolute',
    top: 0,
    right: 0,
  },

  // 3
  buttonText3: {
    fontSize: 16,
    color: '#0D0D0D',
    fontWeight: '600',
    marginTop: 16,
  },
  buttonContent3: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  button3: {
    backgroundColor: '#E2E7FF',
    borderBottomRightRadius: 50,
    height: 120,
    width: WIDTH / 2 - 30,
  },
  button3Image: {
    position: 'absolute',
    top: 0,
    right: 2,
  },

  circle: {
    backgroundColor: 'rgba(0, 0, 0, 0.2)',
    width: 40,
    height: 40,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
