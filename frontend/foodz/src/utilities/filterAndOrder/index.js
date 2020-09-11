
// a package to get params from a url
import queryString from "query-string"

export function addFiltersToUrl(props,filters){
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