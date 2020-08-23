import React from 'react';
import {FooterHeaderComponent} from './categoryList';
import {trendingBrands} from '../commons/models';
import {StyleSheet, View, FlatList} from 'react-native';
import SectionHeader from './sectionHeader';
import TrendingBrandItem from './trendingBrandItem';

export default function TrendingBrandList() {
  const renderItem = ({item}) => (
    <TrendingBrandItem
      name={item.name}
      distance={item.distance}
      image={item.image}
    />
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <View style={styles.container}>
      <SectionHeader title="Trending brands" />
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={trendingBrands}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        ListFooterComponent={FooterHeaderComponent}
        ListHeaderComponent={FooterHeaderComponent}
      />
    </View>
  );
}

const styles = StyleSheet.create({

  itemSeparator: {
    width: 12,
  },

  container:{
      marginVertical: 24
  }
});
