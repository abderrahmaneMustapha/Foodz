/* Signup Actions start */

export const FETCH_SIGNUP_USER_PENDING = "FETCH_SIGNUP_USER_PENDING"
export const FETCH_SUIGNUP_USER_SUCCESS = "FETCH_SUIGNUP_USER_SUCCESS"
export const FETCH_SUIGNUP_USER_ERROR = "FETCH_SUIGNUP_USER_ERROR"

function fetchSignupUserPending(){
    return {
        type : FETCH_SIGNUP_USER_PENDING
    }
}

function fetchSignupUserSuccess(user){
       
    return {
        type : FETCH_SUIGNUP_USER_SUCCESS,
        user_signup : user,
        auth_signup : true
    }
}

function fetchSignupUserError(){
    return {
        type : FETCH_SUIGNUP_USER_ERROR
    }
}

export {fetchSignupUserPending, fetchSignupUserSuccess, fetchSignupUserError}

/* Signup Actions end */