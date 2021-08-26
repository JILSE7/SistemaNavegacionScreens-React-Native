import React, { useContext } from 'react'
import { Button, Text, View } from 'react-native'
import { AuthContext } from '../../Context/AuthContext'
import { AppStyle } from '../../Theme/AppTheme'

const AlbumScreen = () => {

    const {logOut, authState} = useContext(AuthContext)
    return (
        <View style={AppStyle.globalMargin}>
                <Text style={AppStyle.textPrincipal}>AlbumScreen</Text>
                {authState.isLogged && <Button title="Cerrar Sesion" onPress={logOut}/>}
        </View>
    )
}

export default AlbumScreen
