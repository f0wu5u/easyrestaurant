import React from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {P} from './typography';

export default function HeaderMenu() {
  return (
    <View style={styles.container}>
      <Pressable style={{...styles.button, ...styles.backButton}}>
        <Icon name="chevron-back-outline" size={20} />
      </Pressable>

      <View style={styles.extraContainer}>
        <P style={styles.extraText}>20+ Friends were here</P>

        <View style={styles.extraImagesContainer}>
          <Image
            style={styles.extraImage}
            source={{uri: 'https://randomuser.me/api/portraits/women/92.jpg'}}
          />
          <Image
            style={styles.extraImage}
            source={{uri: 'https://randomuser.me/api/portraits/women/10.jpg'}}
          />
        </View>

        <Pressable style={styles.extraButton}>
          <P>+18</P>
        </Pressable>
      </View>

      <Pressable style={{...styles.button, ...styles.shareButton}}>
        <Icon name="share-outline" color="#ffffff" size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center',
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
    borderRadius: 40,
  },

  backButton: {
    backgroundColor: '#ffffff',
    borderColor: '#eee',
    borderWidth: 2,
  },

  shareButton: {
    backgroundColor: 'rgba(0,0,0,0.7)',
  },

  extraContainer: {
    flex: 1,
    marginHorizontal: 8,
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 60,
  },

  extraButton: {
    backgroundColor: '#ffffff',
    height: 28,
    width: 28,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },

  extraText: {
      marginHorizontal: 6,
      color: "#ffffff",
      textTransform: "capitalize",
      fontSize:12
  },


  extraImagesContainer: {
      flexDirection: 'row',
      alignItems:'center',
      justifyContent:'space-evenly'
  },

  extraImage: {
      height:25,
      width:25,
      borderRadius:20,
      marginHorizontal:-2,
      borderWidth:2,
      borderColor:"#ffffff"
  }
});
