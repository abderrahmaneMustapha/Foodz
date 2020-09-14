
// a package to get params from a url
import queryString from "query-string"

export function addFiltersToUrl(props,event){
    let filters = []
    let name = event.target.getAttribute("name") ?  event.target.getAttribute("name") : event.target.parentNode.getAttribute("name") 
   
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
                    filters.push({name : "filter", query : event.target.name } )
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
    console.log(parsed)
    Object.entries(parsed).forEach(([k,v]) => {
        switch(k){
            case "query":{
                parsed_result['search'] = parsed['query']
            }
            case "sort":{
                parsed_result['ordering']= parsed['sort']
            }
            case "food" : {
                parsed_result['foods__name']= parsed.food
            }
            case 'open-now':{
                parsed_result['restaurant_open'] = parsed['open-now']
            }
            case  'filter':{
                parsed_result['services__choice'] = parsed['filter']
            }
            case 'free-delivery':{
                parsed_result['services__choice'] = 'free-delivery'
            }
            case 'rate':{
                parsed_result['total_review'] = parsed['rate']
            }
        }
    })
    
    return queryString.stringify(parsed_result)
}

export function resetFilters(props){
    props.location.search = {};
    props.history.push(props.location.search)
}   