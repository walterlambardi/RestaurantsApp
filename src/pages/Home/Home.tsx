import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './home.style';
import SearchBar from '../../components/SearchBar';

export const Home = () => {
  const [addressInput, SetAddressInput] = useState('');

  return (
    <View style={styles.container}>
      <SearchBar
        onSubmit={SetAddressInput}
        placeholder={'Please enter an address'}
      />
      <Text>{addressInput}</Text>
    </View>
  );
};
