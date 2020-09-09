import React from 'react';
import { View, StyleSheet } from 'react-native';
import SectionHeader from './sectionHeader'
import HorizontalList from './horizontalList';
import { trendingBrands } from '../commons/models';
import TrendingListItem from './trendingListItem';


export default function TrendingList(){

    const renderItem = ({item})=> <TrendingListItem {...item}/>

    return (
        <View style={styles.container}>
            <SectionHeader title="Trending brands"/>
            <HorizontalList
                keyExtractor={(item)=>item.id}
                data={trendingBrands}
                renderItem={renderItem}
            />
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        marginVertical: 24
    }
})