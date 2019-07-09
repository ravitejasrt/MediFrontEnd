import React, { Component } from 'react'
import { useState } from 'react';


const scrollsections = {
  background: '#4CAF50',
  color: 'white',
  padding: '15px',
  width: '50%',
  height: '100px',
  overflow: 'scroll',
  border: '1px solid #ccc'
};   


class Surgicalpacks extends Component{     
  constructor(props){
    super(props)
    this.state = {
      size: '',
      data: [],
      subdata: [],
      value: '',  
      surgvalue:'',
      SECTION_ID:'',
      group_name:'',
      surgsubvalue:'',
      isToggleOn: 0
    }      
    this.handleRadioClick = this.handleRadioClick.bind(this);
    this.handleSubRadioClick = this.handleSubRadioClick.bind(this);
    this.handleSurgSubmit = this.handleSurgSubmit.bind(this);
  }

  onChangePage(page) {
    this.props.getImageIndex(page)
  }

  componentDidMount() {
    Promise.all([
      fetch('https://rest-medi-app.herokuapp.com/medi/user/surgicallist')
    ])
    .then(([response]) => Promise.all([response.json()]))
    .then(([responseJson]) => 
     this.setState({
      data:responseJson
      })
     ); 
  }  

  handleRadioClick = event =>{
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.state = {surgvalue: target.name}

    this.setState({
      surgvalue: target.name,
      action:''
    })
  //  https://rest-medi-app.herokuapp.com
 //   alert("surgvalue state target = "+this.state.surgvalue)
    const endpoint = `https://rest-medi-app.herokuapp.com/medi/user/surgicallist/subsec/${value}`;
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        this.setState({
          subdata:data
         })
    });
  }      
    
  handleSubRadioClick = event =>{
    this.state = {surgsubvalue: event.target.value}
    this.setState({
      surgsubvalue: event.target.value,
      action:'Set Parent state set from child: '
    })
    this.state.action='Set Parent state set from child: '
  //  alert(this.state.action)
  //  this.props.action('Set Parent state set from child: ')
  } 
    
  handleSurgSubmit = event =>{
    event.preventDefault()
 //   alert('A surgvalue was submitted: ' + this.state.surgvalue)
 //   alert('A surgsubvalue was submitted: ' + this.state.surgsubvalue)
    var surgvalue = this.state.surgvalue
  }

  render(){
    var surgvaluestate = this.state.surgvalue;
  //  console.log("surgvaluestate = "+surgvaluestate)

    const surgicalpacklistx=this.state.data.map((dynamicdata,i)=>
        console.log("dynamicdata = "+dynamicdata.section_name)  
    )

    const surgicalpacklist=this.state.data.map((dynamicdata,i)=>
     <li key={i+'z'} className="list-group-item text-left"><input value={this.props.section_name} name={dynamicdata.section_name} id="surgvalueid" type="radio" value={dynamicdata.section_id}  onClick={this.handleRadioClick}/>{dynamicdata.section_name}<br></br></li>    
    )
      
    const subsurgicalpacklist=this.state.subdata.map((dynamicdata,i)=>
     <li key={i+'z'} className="list-group-item text-left"><input name="choseSec"  type="radio" value={this.props.group_name} id="group_name"  onClick={this.props.onClick}/>{dynamicdata.group_name}<br></br></li>    
    )   

    return(
        <div className="form-card">
          <div className="form-group">
            <h2>{this.props.isAuthed}</h2>
            <h2>{this.props.theme}</h2>
            <h4>{this.props.section_name}</h4>
          </div>
        <div>
          <div className="list-group-item form-group col-xs-11">
           <input type="text" className="list-group-item col-xs-10" placeholder="Search" id="txtSearch"/>
           <div className="input-group-btn">
             <button className="btn btn-primary btn-block" type="submit">
              <span className="glyphicon glyphicon-search"></span>
             </button>
           </div>
        </div>
       </div>   
       <div className="row">
         <div className="col-xs-6 col-md-6">
         </div>
       </div>
       <div className="row">
       <form onSubmit={this.handleSurgSubmit}>
       <div className="col-xs-11 form-group">
         <ul className="list-group">
           <div className="list-group-item active scrollsections"><p className="list-group-item-heading">Surgical Packs - Select item</p></div>
            {surgicalpacklist}
         </ul>
       </div>
       {(surgvaluestate.length>0 ?
       <div className="col-xs-11 form-group">
         <ul className="list-group">
           <div className="list-group-item active scrollsections"><p className="list-group-item-heading">Sub Surgical Packs of {surgvaluestate} selected</p></div>
            {subsurgicalpacklist}
         </ul>
       </div>
       : 
       <div className="col-xs-11 form-group">
         <ul className="list-group">
           <div className="list-group-item active"><p className="list-group-item-heading">Not Available</p></div>
         </ul>
       </div>      
       )}
        <input type="submit" value="Submit" />
       </form>
       </div>


     </div>
    ) 
  }
}

export default Surgicalpacks