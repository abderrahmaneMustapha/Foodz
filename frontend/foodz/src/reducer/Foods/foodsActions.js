export const FETCH_FOODS_PENDING = "FETCH_FOODS_PENDING"
export const FETCH_FOODS_SUCCESS = "FETCH_FOODS_SUCCESS"
export const FETCH_FOODS_ERROR =  "FETCH_FOODS_ERROR"

function  fetchFoodsPending (){
    return {
        type : FETCH_FOODS_PENDING
    }
}

function  fetchFoodsSuccess (foods){
    return{
        type : FETCH_FOODS_SUCCESS,
        foods : foods
    }
}

function fetchFoodsError(){
    return{
        type : FETCH_FOODS_ERROR
    }
}

export {fetchFoodsSuccess, fetchFoodsError,fetchFoodsPending}