

export function getFirstLastName(){
  
    const last_name = JSON.parse(localStorage.getItem('user'))['last_name']
    const first_name = JSON.parse(localStorage.getItem('user'))['first_name']
    console.log( last_name)
    return `${last_name} ${first_name}`
}

export function checkUserExist(){
    return localStorage.getItem('user')
}

export function getUserInfo(key){

    return JSON.parse(localStorage.getItem('user'))[key]
}