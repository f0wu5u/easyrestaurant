import React from 'react';
import {View, FlatList, StyleSheet} from 'react-native';

export default function HorizontalList({keyExtractor, data, renderItem, style}) {
  return (
    <View style={{...styles.container,...style}}>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={keyExtractor}
        data={data}
        renderItem={renderItem}
        contentContainerStyle={styles.contentContainer}
        ItemSeparatorComponent={ItemSeparator}
      />
    </View>
  );
}

const ItemSeparator = () => <View style={styles.itemSeparator} />;


const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },

  itemSeparator: {
    width: 12,
  },

  contentContainer: {
    paddingHorizontal: 24,
  },
});
