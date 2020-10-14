import React from "react";
import { SignupForm } from "../../components/forms/index";
export class SignupPage extends React.Component {
  render() {
    return (
      <div>
        <h3 className="h3">Signup</h3>
        <div className="w-75 mx-auto">
          <SignupForm />
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
