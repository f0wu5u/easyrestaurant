import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

export default function HorizontalList({keyExtractor, data, renderItem, style}) {
  return (
    <View style={{...styles.container,...style}}>
      <FlatList
        horizontal
        listKey="horizontal-scroll"
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={data}

        renderItem={renderItem}
        ItemSeparatorComponent={ItemSeparator}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
}

export const ItemSeparator = () => <View style={styles.itemSeparator} />;


const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },

  itemSeparator: {
    width: 12,
  },

  contentContainer: {
      paddingHorizontal : 24
  }
});
