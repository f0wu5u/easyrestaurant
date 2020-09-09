import React from 'react';
import {View, StyleSheet} from 'react-native';
import HeaderMenu from './HeaderMenu';
import Carousel from './carousel';
import {images} from '../commons/models';
export default function PlaceDetailHeader() {
  return (
    <View style={style.container}>
      <HeaderMenu />
      <Carousel images={images} />
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    // height: 300,
    backgroundColor: '#eee',
    position: 'relative',
  },
});
