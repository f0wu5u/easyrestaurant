import React from 'react';
import {View, Pressable, TouchableNativeFeedback, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {P} from './typography';

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <Pressable style={styles.searchbar}>
        <Icon name="search" size={20} color="#8f8f8f" />
        <P style={styles.searchText}>Search for resturant, dishes...</P>
      </Pressable>
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}>
        <View style={styles.searchButton}>
          <Icon name="options-outline" size={20} color="#8f8f8f" />
        </View>
      </TouchableNativeFeedback>
    </View>
  );
}



const styles = StyleSheet.create({
    container : {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginTop: 32
    },

    searchbar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#eeeeee',
        padding: 12,
        borderRadius: 10,
        flex : 1,
        marginEnd : 12
    },

    searchText : {
        color: "#8f8f8f",
        fontSize: 14,
        marginStart: 8
    },

    searchButton : {
        backgroundColor: '#eeeeee',
        padding: 12,
        borderRadius:10,
        alignItems:'center',
        justifyContent: 'center'
    }
})