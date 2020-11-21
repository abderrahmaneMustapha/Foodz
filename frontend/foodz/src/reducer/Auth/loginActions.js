/* Signup Actions start */

export const FETCH_SIGNIN_USER_PENDING = "FETCH_SIGNIN_USER_PENDING"
export const FETCH_SIGNIN_USER_SUCCESS = "FETCH_SIGNIN_USER_SUCCESS"
export const FETCH_SIGNIN_USER_ERROR = "FETCH_SIGNIN_USER_ERROR"

function fetchSigninUserPending(){
    return {
        type : FETCH_SIGNIN_USER_PENDING
    }
}

function fetchSigninUserSuccess(user){
       
    return {
        type :  FETCH_SIGNIN_USER_SUCCESS,
        user : user,
        auth : true
    }
}

function fetchSigninUserError(){
    return {
        type : FETCH_SIGNIN_USER_ERROR
    }
}

export {fetchSigninUserError, fetchSigninUserSuccess, fetchSigninUserPending}
