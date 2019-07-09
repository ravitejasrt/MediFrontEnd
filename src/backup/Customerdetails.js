import React, { Component } from 'react';

class Customerdetails extends Component {

    render() {
        return(
            
            <div className="form-card">
            <nav>
             <ul className="nav">
              <li><a href="#"><b>Patient Details</b></a><a href="#" className="toggle-custom" id="btn-1" data-toggle="collapse" data-target="#submenu1" aria-expanded="false"><span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span></a>
                    <ul className="nav collapse" id="submenu1" role="menu" aria-labelledby="btn-1">
              <div className="row">
              <div className="col-md-4">
              <form>
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
                    <input type="text" data-min-length="8" placeholder="Name *"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Age *."> </span>
                  <input type="email" placeholder="Age *"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Gender *."> </span>
                  <input type="text" placeholder="Gender *"/>
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
                    <input type="email" data-min-length="8" placeholder="Email *"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Mobile number1 *."> </span>
                  <input type="tel" placeholder="Mobile number1 *"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Mobile number2."> </span>
                  <input type="text" placeholder="Mobile number2"/>
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
                    <textarea type="textarea" data-min-length="10" placeholder="Message"></textarea>
                 </span>
                </div>                      
               </div>
               </div>

              </form>
             </div>
            </div>
            </ul>
           </li> 



           <li><a href="#"><b>Appointment Details</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu4" aria-expanded="false"><span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span></a>
                 <ul className="nav collapse" id="submenu4" role="menu" aria-labelledby="btn-1">
           <div className="row">
              <div className="col-md-4">
              <form>
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
                    <input type="date" data-min-length="8" placeholder="date*"/>
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
                    <input type="time" data-min-length="8" placeholder="time*"/>
                 </span>
                </div>
                </div>
               </div>
              </form>
             </div>
            </div>
                 </ul>
             </li>


           <li><a href="#"><b>Contact Person Details</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu4" aria-expanded="false"><span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span></a>
                 <ul className="nav collapse" id="submenu4" role="menu" aria-labelledby="btn-1">
           <div className="row">
              <div className="col-md-4">
              <form>
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
                    <input type="text" data-min-length="8" placeholder="Name*"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Relationship*."> </span>
                  <input type="email" placeholder="Relationship*"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Mobile Number*."> </span>
                  <input type="tel" placeholder="Mobile Number *"/>
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
                    <input type="text" data-min-length="8" placeholder="Name*"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Mobile Number."> </span>
                  <input type="tel" placeholder="Mobile Number"/>
                 </span>
                </div>
                </div>
               </div>

              </form>
             </div>
            </div>

                 </ul>
             </li>

            <li><a href="#"><b>Health Insurance</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu5" aria-expanded="false"><span className="glyphicon glyphicon-pushpin" aria-hidden="true"></span></a>
                 <ul className="nav collapse" id="submenu5" role="menu" aria-labelledby="btn-1">
             <div className="row">
              <div className="col-md-4">
              <form>
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
                    <input type="text" data-min-length="8" placeholder="Policy Name"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Company."> </span>
                  <input type="text" placeholder="Company"/>
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
                    <input type="text" data-min-length="8" placeholder="Policy Type"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Please Input Your Policy Number (Reg.No)."> </span>
                  <input type="email" placeholder="Policy Number"/>
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
                    <input type="text" data-min-length="8" placeholder="Valid from"/>
                 </span>
                </div>
                <div className="row">
                 <span className="req-input">
                 <span className="input-status" data-toggle="tooltip" data-placement="top" title="Valid till."> </span>
                  <input type="email" placeholder="Valid till"/>
                 </span>
                </div>
                </div>
               </div>                                        
              </form>
             </div>
            </div>

                 </ul>
             </li>             

          </ul>
         </nav>
        
         </div>

        )
    }

}



export default Customerdetails
