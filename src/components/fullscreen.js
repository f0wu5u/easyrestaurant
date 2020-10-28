import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';

export default function Fullscreen(props) {
  return <SafeAreaView style={styles.fullScreen} {...props} />;
}

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});
