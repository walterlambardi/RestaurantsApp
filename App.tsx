import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainNavigation from './src/navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from 'react-error-boundary';
import CustomFallback from './src/components/CustomFallback';

const App = () => {
  const queryClient = new QueryClient();

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
