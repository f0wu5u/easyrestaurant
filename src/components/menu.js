import React from 'react';
import {View, Image, StyleSheet} from 'react-native';
import {H5, P} from './typography';

export default function Menu({image, title, calories, price, description}) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={image} resizeMode="cover" />
      <View style={styles.contentContainer}>
        <View style={styles.titleContainer}>
          <H5 numberOfLines={1} style={styles.titleText}>
            {title}
          </H5>
          <P numberOfLines={1} style={styles.caloriesText}>
            {calories}
          </P>
        </View>
        <P numberOfLines={2} style={styles.descriptionText}>
          {description}
        </P>
        <P style={styles.priceText} numberOfLines={1}>
          {price}
        </P>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // borderRadius: 6,
    // borderWidth: 2,
    // borderColor: '#d9d9d9',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'flex-start',
  },

  image: {
    width: 100,
    height: 90,
    borderRadius: 16,
  },

  contentContainer: {
    marginHorizontal: 12,
    flex: 1,
  },

  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 6,
  },

  titleText: {
    marginEnd: 6,
    flex: 1,
  },

  caloriesText: {
    color: '#8f8f8f',
    fontSize: 12,
  },

  descriptionText: {
    marginBottom: 5,
  },

  priceText: {
    fontFamily: 'FiraSansBold',
    fontSize: 16,
    color: '#34807d',
  },
});
