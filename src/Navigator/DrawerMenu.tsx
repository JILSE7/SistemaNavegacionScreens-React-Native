import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import SettingsScreen from '../Screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { useWindowDimensions } from 'react-native';

const Drawer = createDrawerNavigator();
  //, drawerPosition:'right'} - posicion del drawer en screenoptions

  
  export const DrawerMenu = () => {
  const {height, width} = useWindowDimensions()
  
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Navigator" screenOptions={{headerShown:false, drawerType:(width > 768)? 'permanent': 'front'}}  >
        <Drawer.Screen name="Navigator" options={{title:'Home'}} component={StackNavigator} />
        <Drawer.Screen name="Settings"  options={{title:'Opciones'}}component={SettingsScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}