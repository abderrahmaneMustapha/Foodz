import {FETCH_FOODS_PENDING, FETCH_FOODS_SUCCESS, FETCH_FOODS_ERROR} from "./foodsActions"

const initialState = {
    foods_pending : false,
    foods : [],
    foods_error: null
}

export  function foodsReducer (state = initialState, action){
    
    switch(action.type){
        case FETCH_FOODS_PENDING: 
            return {
                ...state,
                foods_pending: true
            }
        case FETCH_FOODS_SUCCESS:
            return{
                ...state,
                foods_pending:false,
                foods : action.foods
            }
        case FETCH_FOODS_ERROR:
            return{
                ...state,
                foods_pending:false,
                foods_foods: action.foods
            }
        default : 
            return state
    }
}

export const getFoods  = state => state.foods
export const getFoodsPending  = state => state.foods_pending
export const getFoodsError  = state => state.foods_error