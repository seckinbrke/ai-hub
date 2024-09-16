import React from 'react';
import {
  Pressable,
  Text,
  View,
  ViewStyle,
  StyleSheet,
  TextInput,
} from 'react-native';
// import {PROMPTS} from '../../constants/prompts';
import {theme} from '../constants/theme';
import {triggerVibration} from '../common/functions';

type ImagePromptInputProps = {
  prompt: string;
  handleSearchInput: (text: string) => void;
  searchInputErrorMessage: string;
  placeholder: string;
  containerStyle?: ViewStyle;
};

const ImagePromptInput = ({
  prompt,
  handleSearchInput,
  searchInputErrorMessage,
  placeholder,
}: ImagePromptInputProps) => {
  const handleOnFocus = () => {
    // Add focus animations or actions here
  };

  const handleSurpriseMeButton = () => {
    const PROMPTS = ['a cat', 'a dog', 'a sunset', 'a beach', 'a mountain'];
    triggerVibration();
    const randomIndex = Math.floor(Math.random() * PROMPTS.length);
    handleSearchInput(PROMPTS[randomIndex]);
  };

  return (
    <View style={[styles.container]}>
      <View style={styles.inputWrapper}>
        <Text style={styles.title}>Enter Prompt</Text>
        <TextInput
          blurOnSubmit
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          keyboardAppearance="dark"
          keyboardType="web-search"
          returnKeyType="done"
          placeholder={placeholder}
          value={prompt}
          style={[
            styles.textInput,
            searchInputErrorMessage && styles.inputError,
          ]}
          onChangeText={handleSearchInput}
          placeholderTextColor={theme.colors.grey[600]}
          selectionColor={theme.colors.main.secondary}
          onFocus={handleOnFocus}
          multiline
        />
        <View style={styles.footer}>
          <Pressable
            onPress={handleSurpriseMeButton}
            style={styles.surpriseMeButton}>
            <Text style={styles.surpriseMeText}>Surprise me!</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

export default ImagePromptInput;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderRadius: 12,
  },
  inputWrapper: {
    width: '100%',
    borderRadius: 12,
    backgroundColor: 'rgba(255,255,255,0.15)',
    paddingVertical: 24,
    paddingHorizontal: 24,
  },
  title: {
    fontSize: 16,
    color: theme.colors.text.base,
    fontFamily: 'SFProRounded-Medium',
  },
  footer: {
    width: '100%',
    alignItems: 'flex-end',
  },
  surpriseMeButton: {
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 10,
    backgroundColor: theme.colors.background.secondary,
  },
  surpriseMeText: {
    color: theme.colors.main.white,
    fontFamily: 'SFProRounded-Regular',
    fontSize: 12,
  },
  textInput: {
    backgroundColor: 'transparent',
    color: theme.colors.text.base,
    fontFamily: 'SFProRounded-Regular',
    fontSize: 12,
    minHeight: 50,
  },
  inputError: {
    borderColor: 'red',
    borderWidth: 1,
  },
});
