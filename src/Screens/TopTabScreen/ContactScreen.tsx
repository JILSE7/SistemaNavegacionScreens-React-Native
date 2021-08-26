import React, { useContext } from 'react'
import { Text, View, Button } from 'react-native'
import { AuthContext } from '../../Context/AuthContext'

import { AppStyle } from '../../Theme/AppTheme'

const ContactScreen = () => {

    const {authState,sigIn} = useContext(AuthContext)

    return (
        <View style= {AppStyle.globalMargin}>
                <Text style={AppStyle.textPrincipal}>Contact Screen</Text>
                {!authState.isLogged ? <Button title= 'Iniciar Secion' onPress={sigIn}/>: <Text>Te has logeado</Text>}
        </View>
    )
}

export default ContactScreen
