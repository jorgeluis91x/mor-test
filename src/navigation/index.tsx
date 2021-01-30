/* eslint-disable react/react-in-jsx-scope */
import {createStackNavigator} from '@react-navigation/stack';

import ProfileScreen from '../screens/profile';

const ProfileStack = createStackNavigator();

function AppNavigation() {
  return (
    <ProfileStack.Navigator initialRouteName="Login">
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          headerShown: false,
        }}
      />
    </ProfileStack.Navigator>
  );
}

export default AppNavigation;
