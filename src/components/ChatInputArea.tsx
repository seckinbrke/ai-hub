import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import PromptInput from '../components/PromptInput';
import MotionPress from '../components/Motion/MotionPress';
import {Microphone} from '../components/Icons';
import {theme} from '../constants/theme';
import {WIDTH} from '../common/constants';

const ChatInputArea = ({question, setQuestion, handleSubmit, isLoading}: any) => {
  return (
    <SafeAreaView edges={['bottom']} style={styles.safeAreaBottom}>
      <View style={styles.bottomLeft}>
        <PromptInput
          text={question}
          placeholder={'Write anything here....'}
          onChangeText={setQuestion}
          onSubmitEditing={handleSubmit}
          isLoading={isLoading}
        />
      </View>
      <View style={styles.bottomRight}>
        <MotionPress onPress={handleSubmit}>
          <LinearGradient
            colors={theme.colors.gradients.generalGradient}
            style={styles.recordView}>
            <Microphone />
          </LinearGradient>
        </MotionPress>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaBottom: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopColor: '#414442',
    borderTopWidth: 1,
    paddingTop: 16,
    width: WIDTH,
    gap: 8,
  },
  bottomLeft: {
    flex: 0.85,
    justifyContent: 'center',
    paddingLeft: 16,
  },
  bottomRight: {
    flex: 0.15,
  },
  recordView: {
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default ChatInputArea;
