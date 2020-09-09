import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Home from '../pages/home';
import PlaceDetail from '../pages/placeDetail';

const Stack = createStackNavigator();

export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" screenOptions={{animationEnabled:false}} initialRouteName="placeDetail">
        <Stack.Screen name="home" getComponent={() => Home} />
        <Stack.Screen name="placeDetail" getComponent={() => PlaceDetail}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
