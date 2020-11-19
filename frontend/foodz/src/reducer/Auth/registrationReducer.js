import {FETCH_SIGNUP_USER_PENDING, FETCH_SUIGNUP_USER_SUCCESS, FETCH_SUIGNUP_USER_ERROR} from "./registationActions"

const initialState = {
    user_pending  : true,
    user  : '',
    user_errors : null
}

export function signupReducer( state=initialState, action){
    console.log("action : " , action)
    switch(action.type){
        case FETCH_SIGNUP_USER_PENDING:
            return {
                ...state,
                user_pending : true,
            }
        case FETCH_SUIGNUP_USER_SUCCESS:
            return {
                ...state,
                user_pending  :  false,
                user : action.user,
            }
        case FETCH_SUIGNUP_USER_ERROR:
            return{
                ...state,
                user_pending  : false,
                user_errors:action.user_errors
            }
        default : 
            return state
       
    }
}

export const getUserSignup = state => state.user
export const getUserSignupPending  = state => state.user_pending  
export const getUserSignupError = state => state.user_errors