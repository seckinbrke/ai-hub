/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Collapsible} from 'react-native-fast-collapsible';
import {theme} from '../constants/theme';
import MotionPress from './Motion/MotionPress';
import LinearGradient from 'react-native-linear-gradient';
import {triggerVibration} from '../common/functions';

const PlanOption = ({
  title,
  price,
  plan,
  details,
  isVisible,
  onToggleCollapse, // New prop for toggling collapse
}: any) => {
  return (
    <View
      style={[
        styles.planContainer,
        {
          backgroundColor: isVisible
            ? 'transparent'
            : 'rgba(255, 255, 255, 0.1)',
        },
      ]}>
      {/* Trigger the collapse toggle when the header is pressed */}
      <MotionPress
        onPress={() => {
          triggerVibration();
          onToggleCollapse();
        }}>
        <View style={styles.planHeader}>
          <Text style={styles.planTitle}>{title}</Text>
          <Text style={styles.planPrice}>
            {price}
            <Text style={styles.plan}> / {plan}</Text>
          </Text>
        </View>
      </MotionPress>

      {/* Collapsible component from the library */}
      <Collapsible duration={250} isVisible={isVisible}>
        <LinearGradient
          colors={['transparent', '#444', '#444', '#444', 'transparent']}
          style={styles.seperator}
          start={{x: 0, y: 0}}
          end={{x: 1, y: 0}}
        />
        <View style={styles.planDetails}>
          {details.map((detail: string, index: number) => (
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginVertical: 8,
              }}>
              <View
                style={{
                  padding: 4,
                  paddingHorizontal: 6,
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  borderRadius: 100,
                }}>
                <Text style={{color: 'white'}}>✓</Text>
              </View>
              <Text key={index} style={styles.planDetailText}>
                {` ${detail}`}
              </Text>
            </View>
          ))}
        </View>
      </Collapsible>
    </View>
  );
};

export default PlanOption;

const styles = StyleSheet.create({
  planContainer: {
    marginBottom: 20,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#444',
    padding: 24,
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  planHeader: {
    // alignItems: 'center',
  },
  planTitle: {
    fontSize: 16,
    color: '#fff',
    fontFamily: theme.font.regular,
  },
  plan: {
    fontSize: 18,
    color: '#fff',
    fontFamily: theme.font.regular,
  },
  planPrice: {
    marginTop: 16,
    fontSize: 30,
    color: '#fff',
    fontFamily: theme.font.medium,
  },
  planDetails: {
    marginTop: 10,
  },
  planDetailText: {
    fontSize: 15,
    color: '#aaa',
    marginVertical: 2,
    fontFamily: theme.font.regular,
    marginLeft: 8,
  },
  seperator: {
    height: 1,
    marginTop: 24,
    marginBottom: 16,
  },
});
