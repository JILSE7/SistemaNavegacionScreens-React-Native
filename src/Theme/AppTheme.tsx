import { StyleSheet } from "react-native";


export const colores = {
    primario: 'green'
}

export const AppStyle = StyleSheet.create({
    globalMargin: {
        marginTop: 10,
        marginHorizontal: 60,
        alignItems:'center'
    },
    button: {
        marginTop: 20,
        width: '100%',
    },
    personButton:{
        height:30,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'purple',
    },
    text: {
        color:'white',
        fontStyle:'italic'
    },
    avatar: {
        alignItems:'center',
        marginTop:5
    },
    image: {
        width:120,
        height: 120
    },
    MenuContainer:{
        alignItems:'center',
        marginTop:20,
        //borderColor:'black',
        //borderWidth: 1,
        height: 100,
        justifyContent:'space-around'
    },
    btn: {
        width:90,
        
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    textBtn:{
        color:'black',
        fontSize:22,
        
        
    },

    safeArea: {
        flex:1,
        borderWidth:1,
        borderColor:'black',
        padding: 20,
        backgroundColor:'orange'
    },
    view: {
        flex:1,
        width:'100%',
        alignItems:'center',
        justifyContent:'center',
        borderColor:'black',
        borderWidth:1,
        backgroundColor:'white'
    },
    marginIcons: {
        flex: 1,
        borderWidth: 1,
        borderColor: 'black',
        alignItems: 'center',
        
    },
    viewIcons: {
        borderColor:'black',
        borderWidth:1,
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        width: '100%'
    },
    iconsPerson: {
        
    }
})