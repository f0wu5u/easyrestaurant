import React from 'react';
import { Dimensions, View } from 'react-native';
import { P } from '../typography';

const {width} = Dimensions.get('window');
export default function PlaceReviewTab(){
    
    return (
        <View style={{width, padding:24}}>
            <P>Review</P>
        </View>
    )
}