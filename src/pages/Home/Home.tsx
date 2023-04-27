import React from 'react';
import { View, Text } from 'react-native';
import styles from './home.style';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Restaurants App</Text>
    </View>
  );
};
