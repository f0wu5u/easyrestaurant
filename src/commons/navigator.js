import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screens/home';
import PlaceDetail from '../screens/placeDetail';

const Stack = createStackNavigator();
export default function Navigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="placeDetail">
        <Stack.Screen name="home" getComponent={() => Home} />
        <Stack.Screen name="placeDetail" getComponent={() => PlaceDetail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
