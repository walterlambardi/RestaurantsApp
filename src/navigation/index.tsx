import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Pages } from '../enums/Pages';
import routes from './routes';
import { PlaceResult } from '../types/LocationTypes';

export type RootStackParams = {
  [Pages.HOME]: undefined;
  [Pages.RESTAURANT_DETAIL]: {
    restaurant: PlaceResult;
  };
};

const MainNavigation = () => {
  const RootStack = createNativeStackNavigator<RootStackParams>();
  return (
    <RootStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name={Pages.HOME} component={routes[Pages.HOME]} />
      <RootStack.Screen
        name={Pages.RESTAURANT_DETAIL}
        component={routes[Pages.RESTAURANT_DETAIL]}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
