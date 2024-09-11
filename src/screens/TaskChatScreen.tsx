/* eslint-disable react-hooks/exhaustive-deps */
import React, {useCallback, useRef, useState, useEffect} from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  View,
  ScrollView,
  Text,
  Keyboard,
  Image,
} from 'react-native';
import ChatInputArea from '../components/ChatInputArea';
import {theme} from '../constants/theme';
import {WIDTH} from '../common/constants';
import AnimatedTyping from '../utils/AnimatedTyping';
import {setFreeRightsToStorage, triggerVibration} from '../common/functions';
import {useDispatch, useSelector} from 'react-redux';
import {setFreeRight} from '../redux/features/appSlice';
import {askToChatGpt} from '../api/chatGPT';

const TaskChatScreen = ({navigation, route}: any) => {
  const dispatch = useDispatch();
  const {item} = route.params;
  const scrollRef = useRef<ScrollView>(null);
  const {freeRights} = useSelector((state: any) => state.app);

  const [question, setQuestion] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [conversation, setConversation] = useState<any>([]);
  const [showingConversation, setShowingConversation] = useState<any>([
    {role: 'system', content: item?.firstMessage},
  ]);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        scrollRef?.current?.scrollToEnd({animated: true});
      },
    );
    return () => {
      keyboardDidShowListener.remove();
    };
  }, []);

  const refreshConversation = useCallback(() => {
    setQuestion('');
    setConversation([]);
    setShowingConversation([{role: 'system', content: item?.firstMessage}]);
  }, []);

  useEffect(() => {
    // Set params only if they haven't been set yet
    if (!route.params?.refreshConversation) {
      navigation.setParams({refreshConversation});
    }
  }, [navigation, refreshConversation, route.params]);

  const prepareFirstQuery = (text: string) => {
    let firstQuery = item?.query.replace('{text}', text);

    return firstQuery;
  };

  const handleSubmit = useCallback(async () => {
    triggerVibration();
    // if (!isSubs && (!freeRights || freeRights <= 0)) {
    //   navigation.navigate('PurchasePage2');
    //   return false;
    // }

    if (question?.length) {
      setTimeout(() => scrollRef?.current?.scrollToEnd({animated: true}), 200);
      let newConversation;

      if (conversation.length === 0) {
        newConversation = [
          {role: 'user', content: prepareFirstQuery(question)},
        ];
      } else {
        newConversation = [...conversation, {role: 'user', content: question}];
      }

      const newShowingConversation = [
        ...showingConversation,
        {role: 'user', content: question},
      ];

      setConversation(newConversation);
      setShowingConversation(newShowingConversation);
      setQuestion('');
      setIsLoading(true);
      const answer = await askToChatGpt(newConversation);

      setNewRightCount();
      setIsLoading(false);
      setConversation([...newConversation, answer]);
      setShowingConversation([...newShowingConversation, answer]);
      setTimeout(() => scrollRef?.current?.scrollToEnd({animated: true}), 200);
    }
  }, [question, conversation]);

  const setNewRightCount = async () => {
    dispatch(setFreeRight(freeRights - 1));
    setFreeRightsToStorage(freeRights - 1);
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 100 : 0}>
      <ScrollView
        ref={scrollRef}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollView}
        keyboardShouldPersistTaps="handled">
        <View style={styles.chatContainer}>
          {showingConversation.map((message: any, index: number) => {
            if (message?.role === 'user') {
              return (
                <View
                  key={`user${index}`}
                  style={[styles.sent, styles.chatBubble]}>
                  <Text
                    selectable
                    selectionColor={'purple'}
                    style={styles.msgText}>
                    {message?.content}
                  </Text>
                </View>
              );
            }
            return (
              <View
                key={`assistant${index}`}
                style={[styles.received, styles.chatBubble]}>
                <AnimatedTyping text={[message?.content]} />
              </View>
            );
          })}
          {isLoading && (
            <View
              key={'typingLoader'}
              style={[styles.received, styles.chatBubble]}>
              <Image
                resizeMode="contain"
                source={require('../assets/typing.gif')}
                style={styles.typingLoader}
              />
            </View>
          )}
        </View>
      </ScrollView>
      <ChatInputArea
        question={question}
        setQuestion={setQuestion}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
      />
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    marginTop: 20,
  },
  chatContainer: {
    flex: 1,
    padding: 16,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },

  sent: {
    backgroundColor: 'rgba(255,255,255,0.1)',
    alignSelf: 'flex-end',
    borderBottomEndRadius: 0,
  },
  received: {
    backgroundColor: 'rgba(255,255,255,0.3)',
    alignSelf: 'flex-start',
    borderEndStartRadius: 0,
  },
  chatBubble: {
    borderRadius: 20,
    paddingVertical: 12,
    marginBottom: 8,
    maxWidth: WIDTH / 2 + 80,
    paddingHorizontal: 16,
  },
  msgText: {
    fontFamily: theme.font.medium,
    fontSize: 12,
    color: theme.colors.main.white,
    letterSpacing: 0.2,
  },
  typingLoader: {
    width: 60,
    height: 15,
  },
  settings: {
    height: 30,
    width: 30,
  },
});

export default TaskChatScreen;
