import React from 'react';
import { ScrollView } from 'react-native';
import CategoryList from '../components/categoryList';
import Fullscreen from '../components/fullscreen';
import PopularEatriesList from '../components/popularEatriesList';
import SearchBar from '../components/searchBar';
import TopNavigation from '../components/topNavigation';
import TrendingList from '../components/trendingList';

export default function Home() {
  return (
    <Fullscreen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentInsetAdjustmentBehavior="automatic">
        <TopNavigation />

        <SearchBar />

        <CategoryList />

        <PopularEatriesList />

        <TrendingList />
      </ScrollView>
    </Fullscreen>
  );
}
