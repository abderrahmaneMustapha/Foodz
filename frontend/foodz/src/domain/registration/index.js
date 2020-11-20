import React from "react";
import { SignupForm } from "../../components/forms/index";

/* actions */
import { fetchSignupUSer as  fetchSignupUserAction } from "../../api/authApi/index";

/* redux */
import {
    getUserSignup,
    getUserSignupError,
    getUserSignupPending,
    getUserSignupAuth
} from "../../reducer/Auth/registrationReducer";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

 class SignupPage extends React.Component {
   componentDidMount(){
     console.log(this.props)
   }
  render() {
     
    return (
      <div>
        <h3 className="h3">Signup</h3>
        <div className="w-75 mx-auto">
          <SignupForm  submit={this.props.fetchSignupUSer} />
        </div>
      </div>
    );
  }
}

 export class SigninPage extends React.Component {
  render() {
    return (
      <div>
        <h3 className="Signin"></h3>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  user_errors: getUserSignupError(state.signup),
  user: getUserSignup(state.signup),
  user_pending: getUserSignupPending(state.signup),
  auth :  getUserSignupAuth(state.signup)
});



const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
      {
          fetchSignupUSer : fetchSignupUserAction,
      },
      dispatch
  );



export  default connect(mapStateToProps, mapDispatchToProps)( SignupPage);
