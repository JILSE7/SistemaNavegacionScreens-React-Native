import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../Screens/TopTabScreen/ChatScreen';
import ContactScreen from '../Screens/TopTabScreen/ContactScreen';
import AlbumScreen from '../Screens/TopTabScreen/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../Theme/AppTheme';
import { Text } from 'react-native';

import Icon from 'react-native-vector-icons/Ionicons';

const TopTab = createMaterialTopTabNavigator();

export const TopTapNavigator = () =>  {

    const {top: paddingTop} = useSafeAreaInsets() // hook safeare-pantalla ios

  return (
    <TopTab.Navigator
        style={{paddingTop, shadowColor:'transparent'}}
        
      
        
        screenOptions={ ({route}) => ({
            tabBarLabelStyle: { fontSize: 12},
            tabBarPressColor: colores.primario,
            tabBarActiveTintColor: 'green',
            tabBarInactiveTintColor:'gray',
            tabBarStyle: { backgroundColor: 'white',     borderTopColor: 'white', elevation: 0, borderTopWidth: 0, },
            tabBarShowIcon:true,
            tabBarIndicatorStyle: {
                backgroundColor: colores.primario
            },
            /* tabBarContentContainerStyle: {
                backgroundColor:'red'
            }, */

            tabBarIcon: ({color, focused}) => { //RETORNAMOS EL ICONO SEGUN LA RUTA
                
                let iconName:string = '';
        
                switch (route.name) {
                  case 'Contact':
                    iconName = 'chatbubble-ellipses-outline';
                    break;
        
                    case 'Album':
                    iconName = 'radio-outline';
                    break;
        
                    case 'Chats':
                    iconName = 'people-outline';
                    break;
                }
                return <Icon color={color} name={iconName} size={20}  />
               }

            
        })}
 
          
     >
      <TopTab.Screen name="Chats" component={ChatScreen} />
      <TopTab.Screen name="Contact" component={ContactScreen} />
      <TopTab.Screen name="Album" component={AlbumScreen} />
    </TopTab.Navigator>
  )
  }
