import {FETCH_SIGNUP_USER_PENDING, FETCH_SUIGNUP_USER_SUCCESS, FETCH_SUIGNUP_USER_ERROR} from "./registationActions"

const initialState = {
    pedning  : false,
    user  : {},
    error : null
}

export function signupReducer( state=initialState, action){
    switch(action.type){
        case FETCH_SIGNUP_USER_PENDING:
            return {
                ...state,
                pedning: true,
            }
        case FETCH_SUIGNUP_USER_SUCCESS:
            return {
                ...state,
                pedning :  false,
                user : action.user,
                query :  action.query
            }
        case FETCH_SUIGNUP_USER_ERROR:
            return{
                ...state,
                pedning : false,
                error: action.error
            }
    }
}

export const getQuery = state => state.query
export const getUserSignup = state => state.user
export const getUserSignupPending  = state => state.pending
export const getUserSignupError = state => state.error