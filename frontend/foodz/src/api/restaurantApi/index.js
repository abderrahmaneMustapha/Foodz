import {fetchRestaurantsError, fetchRestaurantsPending, fetchRestaurantsSuccess} from "../../reducer/Restaurants/restaurantsActions"


let fetchRestaurant  = ()=>{
    
    return (dispatch)=>{
        dispatch(fetchRestaurantsPending()); 
        fetch('http://localhost:8000/api/restaurant/')
        .then(res => res.json())
        .then(res => {      
            if (res.error){
                throw(res.error)
            }    
            dispatch(fetchRestaurantsSuccess(res.results))
            return res.results
        })
        .catch(error=>{
            dispatch(fetchRestaurantsError(error))
        })
       

      
    }
    
}

export default fetchRestaurant