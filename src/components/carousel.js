import React, {useRef, useState} from 'react';
import {Dimensions, FlatList, Image, StyleSheet, View} from 'react-native';
import Indicators from './indicators';

const renderItem = ({item}) => <Image source={item} style={styles.image} />;

const {height, width} = Dimensions.get('window');
const CAROUSEL_HEIGHT_THRESHOLD = 3;
const HEIGHT = height / CAROUSEL_HEIGHT_THRESHOLD;
export default function Carousel({images}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const viewableItem = viewableItems[0];
    if (viewableItem) {
      const {index} = viewableItems[0];
      setCurrentIndex(index);
    }
  });

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={images}
        decelerationRate="fast"
        pagingEnabled={true}
        removeClippedSubviews={true}
        bounces={false}
        maxToRenderPerBatch={1}
        initialNumToRender={1}
        windowSize={1}
        snapToInterval={width}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderItem}
        onViewableItemsChanged={onViewableItemsChanged.current}
        viewabilityConfig={viewabilityConfig.current}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />
      <Indicators carouselSize={images.length} currentIndex={currentIndex} />
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
