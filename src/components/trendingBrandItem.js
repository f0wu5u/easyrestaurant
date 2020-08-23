import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { H5, P } from './typography';


export default function TrendingBrandItem({name,image,distance}){

    return (
        <View style={styles.container}>
            <Image style={styles.logo} resizeMode="contain" source={image}/>
            <H5 style={styles.name} numberOfLines={1}>{name}</H5>
            <View style={styles.distanceContainer}>
                <P style={styles.distanceText} numberOfLines={1}>{distance}</P>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    container:{
        borderRadius:8,
        borderColor:"#eee",
        borderWidth:1,
        width: 100,
        justifyContent: 'center',
        alignItems: 'center',
        padding:8
    },

    logo:{
        width: 50,
        height: 50
    },

    name: {
        fontSize:12,
        marginVertical:4
    },

    distanceContainer: {
        paddingHorizontal: 8,
        paddingVertical: 5,
        backgroundColor:"#eeeeee",
        borderRadius:5
    },
    distanceText : {
        fontSize:10,
    }
})