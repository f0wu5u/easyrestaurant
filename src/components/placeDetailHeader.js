import React from 'react';
import {StyleSheet, View} from 'react-native';
import Carousel from './carousel';
import HeaderMenu from './headerMenu';
import {images} from '../commons/models';

export default function PlaceDetailHeader() {
  return (
    <View style={styles.container}>
      <HeaderMenu />
      <Carousel images={images}/>
    </View>
  );
}



const styles = StyleSheet.create({
    container : {
        // height: 300,
        backgroundColor: '#eee',
        position: 'relative'
    }
})