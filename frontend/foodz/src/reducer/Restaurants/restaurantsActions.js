export const FETCH_RESTAURANTS_PENDING = "FETCH_RESTAURANTS_PENDING"
export const FETCH_RESTAURANTS_SUCCESS = "FETCH_RESTAURANTS_SUCCESS"
export const FETCH_RESTAURANTS_ERROR =  "FETCH_RESTAURANTS_ERROR"

function  fetchRestaurantsPending (){
    return {
        type : FETCH_RESTAURANTS_PENDING
    }
}

function  fetchRestaurantsSuccess (restaurants){
    return{
        type : FETCH_RESTAURANTS_SUCCESS,
        restaurants : restaurants
    }
}

function fetchRestaurantsError(){
    return{
        type : FETCH_RESTAURANTS_ERROR
    }
}

export {fetchRestaurantsSuccess, fetchRestaurantsError,fetchRestaurantsPending}