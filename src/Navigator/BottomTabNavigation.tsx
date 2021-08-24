import React from 'react'

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Tab1Screen from '../Screens/TabScreen/Tab1Screen';
import Tab2Screen from '../Screens/TabScreen/Tab2Screen';
import Tabs3Screen from '../Screens/TabScreen/Tabs3Screen';
import StackNavigator from './StackNavigator';
import { AppStyle, colores } from '../Theme/AppTheme';
import { Platform, Text } from 'react-native';
import { TopTapNavigator } from './TopTapNavigator';


//MOSTRANDO TABS SEGUN EL S.O

export const Tabs = () => {

    return Platform.OS === 'ios' ?  <TabIOS/> :  <TabAndroid />

}





//ESTES ES EL DE IOS **********************************************************************

const BottomTabIOS = createBottomTabNavigator();

export const  TabIOS = () =>  {
  return (
    <BottomTabIOS.Navigator 
    screenOptions = { ({route}) => ({
      headerShown:false, 
      tabBarActiveTintColor:'purple',  //colores.primario, //stilo al trab activo
       tabBarLabelStyle:{ fontSize: 15/* , color:'black' */ },
       //tabBarLabel: (props) => <Text style={{color: props.color}}>hola</Text>, //estilos a las letras de los tabs
       tabBarIconStyle:{color:'transparent'},
       tabBarInactiveTintColor:'black', //color de los iconos,
       tabBarStyle:{backgroundColor:'white', borderTopWidth:3, borderTopColor:colores.primario},
       headerTransparent:true,

       tabBarIcon: ({color, size, focused}) => { //RETORNAMOS EL ICONO SEGUN LA RUTA
        let iconName:string = '';

        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'T1';
            break;

            case 'Tab2Screen':
            iconName = 'T2';
            break;

            case 'StackNavigator':
            iconName = 'STACK';
            break;
        }
        return <Text style={{color}}>{iconName}</Text>
       }
       
    })
} 
/*     screenOptions = {({route}) => ({
       tabBarIcon: (props) => {
          return <Text>t1</Text>
       }
    })} */

    
    sceneContainerStyle={{
        backgroundColor:'white'
          
    }}
    
    >
     {/*  <Tab.Screen name="Tab1Screen" options={{title:'hola 1', tabBarIcon: (props) => <Text style={{color:props.color}}>T1</Text>}} component={Tab1Screen} /> */}
     <BottomTabIOS.Screen name="Tab1Screen" options={{title:'hola 1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTap" component={TopTapNavigator} />
      <BottomTabIOS.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabIOS.Navigator>
  );
}


//ESTE ES EL DE ANDROID **************************************************

const BottomTabAndroid = createMaterialBottomTabNavigator();

const  TabAndroid = () =>  {
  return (
    <BottomTabAndroid.Navigator
      sceneAnimationEnabled={true}
      barStyle={{
        backgroundColor: colores.primario,
      }}

      screenOptions={({route}) => ({
        headerShown:false, 
        tabBarActiveTintColor:'purple',  //colores.primario, //stilo al trab activo
         //tabBarLabelStyle:{ fontSize: 15/* , color:'black' */ },
         //tabBarLabel: (props) => <Text style={{color: props.color}}>hola</Text>, //estilos a las letras de los tabs
         tabBarIconStyle:{color:'transparent'},
         tabBarInactiveTintColor:'black', //color de los iconos,
         tabBarStyle:{backgroundColor:'white', borderTopWidth:3, borderTopColor:colores.primario},
         headerTransparent:true,

        tabBarIcon: ({color, focused}) => { //RETORNAMOS EL ICONO SEGUN LA RUTA
          let iconName:string = '';
  
          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'T1';
              break;
  
              case 'Tab2Screen':
              iconName = 'T2';
              break;
  
              case 'StackNavigator':
              iconName = 'T3';
              break;
          }
          return <Text style={{color}}>{iconName}</Text>
         }
      })}
    > 
      <BottomTabAndroid.Screen name="Tab1Screen"  options={{title:'hola 1'}} component={Tab1Screen} />
      <BottomTabIOS.Screen name="TopTap" component={TopTapNavigator} />
      <BottomTabAndroid.Screen name="StackNavigator" component={StackNavigator} />
    </BottomTabAndroid.Navigator>
  );
}