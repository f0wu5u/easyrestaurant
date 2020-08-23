import React from 'react';
import {View, ImageBackground, StyleSheet} from 'react-native';
import {P, H5} from './typography';
import Icon from 'react-native-vector-icons/Ionicons';

export default function PopularPlaceItem({
  name,
  rating,
  location,
  liked,
  image,
  opened,
}) {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.imageBackground}
        resizeMode="cover">
        <View style={styles.topActions}>
          <View style={styles.placeAccess}>
            <P style={styles.placeAccessText}>
              {opened ? 'Opended' : 'Closed'}
            </P>
          </View>
          <Icon name="heart" size={20} color="#fff" />
        </View>
      </ImageBackground>
      <View style={styles.placeInfoContainer}>
        <H5 numberOfLines={2} style={styles.placeName}>
          {name}
        </H5>
        <P style={styles.location}>{location}</P>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 220,
    shadowColor: "#fff",
    borderColor:'#eee',
    borderWidth:1,
    borderRadius: 10,
    overflow: 'hidden',
  },

  imageBackground: {
    width: '100%',
    height: 120,
  },

  topActions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },

  placeAccess: {
    paddingVertical: 3,
    paddingHorizontal: 5,
    borderRadius: 5,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },

  placeAccessText: {
    color: '#ffffff',
    fontSize: 10,
    textTransform: 'uppercase',
  },

  placeInfoContainer: {
    padding: 8,
    backgroundColor:'#fff',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },

  placeName: {
    fontSize: 14,
  },

  location: {
    fontSize: 12,
    color: '#8f8f8f',
  },
});
