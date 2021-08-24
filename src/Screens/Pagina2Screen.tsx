import { CommonActions, useNavigation } from '@react-navigation/native';
import React from 'react'
import { useEffect } from 'react';
import { Button, Text, View } from 'react-native'
import { AppStyle } from '../Theme/AppTheme'


const Pagina2Screen = () => {

    const navigation = useNavigation();

    useEffect(() => {
        navigation.setOptions({ //customizar mensaje de retroceso para ios
            headerBackTitle: "Back"
        })
    }, [])

    return (
        <View style={AppStyle.globalMargin}>
            <Text>Pagina 2 screen</Text>
            <View style={AppStyle.button} >
                <Button title="Ir a pagina 3" onPress={() => navigation.dispatch(CommonActions.navigate({name:"Pagina3Screen",}))} />
            </View>
        </View>
    )
}

export default Pagina2Screen
