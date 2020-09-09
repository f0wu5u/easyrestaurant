import React from 'react';
import {View, Pressable, Image, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {P} from './typography';

export default function HeaderMenu() {
  return (
    <View style={style.container}>
      <Pressable style={{...style.backButton, ...style.button}}>
        <Icon name="chevron-back-outline" size={20} />
      </Pressable>

      <View style={style.extraContainer}>
        <P style={style.extraText}>20+ Friends were here</P>

        <View style={style.extraImagesContainer}>
          <Image
            style={style.extraImage}
            source={{uri: 'https://randomuser.me/api/portraits/women/92.jpg'}}
          />
          <Image
            style={style.extraImage}
            source={{uri: 'https://randomuser.me/api/portraits/women/10.jpg'}}
          />
        </View>
        <Pressable style={style.extraButton}>
          <P>+18</P>
        </Pressable>
      </View>

      <Pressable style={{...style.button, ...style.shareButton}}>
        <Icon name="share-outline" color="#ffffff" size={20} />
      </Pressable>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 40,
    width: '100%',
    paddingHorizontal: 24,
    zIndex: 2,
  },

  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 70,
  },

  backButton: {
    backgroundColor: '#ffffff',
    borderColor: '#eee',
    borderWidth: 2,
  },

  shareButton: {
    backgroundColor: 'rgba(0,0,0,.7)',
  },

  extraContainer: {
    flex: 1,
    marginHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 60,
    padding: 6,
  },

  extraButton: {
    backgroundColor: '#ffffff',
    borderRadius: 20,
    height: 35,
    width: 35,
    alignItems: 'center',
    justifyContent: 'center',
  },

  extraText: {
    marginHorizontal: 6,
    color: '#ffffff',
    textTransform: 'capitalize',
  },

  extraImagesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },

  extraImage: {
    height: 33,
    width: 33,
    marginHorizontal: -2,
    borderColor: '#ffffff',
    borderWidth: 2,
    borderRadius: 20,
  },
});
