import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {H5, P} from './typography';

export default function DishListItem({image, name, description}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} />
      <H5 style={styles.nameText}>{name}</H5>
      <P style={styles.descriptionText}>{description}</P>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 200,
  },

  image: {
    width: '100%',
    height: 100,
    borderRadius: 16,
  },

  nameText: {
    marginTop: 6,
    fontSize: 14,
    fontFamily: 'FiraSansBold',
  },
  descriptionText: {
    fontSize: 12,
    color: '#8f8f8f',
  },
});
