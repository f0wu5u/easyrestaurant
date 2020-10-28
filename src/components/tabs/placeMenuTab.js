import React from 'react';
import {View, StyleSheet} from 'react-native';
import {H4} from '../typography';
import {FlatList} from 'react-native-gesture-handler';
import Menu from '../menu';
import {menu, dishes} from '../../commons/models';
import DishListItem from '../dishListItem';
import {ItemSeparator} from '../horizontalList';
export default function PlaceTabMenu({width}) {
  const renderItem = ({item}) => <Menu {...item} />;
  const renderDish = ({item}) => <DishListItem {...item} />;
  return (
    <View style={{...styles.container, width}}>
      <H4 style={styles.titleText}>Main Course</H4>
      <FlatList
        data={menu}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
        ItemSeparatorComponent={ItemSeparatorComponent}
        keyExtractor={(_, index) => `${index.toString()}-menu`}
        renderItem={renderItem}
      />
      <H4 style={styles.titleText}>Recommended Dishes</H4>
      <FlatList
        data={dishes}
        horizontal
        showsHorizontalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: 200,
          offset: 200 * index,
          index,
        })}
        removeClippedSubviews={true}
        contentContainerStyle={styles.dishListContainer}
        ItemSeparatorComponent={ItemSeparator}
        keyExtractor={(_, index) => `${index.toString()}-dish`}
        renderItem={renderDish}
      />
    </View>
  );
}

const ItemSeparatorComponent = () => (
  <View style={styles.itemSeparatorComponent} />
);

const styles = StyleSheet.create({
  titleText: {
    marginHorizontal: 24,
    marginBottom: 16,
  },
  container: {
    paddingVertical: 32,
  },
  listContainer: {
    paddingHorizontal: 24,
    marginBottom: 24,
  },

  dishListContainer: {
    paddingHorizontal: 24,
  },

  itemSeparatorComponent: {
    height: 1,
    backgroundColor: '#d9d9d9',
  },
});
