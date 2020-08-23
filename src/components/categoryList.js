import React from 'react';
import {FlatList, View, StyleSheet} from 'react-native';
import {categories} from '../commons/models';
import CategoryItem from './categoryItem';

export default function CategoryList() {
  const renderItem = ({item}) => (
    <CategoryItem
      caption={item.caption}
      image={item.image}
      title={item.title}
      backgroundColor={item.backgroundColor}
    />
  );

  const itemSeparator = () => <View style={styles.itemSeparator} />;

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={categories}
        renderItem={renderItem}
        ItemSeparatorComponent={itemSeparator}
        ListFooterComponent={FooterHeaderComponent}
        ListHeaderComponent={FooterHeaderComponent}
      />
    </View>
  );
}



export const FooterHeaderComponent = () => <View style={styles.listFooter} />;

const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },

  itemSeparator: {
    width: 12,
  },

  listFooter: {
    width: 24,
  },
});
