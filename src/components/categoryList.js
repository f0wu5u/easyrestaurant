import React from 'react';
import HorizontalList from './horizontalList';
import {categories} from '../commons/models';
import CategoryListItem from './categoryListItem';

export default function CategoryList() {
  const renderItem = ({item}) => (
    <CategoryListItem
      caption={item.caption}
      image={item.image}
      title={item.title}
      backgroundColor={item.backgroundColor}
    />
  );

  return (
    <HorizontalList
      data={categories}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
}
