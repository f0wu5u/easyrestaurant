import React, { useState, useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

export default function Indicators({currentIndex, carouselSize}) {
  const [indicators, setIndicators] = useState([]);
  useEffect(() => {
    const mIndicators = [];

    for (let index = 0; index < carouselSize; index++) {
      const style =
        index === currentIndex
          ? {...styles.indicator, ...styles.indicatorActive}
          : styles.indicator;
      const indicator = <View key={index} style={style} />;
      mIndicators.push(indicator);
    }
    setIndicators(mIndicators);
  }, [currentIndex, carouselSize]);

  return <View style={styles.indicatorContainer} children={indicators} />;
}

const styles = StyleSheet.create({
  indicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 10,
  },

  indicator: {
    height: 10,
    width: 10,
    borderRadius: 30,
    backgroundColor: 'rgba(255,255,255,0.7)',
    marginHorizontal: 3,
  },
  indicatorActive: {
    backgroundColor: '#222222',
    borderColor: '#ffffff',
    borderWidth: 2,
  },
});
