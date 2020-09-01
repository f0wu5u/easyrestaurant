import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  StyleSheet,
} from 'react-native';
import TopNavigation from './src/components/topNavigation';
import SearchBar from './src/components/searchBar';
import CategoryList from './src/components/categoryList';
import PopularEatriesList from './src/components/popularEatriesList';
import TrendingList from './src/components/trendingList';

const App = () => {
  return (
    <>
      <StatusBar hidden />
      <SafeAreaView style={styles.fullScreen}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentInsetAdjustmentBehavior="automatic">
            
            <TopNavigation/>

            <SearchBar/>

            <CategoryList/>

            <PopularEatriesList/>

            <TrendingList/>
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
