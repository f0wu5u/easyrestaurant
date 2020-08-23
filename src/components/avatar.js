import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

export default function Avatar({src, isOnline}) {
  const indicatorStyle = isOnline
    ? {...styles.onlineIndicator, ...styles.onlineIndicatorOnline}
    : styles.onlineIndicator;
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.5}>
        <Image style={styles.avatar} resizeMode="contain" source={{uri: src}} />
      </TouchableOpacity>
      <View style={indicatorStyle} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 40,
    height: 40,
    position: 'relative',
  },

  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },

  onlineIndicator: {
    width: 16,
    height: 16,
    borderColor: '#ffffff',
    borderWidth: 3,
    borderRadius: 20,
    backgroundColor: '#a2a2a2',
    position: 'absolute',
    top: -5,
    right: -5,
  },

  onlineIndicatorOnline: {
    backgroundColor: '#56b365',
  },
});
