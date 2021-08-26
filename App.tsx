import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { StyleSheet, Text, View } from 'react-native'
import StackNavigator from './src/Navigator/StackNavigator';
import { DrawerMenu } from './src/Navigator/DrawerMenu';
import { DrawerMenuCustom } from './src/Navigator/DrawerMenuCustom';
import AuthContextProvider from './src/Context/AuthContext';

const App = () => {
  return (
    /*   <StackNavigator/>   */
    /* <DrawerMenu/> */

    <NavigationContainer>
        <AppState>
          <DrawerMenuCustom/>   
        </AppState>
    </NavigationContainer>
        

  )
}





const AppState = ({children} : any) => {
  return (
    <AuthContextProvider>
        {children}
    </AuthContextProvider>
  )
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'white',

    padding: 5
  },
  container2: {
    flex:1,
    height:'100%',
    borderWidth: 1,
    flexDirection:'row',
    alignItems:'center',
    justifyContent: 'center',
    borderEndWidth:1,
  },
  text: {
    fontSize: 50
  }
})

export default App
