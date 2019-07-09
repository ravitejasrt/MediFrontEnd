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
        this.state = {
            surgvalue:'',
            surbsubvalue: '',
            counter:0
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
        this.updateThisCounter = this.updateThisCounter.bind(this)
    }

    handleClick(e){  
        e.preventDefault()
  //      console.log('The link was clicked. Surgical')
    }
	

    componentDidMount() {
//		console.log("componentDidMount location = > "+this.props.location);
	}    
  
	componentWillUnmount() {
//		console.log("componentwillunMount location = > "+this.props.location);
	}

    handleOnChange(e){
        e.preventDefault()
        alert("handle is working")
    }

    updateThisCounter(){
//        alert("----updateThisCounter----")
        this.setState({counter:this.state.counter+1})
//        alert("this state "+this.state.counter)
    }

    surgicalServices(){
        this.props.action('Set Parent state set from child: ') 
        const Mother = () => {
            this.props.action('Set Parent state set from child: ' + Math.floor(Math.random() * 999))
        }      
    }

    render() {
        return (
         <div className="form-card">
         {this.props.location}
           <nav>
            <ul className="nav">
		     <li><a href="#"><b>In-Hospital Services</b></a><a href="#" className="toggle-custom" id="btn-1" data-toggle="collapse" data-target="#submenu1" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu1" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/surgical" onClick={this.props.onClick}  className="fa fa-medkit">Surgical Packages</Link></li>
				  <li><Link to="/cosmetic" onClick={this.props.onClick} className="fa fa-wheelchair">Cosmetic Procedures</Link></li>
				  <li><Link to="/dentalcare" className="fa fa-h-square">Dentalcare Procedures</Link></li>
				  <li><Link to="/daycare" className="fa fa-h-square">DayCare Surgeries</Link></li>
				  <li><Link to="/fertility" className="fa fa-heartbeat">Fertility Procedures</Link></li>
				  <li><Link to={{
                      pathname:"/intervention",
                      hash:"#interventionalinhosp",
                      search: '?quick-submit=true'
                   }} className="fa fa-stethoscope">Interventional Radiology</Link></li>
			  </ul>
	     	 </li>
		     <li><a href="#"><b>Out-Hospital Services</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu4" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu4" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/fixdocapp" className="fa fa-heartbeat">Fix Doctor Appointment</Link></li>
				  <li><Link to="/dentalcons" className="fa fa-heartbeat">Dental Consultation</Link></li>
				  <li><Link to="/healthchkpack" className="fa fa-heartbeat">HealthCheckup Packages</Link></li>
			  </ul>
	         </li>
		     <li><a href="#"><b>Home Services</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu5" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu5" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/homedocser" className="fa fa-heartbeat">Home Doctor Services</Link></li>
				  <li><Link to="/homenursser" className="fa fa-heartbeat">Home Nurshing Services</Link></li>
				  <li><Link to="/homephyser" className="fa fa-heartbeat">Home Physiotheraphy Services</Link></li>
			  </ul>
	         </li>  


		     <li><a href="#"><b>Special Services</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu6" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu6" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/yet" className="fa fa-heartbeat">Cancer theraphy</Link></li>
				  <li><Link to="/yet"className="fa fa-heartbeat">Sexual Medicine</Link></li>
			  </ul>
	         </li>  

		     <li><a href="#"><b>User Login</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu7" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu7" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/yet" className="fa fa-heartbeat">Registration</Link></li>
				  <li><Link to="/yet" className="fa fa-heartbeat">Login</Link></li>
			  </ul>
	         </li>  

		     <li><a href="#"><b>Service ProviderLogin</b></a><a href="#" className="toggle-custom" id="btn-4" data-toggle="collapse" data-target="#submenu8" aria-expanded="false"><span className="glyphicon glyphicon-plus" aria-hidden="true"></span></a>
			  <ul className="nav collapse" id="submenu8" role="menu" aria-labelledby="btn-1">
				  <li><Link to="/yet" className="fa fa-sign-in">Registration</Link></li>
				  <li><Link to="/yet" className="fa fa-sign-in">Login</Link></li>
			  </ul>
	         </li>  
             
	        </ul>
           </nav>

           <Route path="/" exact render={()=> <h5>Home page</h5>}></Route>
           <Route path="/yet" exact render={()=> <h5>Yet to start page</h5>}></Route>


           <Route path="/surgical" component={() => <Surgicalpacks isAuthed='services'  surgvalue={this.state.surgvalue}
                   surgsubvalue={this.state.surgsubvalue}   theme={this.props.theme} SECTION_NAME={this.props.SECTION_NAME} />}/>
           <Route path="/cosmetic"  component={Cosmeticprods}></Route>
           <Route path="/dentalcare"  render={()=> <h5>Dentalcare page</h5>}></Route>
           <Route path="/daycare"  render={()=> <h5>DayCare page</h5>}></Route>
           <Route path="/fertility"  component={Fertilityprods}></Route>
           <Route path="/intervention"  component={Interadiology}></Route>

           <Route path="/fixdocapp"  render={()=> <h5>Fix Doctor Appointment</h5>}></Route>
           <Route path="/dentalcons"  render={()=> <h5>Dental Consultation</h5>}></Route>
           <Route path="/healthchkpack"  render={()=> <h5>HealthCheckup Packages</h5>}></Route>

           <Route path="/homedocser"  component={Homedocsers}></Route>
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
