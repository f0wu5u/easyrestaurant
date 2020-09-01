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
        ItemSeparatorComponent={ItemSeparator}
        ListHeaderComponent={HeaderFooter}
        ListFooterComponent={HeaderFooter}
      />
    </View>
  );
}

const ItemSeparator = () => <View style={styles.itemSeparator} />;
const HeaderFooter = () => <View style={styles.headerFooter} />


const styles = StyleSheet.create({
  container: {
    marginVertical: 24,
  },

  itemSeparator: {
    width: 12,
  },

  headerFooter: {
      width : 24
  }
});
