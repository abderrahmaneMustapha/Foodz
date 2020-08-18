import {FETCH_FOODS_PENDING, FETCH_FOODS_SUCCESS, FETCH_FOODS_ERROR} from "./foodsActions"

const initialState = {
    pending : false,
    foods : [],
    error : null
}

export  function foodsReducer (state = initialState, action){
    switch(action.type){
        case FETCH_FOODS_PENDING: 
            return {
                ...state,
                pending : true
            }
        case FETCH_FOODS_SUCCESS:
            console.log("this is an action ", action)
            return{
                ...state,
                pending:false,
                foods : action.foods
            }
        case FETCH_FOODS_ERROR:
            return{
                ...state,
                pending:false,
                foods: action.foods
            }
        default : 
            return state
    }
}

export const getfoods  = state => state.foods
export const getfoodsPending  = state => state.pending
export const getfoodsError  = state => state.error