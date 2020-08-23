import React from 'react';
import {FooterHeaderComponent} from './categoryList';
import PopularPlaceItem from './popularPlaceItem';
import {popularEatries} from '../commons/models';
import {StyleSheet, View, FlatList} from 'react-native';
import SectionHeader from './sectionHeader';

export default function PopularList() {
  const renderItem = ({item}) => (
    <PopularPlaceItem
      name={item.name}
      rating={item.rating}
      location={item.location}
      liked={item.liked}
      opened={item.opened}
      image={item.image}
    />
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <>
      <SectionHeader title="Popular eatries" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={popularEatries}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        ListFooterComponent={FooterHeaderComponent}
        ListHeaderComponent={FooterHeaderComponent}
      />
    </>
  );
}

const styles = StyleSheet.create({

  itemSeparator: {
    width: 12,
  },
});
