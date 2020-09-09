import React from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {P} from './typography';

export default function TrendingListItem({name, distance, image}) {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} resizeMode="contain" source={image} />
      <P style={styles.name}>{name}</P>

      <View style={styles.distanceContainer}>
        <P style={styles.distanceText}>{distance}</P>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#eee',
    width: 100,
    padding: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    width: 50,
    height: 50,
  },

  name: {
    fontSize: 12,
    fontFamily: 'FiraSansBold',
    marginVertical: 4,
  },

  distanceContainer:{
      paddingHorizontal: 8,
      paddingVertical: 5,
      borderRadius:5,
      backgroundColor:"#eeeeee",
  },

  distanceText: {
      fontSize:10,
      fontFamily: "FiraSansMedium"
  }
});
