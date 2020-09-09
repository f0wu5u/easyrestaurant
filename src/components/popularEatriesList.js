import React from 'react';
import {View, StyleSheet} from 'react-native';
import HorizontalList from './horizontalList';
import SectionHeader from './sectionHeader';
import {popularEatries} from '../commons/models';
import PopularPlaceItem from './popularPlaceItem';

export default function PopularEatriesList() {


const renderItem = ({item})=> <PopularPlaceItem {...item}/>
  return (
    <>
      <SectionHeader title="Popular eatries" />
      <HorizontalList
        style={styles.listStyle}
        data={popularEatries}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
    </>
  );
}


const styles =  StyleSheet.create({
    listStyle: {
        marginTop: 16
    }
})