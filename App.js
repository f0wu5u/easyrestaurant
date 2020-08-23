import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.fullScreen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic">
          <Text>Welcome To Easy Resturant Starter</Text>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  fullScreen: {
    width: '100%',
    height: '100%',
    backgroundColor: '#fff',
  },
});

export default App;
