import React from 'react';
import {Text, StyleSheet, Image} from 'react-native';
import {theme} from '../constants/theme';
import {WIDTH} from '../common/constants';
import LinearGradient from 'react-native-linear-gradient';
import MotionPress from './Motion/MotionPress';

interface CategoryItemHeaderProps {
  item?: any;
  navigation?: any;
}

const CategoryItem: React.FC<CategoryItemHeaderProps> = ({
  item,
  navigation,
}) => {
  const renderRandomImage = () => {
    const randomImageWithJsx = [
      <Image
        source={require('../assets/category-items/right-lines.png')}
        style={styles.rightLines}
      />,
      <Image
        source={require('../assets/category-items/right-lines-2.png')}
        style={styles.rightLines2}
      />,
      <Image
        source={require('../assets/category-items/top-lines.png')}
        style={styles.topLines}
      />,
      <Image
        source={require('../assets/category-items/top-lines-2.png')}
        style={styles.topLines2}
      />,
    ];
    return randomImageWithJsx[
      Math.floor(Math.random() * randomImageWithJsx.length)
    ];
  };

  const isLargeItem = item.isLarge;
  const GradientWrapper = isLargeItem ? LinearGradient : React.Fragment;

  return (
    <MotionPress
      onPress={() => navigation.navigate('TaskChatScreen', {item})}
      style={[styles.item, isLargeItem ? styles.largeItem : styles.smallItem]}>
      <GradientWrapper
        style={[styles.gradientWrapper, isLargeItem && styles.largeGradient]}
        colors={
          isLargeItem
            ? ['#3D5C89', 'rgba(127, 248, 176, 0.65)', '#317278', '#185C65']
            : []
        }
        start={{x: 0.0, y: 0.0}}
        end={{x: 1.3, y: 1.0}}>
        <Image source={item.imageUrl} style={styles.image} />
        <Text style={styles.itemTitle}>{item.name}</Text>
        <Text style={styles.itemDesc}>{item.desc}</Text>
      </GradientWrapper>
      {isLargeItem && (
        <Image
          source={require('../assets/category-items/bottom-lines.png')}
          style={styles.bottomLines}
        />
      )}
      {!isLargeItem && renderRandomImage()}
    </MotionPress>
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
  item: {
    borderRadius: 12,
    margin: 8,
    backgroundColor: '#212121', // Darker background for the items
    alignSelf: 'stretch',
  },
  largeItem: {
    height: (WIDTH / 2 - 32) * 2, // Larger height for specific items
  },
  smallItem: {
    height: WIDTH / 2 - 40, // Smaller height for others
    padding: 16,
    borderWidth: 1.5,
    borderColor: '#333',
  },
  gradientWrapper: {
    flex: 1,
    borderRadius: 12,
    padding: 16,
  },
  largeGradient: {
    padding: 16,
  },
  image: {
    width: 40,
    height: 40,
    marginBottom: 8,
  },
  itemTitle: {
    fontSize: 16,
    fontFamily: theme.font.regular,
    color: '#FFF',
    marginTop: 12,
  },
  itemDesc: {
    fontSize: 10,
    color: '#FFF',
    fontFamily: theme.font.light,
    marginTop: 8,
  },
  bottomLines: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  topLines: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  rightLines: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  rightLines2: {
    position: 'absolute',
    right: 0,
    bottom: 0,
    resizeMode: 'contain',
    opacity: 0.5,
  },
  topLines2: {
    position: 'absolute',
    top: 0,
    right: 0,
    resizeMode: 'contain',
    opacity: 0.5,
  },
});

export default CategoryItem;
