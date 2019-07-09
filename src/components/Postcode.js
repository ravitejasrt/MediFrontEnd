import React, { Component } from 'react';
import './Postcode.css'
import StripeCheckout from 'react-stripe-checkout';

import {CardElement} from 'react-stripe-elements'
import {CardNumberElement} from 'react-stripe-elements'
import {CardExpiryElement} from 'react-stripe-elements'
import {CardCVCElement} from 'react-stripe-elements'
import {PostalCodeElement} from 'react-stripe-elements'
import {PaymentRequestButtonElement} from 'react-stripe-elements'
import {IbanElement} from 'react-stripe-elements'
import {IdealBankElement} from 'react-stripe-elements'
import {StripeProvider} from 'react-stripe-elements'
import {Elements} from 'react-stripe-elements'
import {injectStripe} from 'react-stripe-elements'
import axios from "axios";


const stripeBtn = () => {
  const publishableKey = "pk_test_pMY5SCNprTRUfVMXAgLOMAtN";
  const onToken = token => {
    const body = {
      amount: 999,
      token: token
   };
  }
}

class Postcode extends Component {

  constructor(props) {
    super(props);
    this.state = {
      toggle: false,
    };
  }

  componentDidMount() {
    return fetch('http://msg.msgclub.net/rest/services/sendSMS/sendGroupSms?AUTH_KEY=5a12243d83e5d434291fd74318bffe2&message=message&senderId=DEMOOS&routeId=1&mobileNos=8248366313&smsContentType=english',     
     {
      headers: {
      "Content-Type": "application/json",
      "mode": 'no-cors',
      "Access-Control-Allow-Origin": "*",
    },
    http: true
    })
    .then((response) => response.json())
    .then((responseJson) => {   
      this.setState({
        data:responseJson
      })
      alert("responseJson = "+responseJson);
    })      
  }   

  onToken = (token) => {
    const datapost={
      transaction_id:1,
      mode_pay:'online',
      amount:'1',
      status:'pending',
      investigate_date:'03-03-03',
      investigate_time:'00:01',
      commission:'1',
      trans_date:'03-03-03',
      patient_id:1,
      user_id:1,
      hosp_id:1,
      branch_id:1 ,
      service_category_id:1,
      facility_id:1,
      ayush_amount:1000,
      date_pay:'03-03-03',
      ward_name:'common',
      ward_id:1 ,
      mail_status:'not send',
      filterdate:'03-03-03' ,
      method: 'POST'
    }
    fetch('https://rest-medi-app.herokuapp.com/medi/user/payment', {
      datapost,
      transaction_id:1,
      mode_pay:'online',
      amount:'1',
      status:'pending',
      investigate_date:'03-03-03',
      investigate_time:'00:01',
      commission:'1',
      trans_date:'03-03-03',
      patient_id:1,
      user_id:1,
      hosp_id:1,
      branch_id:1 ,
      service_category_id:1,
      facility_id:1,
      ayush_amount:1000,
      date_pay:'03-03-03',
      ward_name:'common',
      ward_id:1 ,
      mail_status:'not send',
      filterdate:'03-03-03' ,
      method: 'POST',
      body: JSON.stringify(token),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "https://rest-medi-app.herokuapp.com"
      },
      statusText: 'OK',
      responseType: 'application/json'
    }).then(response => {
      response.json().then(data => {
        alert(this.state.toggle)
        this.setState({
          toggle: true
        });
        alert(`We are in business, ${data.email}`)
        console.log(`${data}`+" wardname "+`${data[0]}`+" length "+Object.keys(data).length)
        Object.entries(data).forEach(entry => {
          let key = entry[0]
          let value = entry[1]
          console.log('key = '+key+" value = "+value)
        });
        Object.entries(datapost).forEach(entry => {
          let key = entry[0]
          let value = entry[1]
          console.log('post key = '+key+" value = "+value)
        });
      });
    });
  }

  render() {
    return (
      <div className="form-card">
        {this.props.location}
        {!this.state.toggle ?
        <StripeCheckout
          token={this.onToken}
          stripeKey="pk_test_pMY5SCNprTRUfVMXAgLOMAtN"
          email="qwert.dental@gmail.com"
          token={this.onToken}
        >
        </StripeCheckout>
        :
         <div className="form-group">
          <div className="alert alert-success">
            <strong>Success!</strong> Transaction Successfully completed.
          </div>
          <h6>{this.props.name}</h6>
                <h6>{this.props.isbn}</h6>
                <h6>{this.props.author}</h6>
                <h6>{this.props.cover}</h6>
                <h6>{this.props.status}</h6>
                <h6>{this.props.location}</h6>
                <h6>{this.props.email}</h6>
                <h6>{this.props.psw}</h6>                
         </div>
        }
        <div className="form-group">
          <button className="btn btn-danger" onClick={this.props.prev}>Prev</button>
        </div>
      </div>
    )
  }
}

export default Postcode;
