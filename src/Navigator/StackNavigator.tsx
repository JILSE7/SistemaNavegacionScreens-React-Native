
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Pagina1Screen from '../Screens/Pagina1Screen';
import Pagina2Screen from '../Screens/Pagina2Screen';
import Pagina3Screen from '../Screens/Pagina3Screen';
import PersonaScreen from '../Screens/PersonaScreen';

//Definiendo los tipos de las pantallas
export type RootStackParams = { /// Se recomienda que las pantallas que no reciben propiedades se pongan como undefined
    Pagina1Screen:undefined,
    Pagina2Screen:undefined,
    Pagina3Screen:undefined,
    PersonaScreen: {id:number, nombre:string}
}

const Stack = createNativeStackNavigator<RootStackParams>(); // se pone el tipado en la creacion del stack
    
const StackNavigator = () =>  {
  return (
    
      <Stack.Navigator 
        //initialRouteName="Pagina2Screen" Puedes especificar el inicio de tu stack
        
        screenOptions={{
            headerShadowVisible:false, //quita el borde del header
            headerStyle:{
                
            },
            contentStyle: {
                backgroundColor: 'white'
            }

            
        }}
        
      >
        <Stack.Screen name="Pagina1Screen"   options={{title:"    Pagina 1"}}  component={Pagina1Screen} />
        <Stack.Screen name="Pagina2Screen" options={{title:"Hola2"}} component={Pagina2Screen} />
        <Stack.Screen name="Pagina3Screen" component={Pagina3Screen} />
        <Stack.Screen name="PersonaScreen" component={PersonaScreen}/>
      </Stack.Navigator>
    
  );
}

export default StackNavigator;