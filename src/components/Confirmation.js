import React, { Component } from 'react';

class Confirmation extends Component {
 
    componentDidMount() {
         return fetch('http://msg.msgclub.net/rest/services/sendSMS/sendGroupSms?AUTH_KEY=5a12243d83e5d434291fd74318bffe2&message=message&senderId=DEMOOS&routeId=1&mobileNos=8248366313&smsContentType=english')
         .then((response) => response.json())
         .then((responseJson) => {   
           this.setState({
             data:responseJson
           })
           alert("responseJson = "+responseJson);
         })      
    }  

    render() {
        return (
            <div className="text-center form-card">
                <h3>Thank you for registering!</h3><br/>
                <p>You will now receive a confirmation email, please click the link in this email to activate your account. If you can't find the activation email, please check your <strong>JUNK</strong> folder.</p><br/>
                <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">Click here to resend activation email</a>
                <h6>{this.props.name}</h6>
                <h6>{this.props.isbn}</h6>
                <h6>{this.props.author}</h6>
                <h6>{this.props.cover}</h6>
                <h6>{this.props.status}</h6>
                <h6>{this.state.data}</h6>
                <h6>{this.props.email}</h6>
                <h6>{this.props.psw}</h6> 
            </div>
        )
    }
}

export default Confirmation;
