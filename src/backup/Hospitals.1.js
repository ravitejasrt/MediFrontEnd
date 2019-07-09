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
        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(e){  
        e.preventDefault()
        console.log('The link was clicked. Surgical')
    }

    componentDidMount() {
      console.log("componentDidMount location = > "+this.props.location);
    }    

    componentWillUnmount() {
      console.log("componentwillunMount location = > "+this.props.location);
    }

    render() {
      return (  
      <div className="container" id="tourpackages-carousel">
          <div className="form-group">
            {this.props.location}
          </div>
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
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
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
                     <td><label>Krishna Hospital</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-map-marker"></i></td>
                     <td><label>Address</label></td>
                     <td><label>Behind Axis bank</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-user-md"></i></td>
                     <td><label>Name of Consultants</label></td>
                     <td><label>5</label></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <button type="button" className="btn btn-primary btn-xs btn-update btn-add-card"><b>Fix Appointment</b></button>
            </div>            
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
                <label className="containerradio"><b>Fix Appointment</b>
                 <input type="radio"/>
                 <span className="checkmark"></span>
                </label>
                <div className='col-lg-12 well well-add-card'>
                  <img src={'http://beaconhospital.com.my/wp-content/uploads/2017/07/Beacon-Hospital-large-1024x607.jpg'} />
                </div>
                <div className='col-lg-12'>
                <table className="table">
                  <tbody>
                    <tr>
                     <td><i style={pStyle} className="fa fa-plus-square"></i></td>
                     <td><label>Name of Hospital</label></td>
                     <td><label>Krishna Hospital</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-map-marker"></i></td>
                     <td><label>Address</label></td>
                     <td><label>Behind Axis bank</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-user-md"></i></td>
                     <td><label>Name of Consultants</label></td>
                     <td><label>5</label></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <button type="button" className="btn btn-primary btn-xs btn-update btn-add-card"><b>Fix Appointment</b></button>
            </div>            
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
                <label className="containerradio"><b>Fix Appointment</b>
                 <input type="radio"/>
                 <span className="checkmark"></span>
                </label>
                <div className='col-lg-12 well well-add-card'>
                  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhs88gl2qU85Jl5uKT4gzFP78mFuHcDgvv-G7A08A39ty5RqKSAg'} />
                </div>
                <div className='col-lg-12'>
                <table className="table">
                  <tbody>
                    <tr>
                     <td><i style={pStyle} className="fa fa-plus-square"></i></td>
                     <td><label>Name of Hospital</label></td>
                     <td><label>Krishna Hospital</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-map-marker"></i></td>
                     <td><label>Address</label></td>
                     <td><label>Behind Axis bank</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-user-md"></i></td>
                     <td><label>Name of Consultants</label></td>
                     <td><label>5</label></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <button type="button" className="btn btn-primary btn-xs btn-update btn-add-card"><b>Fix Appointment</b></button>
            </div>            
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
                <label className="containerradio"><b>Fix Appointment</b>
                 <input type="radio"/>
                 <span className="checkmark"></span>
                </label>
                <div className='col-lg-12 well well-add-card'>
                  <img src={'http://www.medibazaar.com/images/hosp.jpg'} />
                </div>
                <div className='col-lg-12'>
                <table className="table">
                  <tbody>
                    <tr>
                     <td><i style={pStyle} className="fa fa-plus-square"></i></td>
                     <td><label>Name of Hospital</label></td>
                     <td><label>Krishna Hospital</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-map-marker"></i></td>
                     <td><label>Address</label></td>
                     <td><label>Behind Axis bank</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-user-md"></i></td>
                     <td><label>Name of Consultants</label></td>
                     <td><label>5</label></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <button type="button" className="btn btn-primary btn-xs btn-update btn-add-card"><b>Fix Appointment</b></button>
            </div>            
        </div>        
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
                <label className="containerradio"><b>Fix Appointment</b>
                 <input type="radio"/>
                 <span className="checkmark"></span>
                </label>
                <div className='col-lg-12 well well-add-card'>
                  <img src={'https://healthitsecurity.com/images/site/article_headers/_normal/2017-11-08large-data-breach.jpg'} />
                </div>
                <div className='col-lg-12'>
                <table className="table">
                  <tbody>
                    <tr>
                     <td><i style={pStyle} className="fa fa-plus-square"></i></td>
                     <td><label>Name of Hospital</label></td>
                     <td><label>Krishna Hospital</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-map-marker"></i></td>
                     <td><label>Address</label></td>
                     <td><label>Behind Axis bank</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-user-md"></i></td>
                     <td><label>Name of Consultants</label></td>
                     <td><label>5</label></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <button type="button" className="btn btn-primary btn-xs btn-update btn-add-card"><b>Fix Appointment</b></button>
            </div>            
        </div>
        <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
          <div className="thumbnail">
                <label className="containerradio"><b>Fix Appointment</b>
                 <input type="radio"/>
                 <span className="checkmark"></span>
                </label>
                <div className='col-lg-12 well well-add-card'>
                  <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSblCK0B94O0UiQ6dHFmD30Fo_BbF0W0lVsMcsNagesC7eW8QXU3Q'} />
                </div>
                <div className='col-lg-12'>
                <table className="table">
                  <tbody>
                    <tr>
                     <td><i style={pStyle} className="fa fa-plus-square"></i></td>
                     <td><label>Name of Hospital</label></td>
                     <td><label>Krishna Hospital</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-map-marker"></i></td>
                     <td><label>Address</label></td>
                     <td><label>Behind Axis bank</label></td>
                    </tr>
                    <tr>
                     <td><i style={pStyle} className="fa fa-user-md"></i></td>
                     <td><label>Name of Consultants</label></td>
                     <td><label>5</label></td>
                    </tr>
                  </tbody>
                </table>
                </div>
                <button type="button" className="btn btn-primary btn-xs btn-update btn-add-card"><b>Fix Appointment</b></button>
            </div>            
        </div>
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
