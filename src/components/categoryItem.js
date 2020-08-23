import React from 'react';
import {Image, View, StyleSheet} from 'react-native';
import {P, H5} from './typography';
export default function CategoryItem({image, title, caption, backgroundColor}) {
  return (
    <View style={{...styles.container,backgroundColor}}>
      <View style={styles.imageContainer}>
        <Image resizeMode="contain" source={image} style={styles.categoryImage} />
      </View>
      <H5 style={styles.categoryTitle} children={title} />
      <P style={styles.categoryCaption} children={caption} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    width: 120,
    padding: 16,
    alignItems: 'center',
    backgroundColor: '#f5cecf',
  },


  imageContainer: {
    height: 50,
    width: 50,
    borderRadius: 200,
    backgroundColor: 'rgba(255,255,255,.6)',
    position: 'relative',
    marginBottom:20
  },

  categoryImage: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top:10
  },

  categoryTitle: {
      textTransform: "uppercase",
      margin:0,
      fontSize:14
  },

  categoryCaption:{
    fontSize:10,
    margin:0
  },

});
