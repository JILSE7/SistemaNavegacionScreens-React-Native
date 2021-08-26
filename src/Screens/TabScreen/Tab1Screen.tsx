import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native'
import { AppStyle } from '../../Theme/AppTheme'
import { useSafeAreaInsets } from 'react-native-safe-area-context';




const Tab1Screen = () => {

    const {top} = useSafeAreaInsets();
    return (
        <View style = {{...AppStyle.marginIcons, marginTop: top}}>
                <Text style={{fontSize: 24}}>Iconos</Text>
                
                <View style={{...AppStyle.viewIcons, justifyContent: 'space-between'}}>
                <Icon name="body-outline" size={90} color="green" />
                <Icon name="ear-outline" size={90} color="green" />
                
                </View>
                <View style={{...AppStyle.viewIcons, justifyContent:'center'}}>
                <Icon name="fast-food-outline" size={90}></Icon>
                </View>

                <View style={{...AppStyle.viewIcons, justifyContent:'space-around'}}>
                <Icon name="finger-print-outline" size={90}></Icon>
                <Icon name="pizza-outline" size={90}></Icon>
                </View>
                

        </View>
    )
}

export default Tab1Screen
