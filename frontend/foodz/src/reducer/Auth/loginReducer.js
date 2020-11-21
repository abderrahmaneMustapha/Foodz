import {FETCH_SIGNIN_USER_PENDING, FETCH_SIGNIN_USER_ERROR, FETCH_SIGNIN_USER_SUCCESS} from "./loginActions"

const initialState = {
    user_pending_signin  : true,
    user_signin  : '',
    user_errors_signin : null,
    auth_signin : false
}

export function signinReducer( state=initialState, action){
   
    switch(action.type){
        case FETCH_SIGNIN_USER_PENDING:
            return {
                ...state,
                user_pending_signin : true,
            }
        case FETCH_SIGNIN_USER_SUCCESS:
            return {
                ...state,
                user_pending_signin  :  false,
                user_signin : action.user_signin,
                auth_signin : true,
            }
        case FETCH_SIGNIN_USER_ERROR:
            return{
                ...state,
                user_pending_signin  : false,
                user_errors_signin:action.user_errors_signin,
                auth_signin :  false,
            }
        default : 
            return state
       
    }
}

export const getUserSignin = state => state.user_signin
export const getUserSigninPending  = state => state.user_pending_signin  
export const getUserSigninError = state => state.user_errors_signin
export const getUserSigninAuth  = state => state.auth_signin