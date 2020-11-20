/* the signup part start */
import {
    fetchSignupUserError,
    fetchSignupUserSuccess,
    fetchSignupUserPending,
} from "../../reducer/Auth/registationActions";

export const fetchSignupUSer = (values) => {
    console.log(values);
    return (dispatch) => {
        console.log("dispatch ", dispatch);
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
