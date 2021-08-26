import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { AppStyle } from '../../Theme/AppTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import TouchableIcon from '../../Components/TochableIcon';
import { AuthContext } from '../../Context/AuthContext';




const Tab1Screen = () => {

    const {top} = useSafeAreaInsets();

    const {changeIcon} = useContext(AuthContext)

    return (
        <View style = {{...AppStyle.marginIcons, marginTop: top}}>
                <Text style={{fontSize: 24}}>Iconos</Text>
                
                <View style={{...AppStyle.viewIcons, justifyContent: 'space-between'}}>
                    <TouchableIcon iconName={'body-outline'}/>
                    <TouchableIcon iconName={'ear-outline'}/>
                </View>
                <View style={{...AppStyle.viewIcons, justifyContent:'center'}}>
                    <TouchableIcon iconName={'fast-food-outline'}/> 
                </View>

                <View style={{...AppStyle.viewIcons, justifyContent:'space-around'}}>
                <TouchableIcon iconName={'finger-print-outline'}/> 
                <TouchableIcon iconName={'pizza-outline'}/> 
                </View>
                

        </View>
    )
}

export default Tab1Screen
