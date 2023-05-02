import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import CustomFallback from './src/components/CustomFallback';
import { API_KEY } from '@env';
import Geocoder from 'react-native-geocoding';

const App = () => {
  const queryClient = new QueryClient();

  useEffect(() => {
    Geocoder.init(API_KEY);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <NavigationContainer>
          <MainNavigation />
        </NavigationContainer>
      </ErrorBoundary>
    </QueryClientProvider>
  );
};

export default App;
