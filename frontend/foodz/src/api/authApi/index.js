/* the signup part start */
import {
    fetchSignupUserError,
    fetchSignupUserSuccess,
    fetchSignupUserPending,
} from "../../reducer/Auth/registationActions";

import {
    fetchSigninUserError,
    fetchSigninUserPending,
    fetchSigninUserSuccess
} from "../../reducer/Auth/loginActions"

export const fetchSignupUSer = (values) => {
  
    return (dispatch) => {
      
        dispatch(fetchSignupUserPending());
        let form_data = new FormData();
        form_data.append("first_name", values.first_name);
        form_data.append("last_name", values.last_name);
        form_data.append("email", values.email);
        form_data.append("password", values.password);
        form_data.append("date_birth", values.date_birth);
        form_data.append("adress", values.adress);
        form_data.append("wilayas", values.wilayas);

        fetch("http://localhost:8000/api/create-account/", {
            method: "POST",
            body: form_data,
        })
            .then((res) => res.json())
            .then((data) => {
                
                if (!data.token) {
                    dispatch(fetchSignupUserError(data));
                    return data;
                }

                dispatch(fetchSignupUserSuccess(data));
                localStorage.setItem("user", JSON.stringify(data));
                return data;
                
            })
            .catch((error) => {
                dispatch(fetchSignupUserError(error));
            });
    };
};

/* the signup part end */

export const fetchSigninUSer = (values)=>{
    console.log("fetch signin user : " , values)
    return (dispatch)=>{
        dispatch(fetchSigninUserPending())
        let form_data =  new FormData()
        form_data.append("email", values.email);
        form_data.append("password", values.password);

        fetch("http://localhost:8000/api/login-account/", {
            method: "POST",
            body: form_data,
        })
            .then((res) => res.json())
            .then((data) => {                
                if (!data.token) {
                    dispatch(fetchSigninUserError(data));
                    return data;
                }

                dispatch(fetchSigninUserSuccess(data));
                localStorage.setItem("user", JSON.stringify(data));
                return data;
                
            })
            .catch((error) => {
                dispatch(fetchSigninUserError(error));
            });

    }
}