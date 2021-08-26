import React, { useContext, useEffect, useReducer } from 'react'
import { AppState, Text, View } from 'react-native'
import { useSafeAreaInsets } from 'react-native-safe-area-context'
import { AuthContext } from '../Context/AuthContext';
import { AppStyle } from '../Theme/AppTheme';
import Icon from 'react-native-vector-icons/Ionicons';


const SettingsScreen = () => {

        const insets = useSafeAreaInsets();//control absoluto top, right, left , bottom del safe area, es para el notch de android

        const {authState} = useContext(AuthContext)
        


    return (
        /* {marginTop: insets.top, } */ 
        <View style={AppStyle.safeArea}>
            <View style={AppStyle.view}>
            <Text style={{fontSize: 54}}>Settings Screen</Text>
            <Text style={{fontSize: 24, marginTop:10}}>Pruebas</Text>
            <Text style={{fontSize: 24, marginTop:10}}>{authState.isLogged ? 'Sesion Iniciada' : 'Inicia Sesion'}</Text>
            <Text style={{fontSize: 24, marginTop:10}}>{authState.userName}</Text>
            {authState.favoriteIcon && <Icon name={authState.favoriteIcon} size={60} color="orangered" />}
            </View>
        </View>
    )
}

export default SettingsScreen
