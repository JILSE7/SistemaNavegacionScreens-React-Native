import React from 'react'

import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import ChatScreen from '../Screens/TopTabScreen/ChatScreen';
import ContactScreen from '../Screens/TopTabScreen/ContactScreen';
import AlbumScreen from '../Screens/TopTabScreen/AlbumScreen';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { colores } from '../Theme/AppTheme';
import { Text } from 'react-native';

const TopTab = createMaterialTopTabNavigator();

export const TopTapNavigator = () =>  {

    const {top: paddingTop} = useSafeAreaInsets() // hook safeare-pantalla ios

  return (
    <TopTab.Navigator
        style={{paddingTop, shadowColor:'transparent'}}
        
      
        
        screenOptions={ ({route}) => ({
            tabBarLabelStyle: { fontSize: 12 },
            tabBarPressColor: colores.primario,
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
                    iconName = 'CO';
                    break;
        
                    case 'Album':
                    iconName = 'AL';
                    break;
        
                    case 'Chats':
                    iconName = 'CH';
                    break;
                }
                return <Text style={{color}}>{iconName}</Text>
               }

            
        })}
 
          
     >
      <TopTab.Screen name="Chats" component={ChatScreen} />
      <TopTab.Screen name="Contact" component={ContactScreen} />
      <TopTab.Screen name="Album" component={AlbumScreen} />
    </TopTab.Navigator>
  )
  }
