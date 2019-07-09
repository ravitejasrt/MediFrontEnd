import React, { Component } from 'react'
import {Route , Link} from 'react-router-dom'

import Homedocsers from './serviceslogin/home/Homedocsers'
import Homenurssers from './serviceslogin/home/Homenurssers'
import Homephysers from './serviceslogin/home/Homephysers'

import Daycaresurgs from './serviceslogin/inhospital/Daycaresurgs' 
import Cosmeticprods from './serviceslogin/inhospital/Cosmeticprods' 
import Dentalcareprods from './serviceslogin/inhospital/Dentalcareprods' 
import Fertilityprods from './serviceslogin/inhospital/Fertilityprods' 
import Interadiology from './serviceslogin/inhospital/Interadiology' 
import Surgicalpacks from './serviceslogin/inhospital/Surgicalpacks' 

import Dentalcons from './serviceslogin/outhospital/Dentalcons' 
import Fixdoctorapp from './serviceslogin/outhospital/Fixdoctorapp' 
import Healthcheckuppacks from './serviceslogin/outhospital/Healthcheckuppacks' 



class Services extends Component {
    
    constructor(props) {
        super(props)   
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){  
        e.preventDefault()
        console.log('The link was clicked. Surgical')
    }
    
    render() {
        return (
         <div className="form-card">
           <nav>
            <ul className="nav">
		     <li><a href="#"><b>In-Hospital Services</b></a><a href="#" className="toggle-custom" id="btn-1" data-toggle="collapse" data-target="#submenu1" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu1" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/surgical" onClick={this.handleClick}>Surgical Packages</Link></li>
				  <li><Link to="/cosmetic">Cosmetic Procedures</Link></li>
				  <li><Link to="/dentalcare">Dentalcare Procedures</Link></li>
				  <li><Link to="/daycare">DayCare Surgeries</Link></li>
				  <li><Link to="/fertility">Fertility Procedures</Link></li>
				  <li><Link to={{
                      pathname:"/intervention",
                      hash:"#interventionalinhosp",
                      search: '?quick-submit=true'
                   }}>Interventional Radiology</Link></li>
			  </ul>
	     	 </li>
		     <li><a href="#"><b>Out-Hospital Services</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu4" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu4" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/fixdocapp">Fix Doctor Appointment</Link></li>
				  <li><Link to="/dentalcons">Dental Consultation</Link></li>
				  <li><Link to="/healthchkpack">HealthCheckup Packages</Link></li>
			  </ul>
	         </li>
		     <li><a href="#"><b>Home Services</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu5" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu5" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/homedocser">Home Doctor Services</Link></li>
				  <li><Link to="/homenursser">Home Nurshing Services</Link></li>
				  <li><Link to="/homephyser">Home Physiotheraphy Services</Link></li>
			  </ul>
	         </li>             
	        </ul>
           </nav>

           <Route path="/" exact render={()=> <h5>Home page</h5>}></Route>

           <Route path="/surgical"  render={()=> <h5>Surgical page</h5>}></Route>
           <Route path="/cosmetic"  component={Cosmeticprods}></Route>
           <Route path="/dentalcare"  render={()=> <h5>Dentalcare page</h5>}></Route>
           <Route path="/daycare"  render={()=> <h5>DayCare page</h5>}></Route>
           <Route path="/fertility"  component={Fertilityprods}></Route>
           <Route path="/intervention"  component={Interadiology}></Route>

           <Route path="/fixdocapp"  render={()=> <h5>Fix Doctor Appointment</h5>}></Route>
           <Route path="/dentalcons"  render={()=> <h5>Dental Consultation</h5>}></Route>
           <Route path="/healthchkpack"  render={()=> <h5>HealthCheckup Packages</h5>}></Route>

           <Route path="/homedocser"  render={()=> <h5>Home Doctor Services page</h5>}></Route>
           <Route path="/homenursser"  render={()=> <h5>Home Nurshing Services page</h5>}></Route>
           <Route path="/homephyser"  render={()=> <h5>Home Physiotheraphy Services page</h5>}></Route>


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

export default Services;
