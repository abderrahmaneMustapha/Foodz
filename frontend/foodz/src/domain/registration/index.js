import React from "react";
import { SignupForm, SigninForm } from "../../components/forms/index";

/* actions */
import {
    fetchSignupUSer as fetchSignupUserAction,
    fetchSigninUSer as fetchSigninUserAction,
} from "../../api/authApi/index";

/* redux */
import {
    getUserSignup,
    getUserSignupError,
    getUserSignupPending,
    getUserSignupAuth,
} from "../../reducer/Auth/registrationReducer";

import {
    getUserSignin,
    getUserSigninAuth,
    getUserSigninError,
    getUserSigninPending,
} from "../../reducer/Auth/loginReducer";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect } from "react-router-dom";

export class Signout extends React.Component{

    render(){
        localStorage.removeItem("user")
        return(
            <>
            <div> Login out .... good by</div>
            <Redirect to="/"></Redirect>
            </>
        )
        }
}
class SignupPage extends React.Component {
    componentDidMount() {
        console.log(this.props);
    }
    render() {
        return (
            <div>
                <h3 className="h3">Signup</h3>
                <div className="w-75 mx-auto">
                    <SignupForm submit={this.props.fetchSignupUSer} />
                </div>
            </div>
        );
    }
}

class SigninPage extends React.Component {
    render() {
        return (
            <div>
                <h3 className="Signin"></h3>
                <div className="w-75 mx-auto">
                    <SigninForm submit={this.props.fetchSigninUSer} />
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    user_errors_signup: getUserSignupError(state.signup),
    user_signup: getUserSignup(state.signup),
    user_pending_signup: getUserSignupPending(state.signup),
    auth_signup: getUserSignupAuth(state.signup),

    user_errors_signin: getUserSigninError(state.signin),
    user_signin: getUserSignin(state.signin),
    user_pending_signin: getUserSigninPending(state.signin),
    auth_signin: getUserSigninAuth(state.signin),
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            fetchSignupUSer: fetchSignupUserAction,
            fetchSigninUSer: fetchSigninUserAction,
        },
        dispatch
    );

export const SignupPageConnect =  connect(mapStateToProps, mapDispatchToProps)(SignupPage);
export const SigninPageConnect = connect(mapStateToProps, mapDispatchToProps)(SigninPage);
