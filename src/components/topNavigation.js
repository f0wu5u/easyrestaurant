import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { H1, P } from "./typography";
import  Icon  from 'react-native-vector-icons/Ionicons';
import Avatar from './avatar';

export default function TopNavigation(props){

    return(
        <View style={styles.container}>
            <View style={styles.leftNav}>
                <H1>Hello, Smith</H1>
                <TouchableOpacity activeOpacity={0.5} style={styles.locationContainer}>
                    <P style={styles.locationText}>Accra, Ghana</P>
                    <Icon name="chevron-down" size={20} color="#6f9e76"/>
                </TouchableOpacity>
            </View>

            <Avatar imageURL="https://randomuser.me/api/portraits/women/30.jpg" isOnline/>
        </View>
    )

}


const styles =  StyleSheet.create({


    container: {
        paddingHorizontal: 24,
        paddingTop: 42,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },


    leftNav: {
        flex: 1
    },


    locationContainer: {
        flexDirection: 'row',
        alignItems:'center'

    },


    locationText: {
        color: '#a2a2a2',
        marginEnd: 8
    }

})