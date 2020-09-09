import React, {useState, useRef} from 'react';
import {FlatList, Image, StyleSheet, View, Dimensions} from 'react-native';
import Indicators from './indicators';

const {height, width} = Dimensions.get('window');
const CAROUSEL_HEIGHT_THRESHOLD = 3;
const HEIGHT = height / CAROUSEL_HEIGHT_THRESHOLD;

const renderItem = ({item}) => (
  <Image source={item} resizeMode="cover" style={styles.image} />
);

export default function Carousel({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const {index} = viewableItems[0];
    setCurrentIndex(index);
  });

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        horizontal={true}
        decelerationRate="fast"
        snapToInterval={width}
        bounces={false}
        removeClippedSubviews={true}
        maxToRenderPerBatch={1}
        initialNumToRender={1}
        windowSize={1}
        viewabilityConfig={viewabilityConfig.current}
        onViewableItemsChanged={onViewableItemsChanged.current}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
      />
      <Indicators currentIndex={currentIndex} carouselSize={images.length} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: HEIGHT,
    width: '100%',
    position: 'relative',
    alignItems: 'center',
  },
  image: {
    height: HEIGHT,
    width: width,
  },
});
