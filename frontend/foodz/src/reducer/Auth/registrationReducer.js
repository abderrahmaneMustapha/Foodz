import {FETCH_SIGNUP_USER_PENDING, FETCH_SUIGNUP_USER_SUCCESS, FETCH_SUIGNUP_USER_ERROR} from "./registationActions"

const initialState = {
    user_pending_signup  : true,
    user_signup  : '',
    user_errors_signup : null,
    auth_signup : false
}

export function signupReducer( state=initialState, action){
   
    switch(action.type){
        case FETCH_SIGNUP_USER_PENDING:
            return {
                ...state,
                user_pending_signup : true,
            }
        case FETCH_SUIGNUP_USER_SUCCESS:
            return {
                ...state,
                user_pending_signup  :  false,
                user_signup : action.user_signup,
                auth_signup : true,
            }
        case FETCH_SUIGNUP_USER_ERROR:
            return{
                ...state,
                user_pending_signup  : false,
                user_errors_signup:action.user_errors_signup,
                auth_signup :  false,
            }
        default : 
            return state
       
    }
}

export const getUserSignup = state => state.user_signup
export const getUserSignupPending  = state => state.user_pending_signup  
export const getUserSignupError = state => state.user_errors_signup
export const getUserSignupAuth  = state => state.auth_signup