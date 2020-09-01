import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {H4, P} from './typography';

export default function SectionHeader({title, linkText, onLinkPress}) {
  return (
    <View style={styles.container}>
      <H4 style={styles.titleText}>{title}</H4>
      <TouchableOpacity onPress={onLinkPress}>
        <P style={styles.linkText}>{linkText || 'View all'}</P>
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
  },

  titleText: {
    textTransform: 'capitalize',
  },

  linkText: {
    color: '#34807d',
  },
});
