import {fetchFoodsError, fetchFoodsPending, fetchFoodsSuccess} from "../../reducer/Foods/foodsActions"


export let fetchFood =  () =>{
    return (dispatch)=>{
        dispatch(fetchFoodsPending()); 
        fetch('http://localhost:8000/api/food/')
        .then(res => res.json())
        .then(res => {
            if (res.error){
                throw(res.error)
            }
            dispatch(fetchFoodsSuccess(res.results))
            return res.results
        })
        .catch(error=>{
            dispatch(fetchFoodsError(error))
        }) 

      
    } 
}

export let fetchRestaurantFoods = (urls)=>{
    let results = []
    urls.forEach(url=>{
        fetch(url)
        .then(res => res.json())
        .then(res=>{
           results.push(res)
        })
    })

    return results
    
}

