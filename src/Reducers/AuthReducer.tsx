import { AuthState } from "../Context/AuthContext";

type  AuthAction = | {type: 'signIn'}    | {type: 'changeFavoriteColor', payload: string} | {type: 'logOut'} | {type: 'changeUsername', payload:string}


export const AuthReducer = (state: AuthState, action:AuthAction): AuthState => {
        switch (action.type) {
            case 'signIn':
                    return {
                        ...state,
                        isLogged: true,
                        userName: 'No userName - yet',
                    }
                case 'changeFavoriteColor':
                    return {
                        ...state,
                        favoriteIcon : action.payload
                    }
                case 'changeUsername':

                return{
                    ...state,
                    userName: action.payload
                }

                    case 'logOut': 
                    return {
                        isLogged: false
                    }
                
        
            default:
                return state;
        }
}
