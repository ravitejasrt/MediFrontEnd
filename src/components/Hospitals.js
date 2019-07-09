import React, { Component } from 'react'
import {Route , Link} from 'react-router-dom'

import './Hospitals.css'

const pStyle = {
    color:'blue'
};   

const pStyleimg = {

};

class Hospitals extends Component {
    
    constructor(props) {
        super(props)   
        this.state = {
          data: [],
          value: ''
        }
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){  
        e.preventDefault()
        console.log('The link was clicked. Surgical')
    }

    componentDidMount() {
      console.log("hospital componentDidMount location = > "+this.props.surgvalue)
       return fetch('https://rest-medi-app.herokuapp.com/medi/user/surgicallist/subsec/hosp/359')
       .then((response) => response.json())
       .then((responseJson) => {   
         this.setState({
           data:responseJson
         })
         console.log(this.state.data)
       })      
    }  
    
    componentWillUnmount() {
      console.log("Hospital componentwillunMount location = > "+this.props.surgvalue)
    }

    render() {

      const hospitallist=this.state.data.map((dynamicdata,i)=>
         <div key={i+'z'} className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
            <h4>Section name hosp {this.props.section_name}</h4>
            <h4>Group name hosp {this.props.group_name}</h4> 

            <label className="containerradio"><b>Fix Appointment</b>
             <input type="radio"/>
             <span className="checkmark"></span>
            </label>
            <div className='col-lg-12 well well-add-card'>
              <img src={'https://content3.jdmagicbox.com/comp/kolkata/y1/033pxx33.xx33.170712134036.e1y1/catalogue/dr-sayak-roy-medica-superspecialty-hospital-mukundapur-kolkata-general-physician-doctors-kz177l7url.jpg'} />
            </div>
            <div className='col-lg-12'>
            <table className="table">
              <tbody>
                <tr>
                 <td><i style={pStyle} className="fa fa-plus-square"></i></td>
                 <td><label>Name of Hospital</label></td>
                 <td>{dynamicdata.name_of_hospital}</td>
                </tr>
                <tr>
                 <td><i style={pStyle} className="fa fa-map-marker"></i></td>
                 <td><label>Address</label></td>
                 <td>{dynamicdata.address}</td>
                </tr>
                <tr>
                 <td><i style={pStyle} className="fa fa-user-md"></i></td>
                 <td><label>Name of Consultants</label></td>
                 <td>{dynamicdata.no_of_consultant}</td>
                </tr>
              </tbody>
            </table>
            </div>
            <button type="button" className="btn btn-primary btn-xs btn-update btn-add-card"><b>Fix Appointment</b></button>
          </div>            
        </div>
      )
      return (  
      <div className="container" id="tourpackages-carousel">
          <div className="row">
            <div className="form-group col-xs-12">
              <div id="form-group" className="thumbnail">
                <div className="inner-addon left-addon">
                  <i id="form-search" className="glyphicon glyphicon-search"></i>      
                  <input type="text" className="form-control" placeholder=" Enter name of the Procedure" />
                </div>
              </div>
           </div>   
        </div>
       
        <div className="panel panel-success">
        <div className="panel-heading"><h4>Interventional Radiology - Select service</h4></div>
        <div className="row">
         {hospitallist}
        </div>
    </div>
   
    <div className="form-group">
      <button className="btn btn-danger"  onClick={this.props.prev}>Prev</button>
      <button className="btn btn-success" onClick={this.props.next}>Next</button>
    </div>

    </div>
    
    )
    }
}

export default Hospitals;
