import React from 'react';
import { createDrawerNavigator, DrawerContent, DrawerContentComponentProps, DrawerContentScrollView } from '@react-navigation/drawer';
import SettingsScreen from '../Screens/SettingsScreen';
import StackNavigator from './StackNavigator';
import { Image, TouchableOpacity, View } from 'react-native';
import { Text, useWindowDimensions } from 'react-native';
import { AppStyle } from '../Theme/AppTheme';
import { Tabs } from './BottomTabNavigation';

import Icon from 'react-native-vector-icons/Ionicons';
const Drawer = createDrawerNavigator();
  //, drawerPosition:'right'} - posicion del drawer en screenoptions

  
  export const DrawerMenuCustom = () => {
  const {height, width} = useWindowDimensions()
   
  return (

      <Drawer.Navigator initialRouteName="Navigator" screenOptions={{headerShown:false, drawerType:(width > 768)? 'permanent': 'front'}}  
        drawerContent={(props) => <MenuInterno  {...props}/> } 
      >
        <Drawer.Screen name="Tabs" options={{title:'Home'}} component={Tabs} />
        <Drawer.Screen name="Settings"  options={{title:'Opciones'}}component={SettingsScreen} />
      </Drawer.Navigator>
  );
}


const MenuInterno = (props: DrawerContentComponentProps ) => {
  
  return ( 

    <DrawerContentScrollView>
      {/* Avatar */}
      <View style={AppStyle.avatar} >
        <Image source={{uri:"https://upload.wikimedia.org/wikipedia/commons/f/f4/User_Avatar_2.png"}} style={AppStyle.image}/>
      </View>
      {/* Menu */}
      <View style={AppStyle.MenuContainer}>

        <TouchableOpacity style={AppStyle.btn} onPress={() => props.navigation.navigate('Tabs')}>
          <Icon name="newspaper-outline" size={20} color="green" />
          <Text style={{...AppStyle.textBtn, paddingRight: 10}}>Tabs</Text>
        </TouchableOpacity>

        <TouchableOpacity style={AppStyle.btn} onPress={() => props.navigation.navigate('Settings')}>
        <Icon name="skull-outline" size={20} color="green" />
          <Text style={AppStyle.textBtn}>Ajustes</Text>
        </TouchableOpacity>
      </View>

    </DrawerContentScrollView>
  )
}