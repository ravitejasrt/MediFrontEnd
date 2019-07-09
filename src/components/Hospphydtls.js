import React, { Component } from 'react';
import './Hospphydtls.css'

class Hospphydtls extends Component {
   render(){
     return(
      <div className="contaner-fluid">
      <div className="panel panel-primary">
       <div className="panel-heading">Interventional Radiology Hospital Services Appointment details</div>
        <div className="panel-body"></div>       
        <ul className="list-group">
          <li className="list-group-item">
            <label>Name of the Hospital: {this.props.headerProp}</label>
             Sample Test Hospital {this.props.email}{this.props.psw}
            <div className="clear"></div>
          </li>
          <li className="list-group-item">
            <label>Test Name: </label>
             Angiography
            <div className="clear"></div>
          </li>
          <li className="list-group-item">
            <label>Date Of Appointment: </label>
              22-Mar-2019 14:35
            <div className="clear"></div>
          </li>
          <li className="list-group-item">
            <label>Hospital Place: </label>
              Chennai 
            <div className="clear"></div>
          </li>
          <li className="list-group-item">
            <label>Price: </label>
            1000
            <div className="clear"></div>
          </li> 
          <li className="list-group-item">
           <b> PAY BY CREDIT CARD / NET BANKING </b>
            <input name="payTyp" id="payTyp" type="radio" value="paidthousand"/>Pay <b>Rs.1000.00</b> now and settle the balance before discharge.
           <div className="clear"></div>
          </li>
         </ul>
       </div>

        <div className="form-group">
         <button className="btn btn-danger"  onClick={this.props.prev}>Prev</button>
         <button className="btn btn-success" onClick={this.props.next}>Next</button>
        </div>

      </div>
     )
   }
 
}

export default Hospphydtls