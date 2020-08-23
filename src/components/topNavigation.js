import React from 'react';
import {H1, P} from './typography';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import Avatar from './avatar';
import Icon from 'react-native-vector-icons/Ionicons';

export default function TopNavigation() {
  return (
    <View style={styles.container}>
      <View style={styles.leftNav}>
        <H1>Hello, Smith</H1>
        <TouchableOpacity activeOpacity={0.5} style={styles.locationContainer}>
          <P style={styles.locationText}>Accra, Ghana</P>
          <Icon name="chevron-down" size={20} color="#6f9e76" />
        </TouchableOpacity>
      </View>

      <Avatar
        src="https://randomuser.me/api/portraits/men/19.jpg"
        isOnline={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 42,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  leftNav: {
    flex: 1,
  },

  locationContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  locationText: {
    color: '#a2a2a2',
    marginEnd: 8,
  },
});
