import React, { Component } from 'react'
import {Route , Link} from 'react-router-dom'


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


    render() {
        return (
         <div className="form-card">
           <div className="formtitle"><span className="glyphicon glyphicon-chevron-down ftrt"></span>
            <form name="search">
             <input type="submit" value="Search" className="btn"/> 
            </form>
           </div>
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
      <tr>
        <td><img src=""></img></td>
      </tr>

    </tbody>
  </table>

   
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

export default Hospitals;
