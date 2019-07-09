import React, { Component } from 'react';
import { IndexRoute, Router, Route, browserHistory } from 'react-router'
import GoogleLogin from './social/GoogleLogin/'
import LinkedinLogin from './social/LinkedinLogin/'
import FacebookLogin from './social/FacebookLogin'
import { GoogleLogin as GoogleLoginLatest  } from 'react-google-login';
import { GoogleLogout as GoogleLogoutLatest } from 'react-google-login';


class Login extends Component {
    
     constructor(props) {
      super(props)
      this.state = {
        googleId:"",
        imageUrl:"",
        email:"",
        name:"",
        givenName:"",
        familyName:""
      }
    } 

    render() {
        const responseGoogle = (response) => {
          console.log(response);
          this.setState({
            googleId: response.profileObj.googleId,
            imageUrl:response.profileObj.imageUrl,
            email:response.profileObj.email,
            name:response.profileObj.name,
            givenName:response.profileObj.givenName,
            familyName:response.profileObj.familyName             
          }) 
        }
        const logout = (response) => {
          console.log("logout clicked!");
          this.setState({
            googleId: "",
            imageUrl:"",
            email:"",
            name:"",
            givenName:"",
            familyName:""             
          })           
          console.log(response);

        }
     
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
                   <h4>Facebook, Google and LinkedIn login with ReactJs</h4>   
                   <p>
                    <FacebookLogin />
                    <GoogleLogin />
                    <LinkedinLogin />
                   </p>         
                  </div>

                  <div className="form-group">
                   <GoogleLoginLatest
                     clientId="989014751017-ondh53jffia48kovdaeqt45ieg1fa1hc.apps.googleusercontent.com"
                     buttonText="Login"
                     onSuccess={responseGoogle}
                     onFailure={responseGoogle}
                   />
                  </div>
                  
                  <div className="form-group">
                   <GoogleLogoutLatest
                     buttonText="Logout"
                     onLogoutSuccess={logout} 
                   />
                  </div>   

                  <div className="form-group">
                    <div className="card">
                     <img src={this.state.imageUrl} alt="product"/>
                     <p>{this.state.email}</p>
                     <p className="title">{this.state.name}</p>
                     <p>{this.state.givenName}</p>
                     <p>{this.state.familyName}</p>
                    </div>
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
