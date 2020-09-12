
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
                        alert(event.target.checked)
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
}

export function getFiltersFromUrl(){
    const parsed = queryString.parse(this.props.location.search);
    return parsed
}