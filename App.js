import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './stackRoutes/Routes';
import AboutStack from './stackRoutes/AboutStack';



const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={()=>(
        {
          headerShown:false
        }
      )} initialRouteName="Gamezone">
        <Drawer.Screen name='Gamezone' component={HomeStack} />
        <Drawer.Screen name="About" component={AboutStack} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}