import React from 'react';
import {ScrollView, StyleSheet, SafeAreaView} from 'react-native';
import TrendingList from '../components/trendingList';
import PopularEatriesList from '../components/popularEatriesList';
import CategoryList from '../components/categoryList';
import SearchBar from '../components/searchBar';
import TopNavigation from '../components/topNavigation';
import FullScreen from '../components/fullscreen';

export default function Home({navigation}) {
  return (
    <FullScreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <TopNavigation />

        <SearchBar />

        <CategoryList onItemPress={navigation.navigate} />

        <PopularEatriesList onItemPress={navigation.navigate} />

        <TrendingList />
      </ScrollView>
    </FullScreen>
  );
}
