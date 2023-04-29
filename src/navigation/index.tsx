import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pages from '../enums/Pages';
import routes from './routes';

export type RootStackParams = {
  [Pages.HOME]: undefined;
};

const MainNavigation = () => {
  const RootStack = createNativeStackNavigator<RootStackParams>();
  return (
    <RootStack.Navigator>
      <RootStack.Screen
        name={Pages.HOME}
        component={routes[Pages.HOME]}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export default MainNavigation;
