import React, {useRef, useState} from 'react';
import {Dimensions, FlatList} from 'react-native';
import PlaceMenu from './placeMenu';
import PlaceDirectionTab from './tabs/placeDirectionTab';
import PlaceMenuTab from './tabs/placeMenuTab';
import PlaceReviewTab from './tabs/placeReviewTab';

const {width} = Dimensions.get('window');
const components = [
  // tab content goes here
  <PlaceMenuTab />,
  <PlaceDirectionTab />,
  <PlaceReviewTab />,
];

// tab component render
const renderItem = ({item}) => item;

export default function PlacePaging() {
  const [currentMenuIndex, setCurrentMenuIndex] = useState(0);

  const onMenuItemPress = (index) => {
    setCurrentMenuIndex(index);
    flatListRef.current.scrollToIndex({index});
  };

  const onViewableItemsChanged = useRef(({viewableItems}) => {
    const viewableItem = viewableItems[0];
    if (viewableItem) {
      const {index} = viewableItems[0];
      setCurrentMenuIndex(index);
    }
  });

  const viewabilityConfig = useRef({
    viewAreaCoveragePercentThreshold: 50,
  });

  const flatListRef = useRef(null);

  return (
    <>
      <PlaceMenu
        onMenuItemPress={onMenuItemPress}
        currentIndex={currentMenuIndex}
      />

      <FlatList
        ref={flatListRef}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={components}
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
    </>
  );
}
