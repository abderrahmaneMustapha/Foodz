import {fetchRestaurantsError, fetchRestaurantsPending, fetchRestaurantsSuccess} from "../../reducer/Restaurants/restaurantsActions"


let fetchRestaurant  = (query)=>{

    return (dispatch)=>{
        
        dispatch(fetchRestaurantsPending()); 
        fetch(`http://localhost:8000/api/restaurant/?${query}`)
        .then(res => res.json())
        .then(res => {      
            if (res.error){
                throw(res.error)
            }    
            dispatch(fetchRestaurantsSuccess(res.results,query))
            return res.results
        })
        .catch(error=>{
            dispatch(fetchRestaurantsError(error))
        })
       

      
    }
    
}

export default fetchRestaurant