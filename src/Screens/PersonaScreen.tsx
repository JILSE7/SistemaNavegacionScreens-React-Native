import { NativeStackScreenProps } from '@react-navigation/native-stack'
import React, { useContext, useEffect } from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../Context/AuthContext';
import { RootStackParams } from '../Navigator/StackNavigator';

/* interface RouterParams {
    id:number,
    nombre:string
}; */

interface Props extends NativeStackScreenProps<RootStackParams,'PersonaScreen'>{}; // aqui en la interfaz para obtener el tipado, la primera parte tu interfaz y la segunda el nombre de tu pantalla

const PersonaScreen = ({navigation,route}:Props) => {

    //const params = route.params as RouterParams;
    const params = route.params;
    
    const {changeUserName} = useContext(AuthContext)
    
    useEffect(() => {
        navigation.setOptions({
            title: params!.nombre //le decimos que estamos seguros que existe
        })
    }, [])

    useEffect(() => {
        changeUserName(params.nombre)
    }, [params])

    return (
        <View>
                <Text>{JSON.stringify(params,null,3)}</Text>
        </View>
    )
}

export default PersonaScreen
