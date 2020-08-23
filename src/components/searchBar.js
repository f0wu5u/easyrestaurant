import React from 'react';
import {
  View,
  Pressable,
  StyleSheet,
  TouchableNativeFeedback,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {P} from './typography';

export default function SearchBar({onSearch, onFilter}) {
  return (
    <View style={styles.container}>
      <Pressable style={styles.searchbar}>
        <Icon name="search" size={20} color="#8f8f8f" />
        <P style={styles.searchbarText}>Search for resturants, dishes...</P>
      </Pressable>
      <TouchableNativeFeedback
        // onPress={onPress}
        // disabled={disabled || false}
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.searchbarButton}>
          <Icon name="options-outline" size={20} color="#8f8f8f" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: 32,
  },

  searchbar: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eeeeee',
    padding: 12,
    borderRadius: 10,
    marginEnd: 12,
    flex: 1,
  },

  searchbarText: {
    color: '#8f8f8f',
    fontSize: 14,
    marginStart: 8,
  },

  searchbarButton: {
    backgroundColor: '#eeeeee',
    borderRadius: 8,
    padding: 12,
    alignItems:'center',
    justifyContent:'center'
  },
});
