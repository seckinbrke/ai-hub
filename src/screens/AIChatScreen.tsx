import React from 'react';
import {StyleSheet, View} from 'react-native';
import {CATEGORY_ITEMS} from '../common/constants';
import MasonryList from '@react-native-seoul/masonry-list';
import CategoryItem from '../components/CategoryItem';

const AIChatScreen = ({navigation}: any) => {
  return (
    <View style={styles.container}>
      <MasonryList
        style={styles.list}
        data={CATEGORY_ITEMS}
        renderItem={({item}) => (
          <CategoryItem navigation={navigation} item={item} />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        ListFooterComponent={<View style={styles.seperator} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    flexDirection: 'row',
  },
  contentContainer: {
    paddingBottom: 16,
    alignSelf: 'stretch',
  },
  list: {alignSelf: 'stretch'},
  seperator: {
    height: 100,
  },
});

export default AIChatScreen;
