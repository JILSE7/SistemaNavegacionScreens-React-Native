import { DrawerScreenProps } from '@react-navigation/drawer';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React, { useEffect } from 'react';
import { Button, Text, TouchableOpacity, View } from 'react-native';
import { AppStyle } from '../Theme/AppTheme';

import Icon from 'react-native-vector-icons/Ionicons';

/* interface Props extends NativeStackScreenProps<any,any>{} */
interface Props extends DrawerScreenProps<any, any>{}

const Pagina1Screen = (props:Props) => {

    useEffect(() => {
        props.navigation.setOptions({
            headerLeft: () =>   (
                <TouchableOpacity onPress={() => props.navigation.toggleDrawer()}>
                    <Icon name="reorder-four-outline" size={30} color="black" />
                    {/* <Button title="Menu" onPress={() => props.navigation.toggleDrawer()}/> */}
                </TouchableOpacity>
            )
        })
        
    }, [])

    
    return (
        <View style={AppStyle.globalMargin}>    
            <View style={AppStyle.button}>
            <Button  title="ir pagina 2" onPress={() =>props.navigation.navigate('Pagina2Screen') }/>
            </View>
            <View style={AppStyle.button}>
            <TouchableOpacity style={AppStyle.personButton} onPress={() => props.navigation.navigate('PersonaScreen',{
                id:"1",
                nombre:'said'
            })}>
                <Text style={AppStyle.text}><Icon name="person-add-outline" size={20} color="black" />   Said </Text>
            </TouchableOpacity>
            </View>
            <View style={AppStyle.button}>
            <TouchableOpacity style={AppStyle.personButton} onPress={() => props.navigation.navigate('PersonaScreen',{
                id:"2",
                nombre:'maria'
            })}>
                <Text style={AppStyle.text}><Icon name="person-add-outline" size={20} color="black" />   Maria </Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

export default Pagina1Screen
