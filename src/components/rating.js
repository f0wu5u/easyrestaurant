import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {P} from './typography';

export default function Rating({rate, maxStars}) {
  const [stars, setStars] = useState([]);

  useEffect(() => {
    const mStars = [];
    for (let startNum = 1; startNum <= maxStars; startNum++) {
      const star = (
        <Icon
          key={startNum}
          name="star"
          size={10}
          color={startNum <= rate ? 'gold' : '#d9d9d9'}
        />
      );
      mStars.push(star);
    }
    setStars(mStars);
  }, [rate, maxStars]);

  return (
    <View style={styles.container}>
      {stars}
      <P style={styles.rateText}>({rate})</P>
    </View>
  );
}

Rating.defaultProps = {
  maxStars: 5,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 6,
    alignItems: 'center',
  },

  rateText: {
    fontSize: 12,
    marginStart: 5,
    color: '#8f8f8f',
  },
});
