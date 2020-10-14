import React from "react";
import { TextInput } from "../inputs/text/index";
import {Button} from "../inputs/buttons/index"
import {Link} from "react-router-dom"
export class SignupForm extends React.Component {
  render() {
    return (
      <form>

        <div className="row">
          <div className="col">
            <TextInput type="text" placeholder="First name" />
          </div>
          <div className="col">
            <TextInput type="text" placeholder="Last name" />
          </div>
        </div>

        <div className="form-group mb-2">
          <TextInput type="email" placeholder="Email" />
        </div>

        <div className="form-group mb-2">
          <TextInput type="password" placeholder="Password" />
        </div>

        <div className="form-group mb-2">
          <TextInput type="text" placeholder="Wilaya" />
        </div>

        <div className="form-group mb-2">
          <TextInput type="text" placeholder="Adress" />
        </div>

        <div className="form-group mb-2">
          <TextInput type="date" placeholder="Date of birth" />
        </div>
        <Button  type="submit"  color="blue" />
        <Link to="/login"> Already have account</Link>
      </form>
    );
  }
}
