import React, { Component } from 'react';
import axios from 'axios';

class Customerdetails extends Component {


  constructor(props) {
    super(props);
    this.input = React.createRef();
    this.inputname = React.createRef();
    this.inputage = React.createRef();
    this.inputgender = React.createRef();
    this.inputemail = React.createRef();
    this.mobileno1 = React.createRef();
    this.mobileno2 = React.createRef();
    this.inputmessage = React.createRef();
    this.inputappdate = React.createRef();
    this.inputapptime = React.createRef();
    this.inputpolicyname = React.createRef();
    this.inputcompany = React.createRef();
    this.inputpolicyinfo = React.createRef();
    this.inputpolicynumber = React.createRef();
    this.inputvalidfrom = React.createRef();
    this.inputvalidtill = React.createRef();
    this.inputrelationship = React.createRef();
    this.inputfamilydocname = React.createRef();
    this.inputfamilydocmobileno = React.createRef();

    this.handleSubmit = this.handleSubmit.bind(this);

  }
  
  handleSubmit(event) {
    event.preventDefault();
    this.state = {
      inputname: '',  
      name:this.input.current.value,
      age:this.inputage.current.value,
      gender:this.inputgender.current.value,
      email:this.inputemail.current.value,
      mobile_no1:this.mobileno1.current.value,
      mobile_no2:this.mobileno2.current.value,
      address:this.inputmessage.current.value,
      appointment_date:this.inputappdate.current.value,
      appointment_time:this.inputapptime.current.value,
      relationship:this.inputrelationship.current.value,
      doctor_name:this.inputfamilydocname.current.value,
      mobile_name:this.inputfamilydocmobileno.current.value,
      health_insurance_policy_name:this.inputpolicyname.current.value,
      health_insurance_company:this.inputcompany.current.value,
      health_insurance_policy_type:this.inputpolicyinfo.current.value,
      health_insurance_policy_number:this.inputpolicynumber.current.value,
      health_insurance_policy_valid_from:this.inputvalidfrom.current.value,
      health_insurance_policy_valid_to:this.inputvalidtill.current.value,            
    };    
    console.log('A name was submitted: ' + this.props.input);
    console.log('A inputage was submitted: ' + this.props.inputage);
    console.log('A inputgender was submitted: ' + this.props.inputgender);
    console.log('A inputemail was submitted: ' + this.props.inputemail);
    console.log('A mobileno1 was submitted: ' + this.props.mobileno1);
    console.log('A mobileno2 was submitted: ' + this.props.mobileno2);
    console.log('A inputmessage was submitted: ' + this.props.inputmessage);
    console.log('A inputappdate was submitted: ' + this.props.inputappdate);
    console.log('A inputapptime was submitted: ' + this.props.inputapptime);
    console.log('A inputpolicyname was submitted: ' + this.props.inputpolicyname);
    console.log('A inputcompany was submitted: ' + this.props.inputcompany);
    console.log('A inputpolicyinfo was submitted: ' + this.props.inputpolicyinfo);
    console.log('A inputpolicynumber was submitted: ' + this.props.inputpolicynumber);
    console.log('A inputvalidfrom was submitted: ' + this.props.inputvalidfrom);
    console.log('A inputvalidtill was submitted: ' + this.props.inputvalidtill);  
    console.log('this.state : ' + this.state);    
    console.log('event : ' + event);    

    const data={
      name:this.input.current.value,
      age:this.inputage.current.value,
      gender:this.inputgender.current.value,
      email:this.inputemail.current.value,
      mobile_no1:this.mobileno1.current.value,
      mobile_no2:this.mobileno2.current.value,
      address:this.inputmessage.current.value,
      appointment_date:this.inputappdate.current.value,
      appointment_time:this.inputapptime.current.value,
      relationship:this.inputrelationship.current.value,
      doctor_name:this.inputfamilydocname.current.value,
      mobile_name:this.inputfamilydocmobileno.current.value,
      health_insurance_policy_name:this.inputpolicyname.current.value,
      health_insurance_company:this.inputcompany.current.value,
      health_insurance_policy_type:this.inputpolicyinfo.current.value,
      health_insurance_policy_number:this.inputpolicynumber.current.value,
      health_insurance_policy_valid_from:this.inputvalidfrom.current.value,
      health_insurance_policy_valid_to:this.inputvalidtill.current.value,       
    }
    console.log('data : ' + data);    
    console.log('data.name : ' + data.name);    
    console.log('data.age : ' + data.age);    
    console.log('data.gender : ' + data.gender);    
    console.log('data.email : ' + data.email);    

    axios.post('https://rest-medi-app.herokuapp.com/medi/user/spuserfixapp', {
        data,
        name:this.input.current.value,
        age:this.inputage.current.value,
        gender:this.inputgender.current.value,
        email:this.inputemail.current.value,
        mobile_no1:this.mobileno1.current.value,
        mobile_no2:this.mobileno2.current.value,
        address:this.inputmessage.current.value,
        appointment_date:this.inputappdate.current.value,
        appointment_time:this.inputapptime.current.value,
        relationship:this.inputrelationship.current.value,
        doctor_name:this.inputfamilydocname.current.value,
        mobile_name:this.inputfamilydocmobileno.current.value,
        health_insurance_policy_name:this.inputpolicyname.current.value,
        health_insurance_company:this.inputcompany.current.value,
        health_insurance_policy_type:this.inputpolicyinfo.current.value,
        health_insurance_policy_number:this.inputpolicynumber.current.value,
        health_insurance_policy_valid_from:this.inputvalidfrom.current.value,
        health_insurance_policy_valid_to:this.inputvalidtill.current.value,          
      statusText: 'OK',
      responseType: 'application/json'
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });

  }
  
render() {
  return(
  <form onSubmit={this.handleSubmit}>            
  <div className="container">
   <div className="panel-group" id="accordion">
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse1"><b>Patient Details</b></a>
        </h4>
      </div>
      <div id="collapse1" className="panel-collapse collapse in">
        <div className="panel-body">
          <div className="form-inline">
            <div className="form-card">
              <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Patient Info</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Input Your Name *."> </span>
                    <input type="text" id="inputname" data-min-length="8" placeholder="Name *" ref={this.input}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Age *."> </span>
                  <input type="text" id="inputage" placeholder="Age *" ref={this.inputage}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Gender *."> </span>
                  <input type="text" id="inputgender" placeholder="Gender *" ref={this.inputgender}/>
                 </span>
                </div>
                </div>
               </div>

               <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Contact Info</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Input Your Email *."> </span>
                    <input type="email" data-min-length="8" placeholder="Email *" id="inputemail" ref={this.inputemail}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Mobile number1 *."> </span>
                  <input type="tel" placeholder="Mobile number1 *" id="mobileno1" ref={this.mobileno1}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Mobile number2."> </span>
                  <input type="text" placeholder="Mobile number2" id="mobileno2" ref={this.mobileno2}/>
                 </span>
                </div>
                </div>
               </div>


               <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Address</h4>
                </div>
               </div>
               <div className="input-container">
               <div className="row">
                 <span className="req-input message-box">
                    <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Include a Message."> </span>
                    <textarea type="textarea" data-min-length="10" id="inputmessage" placeholder="Message" ref={this.inputmessage}></textarea>
                 </span>
                </div>                      
               </div>
               </div>
         </div>
        </div>
        </div>
      </div>
    </div>
    
    <div className="panel panel-primary">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse2"><b>Appointment Details</b></a>
        </h4>
      </div>
      <div id="collapse2" className="panel-collapse collapse">
        <div className="panel-body">
        <div className="form-inline">
        <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Appointment Date *</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Input Your Date."> </span>
                    <input type="date" data-min-length="8" placeholder="date*" id="inputappdate" ref={this.inputappdate}/>
                 </span>
                </div>
                </div>
               </div>
               <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Appointment Time *</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Input Your time."> </span>
                    <input type="time" data-min-length="8" placeholder="time*" id="inputapptime" ref={this.inputapptime}/>
                 </span>
                </div>
                </div>
               </div>
           </div>    
        </div>
      </div>
    </div>

    <div className="panel panel-primary">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse3"><b>Health Insurance</b></a>
        </h4>
      </div>
      <div id="collapse3" className="panel-collapse collapse">
        <div className="panel-body">
        <div className="form-inline">
        <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Policy Name</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Input Your Policy Name."> </span>
                    <input type="text" data-min-length="8" placeholder="Policy Name" id="inputpolicyname" ref={this.inputpolicyname}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Company."> </span>
                  <input type="text" placeholder="Company" id="inputcompany" ref={this.inputcompany}/>
                 </span>
                </div>
                </div>
               </div>
               <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Policy Info</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Input Your Policy Type."> </span>
                    <input type="text" data-min-length="8" placeholder="Policy Type"  id="inputpolicyinfo" ref={this.inputpolicyinfo}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Policy Number (Reg.No)."> </span>
                  <input type="text" placeholder="Policy Number"   id="inputpolicynumber" ref={this.inputpolicynumber}/>
                 </span>
                </div>
                </div>
               </div>
               <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Policy validity</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Valid from."> </span>
                    <input type="date" data-min-length="8" placeholder="Valid from" id="inputvalidfrom" ref={this.inputvalidfrom}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Valid till."> </span>
                  <input type="date" placeholder="Valid till" id="inputvalidtill" ref={this.inputvalidtill}/>
                 </span>
                </div>
                </div>
               </div>                 
          </div>                       
        </div>
      </div> 
      </div>

      <div className="panel panel-primary">
      <div className="panel-heading">
        <h4 className="panel-title">
          <a data-toggle="collapse" data-parent="#accordion" href="#collapse4"><b>Contact Person Details</b></a>
        </h4>
      </div>
      <div id="collapse4" className="panel-collapse collapse">
        <div className="panel-body">
            <div className="form-card">
            <div className="form-inline">
            <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Contact Person *</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Input Your Name."> </span>
                    <input type="text" data-min-length="8" placeholder="Name*" id="inputname" ref={this.inputname}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Relationship*."> </span>
                  <input type="text" placeholder="Relationship*"  id="inputrelationship" ref={this.inputrelationship}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Mobile Number*."> </span>
                  <input type="tel" placeholder="Mobile Number *"  id="inputcontmobileno" ref={this.inputcontmobileno}/>
                 </span>
                </div>
                </div>
               </div>
               <div id="contact-form" className="form-container" data-form-container>
               <div className="row">
                <div className="form-title">
                 <h4>Family Doctor (Optinal)</h4>
                </div>
               </div>
               <div className="input-container">
                <div className="row">
                 <span className="req-input" >
                  <span className="input-status" data-toggle="tooltip" data-placement="top" title="Input Your Name."> </span>
                    <input type="text" data-min-length="8" placeholder="Name*" id="inputfamilydocname" ref={this.inputfamilydocname}/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Mobile Number."> </span>
                  <input type="tel" placeholder="Mobile Number"  id="inputfamilydocmobileno" ref={this.inputfamilydocmobileno}/>
                 </span>
                </div>
                </div>
               </div>
          </div>     
        </div>
        </div>
      </div>
    </div>

   </div> 
  </div>
  <input type="submit" className="btn btn-success" value="Submit" />

</form>
  )
  }

}



export default Customerdetails
