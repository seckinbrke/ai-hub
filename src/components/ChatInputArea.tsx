import React from 'react';
import {View, StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';
import PromptInput from '../components/PromptInput';
import MotionPress from '../components/Motion/MotionPress';
import {Send} from '../components/Icons';
import {theme} from '../constants/theme';
import {WIDTH} from '../common/constants';
// import SoundRecorder from 'react-native-sound-recorder';

const ChatInputArea = ({
  question,
  setQuestion,
  handleSubmit,
  isLoading,
}: any) => {
  // const [intervalId, setIntervalId] = useState<any>(null);
  // const [recordingTime, setRecordingTime] = useState(0);
  // const blinkAnim = useRef(new Animated.Value(0)).current;

  // useEffect(() => {
  //   if (recording) {
  //     Animated.loop(
  //       Animated.sequence([
  //         Animated.timing(blinkAnim, {
  //           toValue: 1,
  //           duration: 500,
  //           useNativeDriver: true,
  //         }),
  //         Animated.timing(blinkAnim, {
  //           toValue: 0,
  //           duration: 500,
  //           useNativeDriver: true,
  //         }),
  //       ]),
  //     ).start();
  //   } else {
  //     blinkAnim.stopAnimation();
  //     blinkAnim.setValue(0);
  //   }
  // }, [recording]);

  // const startRecording = async () => {
  //   console.log('started 1');

  //   setRecording(true);
  //   setRecordingTime(0); // Reset the recording time to 0
  //   const id = setInterval(() => {
  //     setRecordingTime(prevTime => prevTime + 1);
  //   }, 1000); // Update every second
  //   setIntervalId(id);

  //   // Your existing recording logic
  //   try {
  //     SoundRecorder.start(SoundRecorder.PATH_CACHE + `/${Date.now()}.m4a`).then(
  //       () => {
  //         console.log('started recording');
  //       },
  //     );
  //   } catch (error) {
  //     console.error('Error starting recorder:', error);
  //     Alert.alert('Error', 'Error occurred during initiating recorder');
  //     setRecording(false);
  //     clearInterval(id); // Stop updating the time if recording fails
  //   }
  // };

  // const stopRecording = async () => {
  //   try {
  //     SoundRecorder.stop().then(result => {
  //       console.log('stopped recording, audio file saved at: ' + result.path);
  //       handleSubmit(result.path);
  //       setRecording(false);
  //       clearInterval(intervalId); // Stop updating the time when recording stops
  //       setRecordingTime(0); // Optionally reset the time or save it as needed
  //     });
  //   } catch (error) {
  //     console.error('Error stopping recorder:', error);
  //     Alert.alert('Error', 'Error occurred during stopping recorder');
  //   }
  // };

  // const cancelRecording = () => {
  //   setRecording(false);
  //   clearInterval(intervalId); // Stop updating the time when recording stops
  //   setRecordingTime(0); // Reset the time to 0
  //   // Cancel the recording process here
  //   SoundRecorder.stop()
  //     .then(() => {
  //       console.log('Recording canceled');
  //       // Optionally delete the recording file if necessary
  //     })
  //     .catch(error => {
  //       console.error('Error canceling recorder:', error);
  //     });
  // };

  // const formatTime = (timeInSeconds: number) => {
  //   const minutes = Math.floor(timeInSeconds / 60);
  //   const seconds = timeInSeconds % 60;
  //   return `${minutes < 10 ? '0' : ''}${minutes}:${
  //     seconds < 10 ? '0' : ''
  //   }${seconds}`;
  // };

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
        <MotionPress onPress={() => handleSubmit()}>
          <LinearGradient
            colors={theme.colors.gradients.generalGradient}
            style={styles.recordViewInner}>
            <Send width={25} height={25} color={'black'} />
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
  recording: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
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
  recordViewInner: {
    borderRadius: 50,
    width: 45,
    height: 45,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideToCancelView: {
    position: 'absolute',
    top: -40,
    zIndex: 10,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  slideToCancelText: {
    color: 'white',
    fontSize: 14,
  },
  recordingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    paddingHorizontal: 16,
    paddingVertical: 14.5,
  },
  blinkingCircle: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'red',
    marginRight: 8,
  },
});

export default ChatInputArea;

/* <SafeAreaView edges={['bottom']} style={styles.safeAreaBottom}>
<View style={styles.bottomLeft}>
  {!recording ? (
    <PromptInput
      text={question}
      placeholder={'Write anything here....'}
      onChangeText={setQuestion}
      onSubmitEditing={handleSubmit}
      isLoading={isLoading}
    />
  ) : (
    <View style={styles.recordingContainer}>
      <Animated.View
        style={[
          styles.blinkingCircle,
          {
            opacity: blinkAnim,
          },
        ]}
      />
      <Text style={styles.recording}> {formatTime(recordingTime)}</Text>
      <MotionPress onPress={() => cancelRecording()}>
        <Rubbish width={20} height={20} />
      </MotionPress>
    </View>
  )}
</View>
<View style={styles.bottomRight}>
  <MotionPress
    onPress={() => (recording ? stopRecording() : startRecording())}>
    <LinearGradient
      colors={theme.colors.gradients.generalGradient}
      style={styles.recordViewInner}>
      {recording ? (
        <Send width={20} height={20} color={'black'} />
      ) : (
        <Microphone width={20} height={20} />
      )}
    </LinearGradient>
  </MotionPress>
</View>
</SafeAreaView> */
