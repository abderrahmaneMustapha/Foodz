
// a package to get params from a url
import queryString from "query-string"

export function addFiltersToUrl(props,event){
    let filters = []
    let name = event.target.getAttribute("name") ?  event.target.getAttribute("name") : event.target.parentNode.getAttribute("name") 
   console.log("add emails to urls")
    switch(name){
        case "sort":
            {
                filters.push({name : "sort", query : event.target.value})
                break
            }
        case "food":
            {   
                let query =  event.target.getAttribute("data") ? event.target.getAttribute("data") : event.target.parentNode.getAttribute("data") 
                filters.push({name : "food", query : query })
                break
            }
        default:
            {
                if (event.target.className==="radio-button-filter"){
                    filters.push({name : "filter", query : event.target.name })
                }
                else{
                    if (event.target.className==="radio-button-rating"){
                        let query =  event.target.getAttribute("data") ? event.target.getAttribute("data") : event.target.parentNode.getAttribute("data") 
                        
                        filters.push({name : "rate", query : query } )
                    }
                    else{
                        filters.push({name : event.target.name, query : event.target.checked })
                    }
                }
                
                
                break  
            }

    }
    let parsed  = queryString.parse(props.location.search);
    filters.forEach(element=>{
        parsed[element.name]=  element.query
    })   
    const stringified = queryString.stringify(parsed);
    props.location.search = stringified;
    props.history.push(props.location)

    return parsed
}

export function getFiltersFromUrl(parsed){
    let parsed_result = {}
    Object.entries(parsed).forEach(([k,v]) => {
        let services__slug_occupied = false
        switch(k){
            case "query":{
                parsed_result['search'] = parsed['query']
                break
            }
            case "sort":{
                parsed_result['ordering']= parsed['sort']
                break
            }
            case "food" : {
                parsed_result['foods__name']= parsed.food
                break
            }
            case 'open-now':{
                parsed_result['restaurant_open'] = parsed['open-now']
                break
            }
            case  'filter':{
                
                parsed_result['services__slug'] = parsed['filter']
                break
            }
            case 'free-delivery':{ 
                if (v===true){
                    parsed_result['services__slug'] = 'free-delivery' 
                }
                              
                break               
            }
            case 'rate':{
                parsed_result['total_review'] = parsed['rate']
                break
            }
        }
    })
    
    return queryString.stringify(parsed_result)
}

export function resetFilters(props){
    props.location.search = {};
    props.history.push(props.location.search)
}   