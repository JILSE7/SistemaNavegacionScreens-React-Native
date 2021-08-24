import { DrawerScreenProps } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { AppStyle } from '../Theme/AppTheme';

/* interface Props extends NativeStackScreenProps<any,any>{} */
interface Props extends DrawerScreenProps<any, any>{}

const Pagina1Screen = (props:Props) => {

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () =>   (
                <Button title="Menu" onPress={() => props.navigation.toggleDrawer()}/>
            )
        })
        
    }, [])

    
    return (
        <View style={AppStyle.globalMargin}>
            <Text>Hola pagina 1</Text>
            <View style={AppStyle.button}>
            <Button  title="ir pagina 2" onPress={() =>props.navigation.navigate('Pagina2Screen') }/>
            </View>
            <View style={AppStyle.button}>
            <TouchableOpacity style={AppStyle.personButton} onPress={() => props.navigation.navigate('PersonaScreen',{
                id:"1",
                nombre:'said'
            })}>
                <Text style={AppStyle.text}>Said</Text>
            </TouchableOpacity>
            </View>
            <View style={AppStyle.button}>
            <TouchableOpacity style={AppStyle.personButton} onPress={() => props.navigation.navigate('PersonaScreen',{
                id:"2",
                nombre:'maria'
            })}>
                <Text style={AppStyle.text}>Maria</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pagina1Screen
