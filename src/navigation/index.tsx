/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import ProfileScreen from '../screens/profile';

const ProfileStack = createStackNavigator();

function AppNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName="Login">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: '@Jake Lazaraus',
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default AppNavigation;
