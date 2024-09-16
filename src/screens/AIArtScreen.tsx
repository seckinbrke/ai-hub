import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ImagePropmtInput from '../components/ImagePromptInput';

const AIArtScreen = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [errorMessage, _] = useState<string>('');

  const onPromptChange = (text: string) => {
    setPrompt(text);
  };

  return (
    <View style={styles.container}>
      <ImagePropmtInput
        prompt={prompt}
        handleSearchInput={onPromptChange}
        searchInputErrorMessage={errorMessage}
        placeholder="Please provide a prompt for the photograph you'd like to create."
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default AIArtScreen;
