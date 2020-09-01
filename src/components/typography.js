import React from 'react';
import {Text, StyleSheet} from 'react-native';

export function H1({children, style, ...others}) {
  return <Text {...others} children={children} style={styles.h1} />;
}

export function H2({children, style, ...others}) {
  return <Text  {...others} children={children} style={{...styles.h2, ...style}} />;
}

export function H3({children, style, ...others}) {
  return (
    <Text {...others} children={children} style={{...styles.h3, ...style}} />
  );
}

export function H4({children, style}) {
  return <Text children={children} style={{...styles.h4, ...style}} />;
}

export function H5({children, style, ...others}) {
  return (
    <Text {...others} children={children} style={{...styles.h5, ...style}} />
  );
}

export function P({children, style, ...others}) {
  return (
    <Text {...others} children={children} style={{...styles.p, ...style}} />
  );
}

const styles = StyleSheet.create({
  h1: {
    fontFamily: 'FiraSansBold',
    fontSize: 26,
  },

  h2: {
    fontFamily: 'FiraSansBold',
    fontSize: 24,
  },

  h3: {
    fontFamily: 'FiraSansBold',
    fontSize: 20,
  },

  h4: {
    fontFamily: 'FiraSansMedium',
    fontSize: 18,
  },

  h5: {
    fontFamily: 'FiraSansMedium',
    fontSize: 16,
  },

  p: {
    fontFamily: 'FiraSansRegular',
    fontSize: 14,
  },
});