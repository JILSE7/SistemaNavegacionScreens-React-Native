import { NativeStackNavigatorProps, NativeStackScreenProps } from '@react-navigation/native-stack/lib/typescript/src/types'
import React from 'react'
import { Button, Text, View } from 'react-native'
import { AppStyle } from '../Theme/AppTheme'

interface Props extends NativeStackScreenProps<any,any>{};

const Pagina3Screen = ({navigation} :Props) => {
    return (
        <View style = {AppStyle.globalMargin}>
            <Text>pagina 3 scrren   </Text>
            <View style={AppStyle.button}>
                <Button title="Regresar" onPress={() => navigation.goBack()}/>
                <View style={AppStyle.button}>
                    <Button title="Ir al home" onPress={() => navigation.popToTop()}/>
                </View>
            </View>
        </View>
    )
}

export default Pagina3Screen
