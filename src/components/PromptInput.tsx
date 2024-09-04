import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {theme} from '../constants/theme';
// import {Send} from './Icons';

export type Props = {
  text: string;
  placeholder: string;
  style?: any;
  onSubmitEditing: any;
  isLoading?: boolean;
  onChangeText: any;
  containerStyle?: any;
  iconStyle?: any;
  // buttonStyle?: any;
};

const PromptInput: React.FC<Props> = ({
  text,
  placeholder,
  onChangeText,
  onSubmitEditing,
  isLoading,
  // buttonStyle,
}) => {
  const [inputHeight, setInputHeight] = useState(45);

  return (
    <View style={[styles.container, {minHeight: inputHeight}]}>
      <View style={styles.inputContainer}>
        <TextInput
          blurOnSubmit
          autoCapitalize="none"
          autoComplete="off"
          autoCorrect={false}
          keyboardAppearance={'dark'}
          keyboardType={'web-search'}
          multiline
          style={[styles.input, {height: inputHeight}]}
          placeholder={placeholder}
          value={text}
          onChangeText={onChangeText}
          onSubmitEditing={onSubmitEditing}
          placeholderTextColor={'grey'}
          editable={!isLoading}
          selectionColor={theme.colors.gradients.generalGradient[1]}
          onContentSizeChange={event =>
            setInputHeight(Math.min(event.nativeEvent.contentSize.height, 150))
          }
        />
      </View>
      {/* <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.sendButton, buttonStyle]}
          onPress={onSubmitEditing}
          disabled={!text?.length}>
          <Send width={28} height={28} color={'white'} />
        </TouchableOpacity>
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 30,
    paddingLeft: 16,
    paddingVertical: 8,
  },
  inputContainer: {
    flex: 0.95,
    padding: 10,
  },
  buttonContainer: {
    flex: 0.15,
  },
  sendButton: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a0e1e0',
    borderRadius: 20,
  },
  input: {
    color: theme.colors.main.white,
    paddingVertical: -10,
    maxHeight: 150,
    fontFamily: theme.font.regular,
  },
});

export default PromptInput;
