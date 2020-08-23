import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {H4, P} from './typography';

export default function SectionHeader({title, moreText, onMorePress}) {
  return (
    <View style={styles.container}>
      <H4 style={styles.titleText} children={title} />
      <TouchableOpacity>
        <P style={styles.moreText}>{moreText || 'View all'}</P>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingBottom:16
  },

  titleText: {
    textTransform: 'capitalize',
  },

  moreText: {
      color: '#34807d'
  }
});
