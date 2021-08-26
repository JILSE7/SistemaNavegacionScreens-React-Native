import React, { useReducer } from 'react'
import { createContext } from "react";
import { AuthReducer } from '../Reducers/AuthReducer';

//1.-Definir como lucira la info que tendre en mi context
export interface AuthState {
    isLogged: boolean,
    userName?: string,
    favoriteIcon?: string
}

//2.- Estado Inicial
export const authInitialState:AuthState =  {
    isLogged: false,
}   

//3.-Interfaz para decirle a react como luce y que expone el context
export interface AuthContextProps {
    authState: AuthState;
    sigIn: () => void;
    changeIcon: (iconName: string) => void;
    logOut: () => void;
    changeUserName: (userName: string) => void;
};

//4.- Crear Context
export const AuthContext = createContext( {} as AuthContextProps ); // || export const AuthContext = createContext<AuthContextProps>( {} ); 


const AuthContextProvider = ({children}: any) => {

    const [authState, dispatch] = useReducer(AuthReducer, authInitialState);

    const sigIn = () => {
        dispatch({type: 'signIn'})
    };

    const logOut = () => dispatch({type: 'logOut'});

    const changeIcon = (iconName: string) => dispatch({type:'changeFavoriteColor', payload: iconName});

    const changeUserName = (userName:string) =>  dispatch({type: 'changeUsername', payload: userName})


    return (
        <AuthContext.Provider value={{
            authState, 
            sigIn,
            changeIcon,
            logOut,
            changeUserName
         }
            }>
            {children}
        </AuthContext.Provider >
    )
}

export default AuthContextProvider






//const AuthContext = createContext();