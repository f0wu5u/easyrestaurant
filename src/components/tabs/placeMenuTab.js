import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import { H4 } from '../typography';

const {width} = Dimensions.get('window');
export default function PlaceMenuTab(){
    
    return (
        <View style={styles.container}>
            <H4 style={styles.titleText}>Main Course</H4>
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        paddingVertical: 32, 
        width: width
    },

    titleText: {
        marginHorizontal: 24,
        marginBottom: 16
    }
})