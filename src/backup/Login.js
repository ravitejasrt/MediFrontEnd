import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import GoogleLogin from './social/GoogleLogin/'
import LinkedinLogin from './social/LinkedinLogin/'
import FacebookLogin from './social/FacebookLogin'

class Login extends Component {

    render() {
        return (
            <div className="form-card">
                  <div className="form-group">
                   <div className="input-group margin-bottom-sm">
                    <span className="input-group-addon"><i className="fa fa-envelope-o fa-fw"></i></span>
                    <input className="form-control" type="text" placeholder="Email address"/>
                   </div>
                 </div>
                 <div className="form-group">
                   <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-key fa-fw"></i></span>
                    <input className="form-control" type="password" placeholder="Password"/>
                   </div>
                  </div>
                  <div className="form-group">              
                    <div className="btn-group open">
                     <a className="btn btn-primary" href="#"><i className="fa fa-user fa-fw"></i> User</a>
                    </div>
                  </div>

                  <div className="form-group">
                  <h2>Facebook, Google and LinkedIn login with ReactJs</h2>   
                   <p>
                    <FacebookLogin />
                    <GoogleLogin />
                    <LinkedinLogin />
                   </p>         
                  </div>

                <div className="form-group">
                    <button className="btn btn-danger"
                            onClick={this.props.prev}>Prev</button>
                    <button className="btn btn-success"
                            onClick={this.props.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default Login
