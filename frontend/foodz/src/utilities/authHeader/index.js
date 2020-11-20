export function authHeader(){

    user  = JSON.parse(localStorage.getItem('user'))

    if (user && user.token){
        return { 'Authorization':  `Token ${user.token}` }
    }

    return {}
}