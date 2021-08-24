import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { RootStackParams } from '../Navigator/StackNavigator';

/* interface RouterParams {
    id:number,
    nombre:string
}; */

interface Props extends NativeStackScreenProps<RootStackParams,'PersonaScreen'>{}; // aqui en la interfaz para obtener el tipado, la primera parte tu interfaz y la segunda el nombre de tu pantalla

const PersonaScreen = ({navigation,route}:Props) => {

    //const params = route.params as RouterParams;
    const params = route.params;
    
    
    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre //le decimos que estamos seguros que existe
        })
    }, [])
    return (
        <View>
                <Text>{JSON.stringify(params,null,3)}</Text>
        </View>
    )
}

export default PersonaScreen
