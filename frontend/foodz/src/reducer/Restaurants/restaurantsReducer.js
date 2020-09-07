import {FETCH_RESTAURANTS_PENDING, FETCH_RESTAURANTS_SUCCESS, FETCH_RESTAURANTS_ERROR} from "./restaurantsActions"

const initialState = {
    pending : false,
    restaurants : [],
    error : null
}

export  function restaurantsReducer (state = initialState, action){
    switch(action.type){
        case FETCH_RESTAURANTS_PENDING: 
            return {
                ...state,
                pending : true
            }
        case FETCH_RESTAURANTS_SUCCESS:
            return{
                ...state,
                pending:false,
                restaurants : action.restaurants
            }
        case FETCH_RESTAURANTS_ERROR:
            return{
                ...state,
                pending:false,
                restaurants: action.restaurants
            }
        default : 
            return state
    }
}

export const getRestaurants  = state => state.restaurants
export const getRestaurantsPending  = state => state.pending
export const getRestaurantsError  = state => state.error