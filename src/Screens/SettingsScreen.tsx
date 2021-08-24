import React from 'react'
import { AppState, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AppStyle } from '../Theme/AppTheme';


const SettingsScreen = () => {

        const insets = useSafeAreaInsets();//control absoluto top, right, left , bottom del safe area, es para el notch de android

    return (
        /* {marginTop: insets.top, } */ 
        <View style={AppStyle.safeArea}>
            <View style={AppStyle.view}>
            <Text style={{fontSize: 54}}>Settings Screen</Text>
            <Text style={{fontSize: 24, marginTop:10}}>Pruebas</Text>
            </View>
        </View>
    )
}

export default SettingsScreen
