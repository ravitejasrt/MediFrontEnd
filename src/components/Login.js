import React, { Component } from 'react'
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import GoogleLogin from './social/GoogleLogin/'
import LinkedinLogin from './social/LinkedinLogin/'
import FacebookLogin from './social/FacebookLogin'
import { GoogleLogin as GoogleLoginLatest  } from 'react-google-login'
import { GoogleLogout as GoogleLogoutLatest } from 'react-google-login'
import './Login.css';

import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import LoginRegister, {
  PROVIDER_GITHUB,
  PROVIDER_FACEBOOK,
  PROVIDER_TWITTER
} from 'react-mui-login-register';
import Result from './Result';


import Customerdetails from './login/Customerdetails'

class Login extends Component {

  render() {
    return (
      <div className="form-card">
        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" id="email" required onChange={this.props.onChange} value={this.props.email}/>
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" id="psw" onChange={this.props.onChange} value={this.props.psw} required/>
        <div className="form-group">
          <button className="btn btn-danger"
                            onClick={this.props.prev}>Prev</button>
          <button className="btn btn-success"
                            onClick={this.props.next}>Next</button>
        </div>
      </div>
    );
  }

}

export default Login
