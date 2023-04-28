import React from 'react';
import { FallbackProps } from 'react-error-boundary';
import { View, Text, Button } from 'react-native';
import styles from './customFallback.style';

const CustomFallback = ({ error, resetErrorBoundary }: FallbackProps) => {
  return (
    <View style={styles.container}>
      <Text>Something went wrong:</Text>
      <Text>{error.message}</Text>
      <Button onPress={() => resetErrorBoundary()} title="Try again" />
    </View>
  );
};

export default CustomFallback;
