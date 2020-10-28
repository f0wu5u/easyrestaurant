import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Fullscreen from '../components/fullscreen';
import PlaceDetailHeader from '../components/placeDetailHeader';
import PlaceInfo from '../components/placeInfo';
import PlacePaging from '../components/placePaging';

export default function PlaceDetail() {
  return (
    <Fullscreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
            {/* Header goes here */}
            <PlaceDetailHeader/>
            {/* PlaceInfo goes here */}
            <PlaceInfo/>
            {/* Place content goes here */}
            <PlacePaging/>
        </ScrollView>
    </Fullscreen>
  );
}
