import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {H5, P} from './typography';

export default function CategoryListItem({
  image,
  title,
  caption,
  backgroundColor,
}) {
  return (
    <View style={{...styles.container, backgroundColor}}>
      <View style={styles.imageContainer}>
        <Image style={styles.categoryImage} source={image} />
      </View>
      <H5 style={styles.categoryTitle}>{title}</H5>
      <P style={styles.categoryCaption}>{caption}</P>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 120,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#f5cecf',
    borderRadius: 10,
    padding: 16,
  },

  imageContainer: {
    width: 50,
    height: 50,
    backgroundColor: 'rgba(255,255,255,0.6)',
    borderRadius: 200,
    position: 'relative',
    marginBottom: 20,
  },

  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 10,
  },

  categoryTitle: {
    textTransform: 'uppercase',
    fontSize: 14,
  },

  categoryCaption: {
    fontSize: 10,
  },
});
