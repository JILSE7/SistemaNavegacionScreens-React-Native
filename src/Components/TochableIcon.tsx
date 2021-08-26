import React, { useContext } from 'react'
import { TouchableOpacity } from 'react-native'

import Icon from 'react-native-vector-icons/Ionicons';
import { AuthContext } from '../Context/AuthContext';
import {  colores } from '../Theme/AppTheme';

//Tipar las props
interface Props {
    iconName: string
}


const TouchableIcon = ({iconName}:Props ) => {

    const {changeIcon} = useContext(AuthContext)

    return (
        <TouchableOpacity onPress={() => changeIcon(iconName)}>
            <Icon name={iconName} size={90} color={colores.primario} />
        </TouchableOpacity>
    )
}

export default TouchableIcon
