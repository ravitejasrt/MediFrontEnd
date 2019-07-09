import React, { Component } from 'react'

class Surgicalpacks extends Component{     
  constructor(){
    super()
    this.state = {
      size: '',
      data: [],
      subdata: [],
      value: '',  
      surgvalue:'',
      isToggleOn: 0
    }      
    this.handleRadioClick = this.handleRadioClick.bind(this);
  }

  componentDidMount() {
    alert("this.state.surgvalue = "+this.state.surgvalue)
    var subreq='http://localhost:8080/medi/user/surgicallist/subsec/'+1+''
    Promise.all([
      fetch('http://localhost:8080/medi/user/surgicallist'),   
      fetch(subreq),
    ])
    .then(([response, responsesub]) => Promise.all([response.json(), responsesub.json()]))
    .then(([responseJson, responsesubJson]) => 
     this.setState({
      data:responseJson,
      subdata:responsesubJson
     })
     ); 
  }  

  handleRadioClick = event =>{
    this.state = {surgvalue: event.target.value}
    this.setState({
      surgvalue: event.target.value
    })
    const { value } = event.target;
    const endpoint = `https://www.myapi.org/${value}`;
  
    fetch(endpoint)
      .then((response) => response.json())
      .then((data) => {
        // Do stuff with data and then call this.setState();
    });

    alert(`You chose the ${this.state.surgvalue}`)
  }      
    
  render(){
    var surgvaluestate = this.state.surgvalue;
    console.log("surgvaluestate = "+surgvaluestate)
    const surgicalpacklist=this.state.data.map((dynamicdata,i)=>
     <li key={i+'z'} className="list-group-item text-left"><input name="choseSec" id={dynamicdata.SECTION_ID} type="radio" value={dynamicdata.SECTION_NAME} onClick={this.handleRadioClick}/>{dynamicdata.SECTION_NAME}<br></br></li>    
    )
      
    const subsurgicalpacklist=this.state.subdata.map((dynamicdata,i)=>
     <li key={i+'z'} className="list-group-item text-left"><input name="choseSec" id={dynamicdata.group_name} type="radio" value={dynamicdata.group_name} />{dynamicdata.group_name}<br></br></li>    
    )   

    return(
        <div className="form-card">
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
       <div className="col-xs-11 form-group">
         <ul className="list-group">
           <div className="list-group-item active"><p className="list-group-item-heading">Surgical Packs - Select item</p></div>
            {surgicalpacklist}
         </ul>
       </div>
       {(surgvaluestate.length>0 ?
       <div className="col-xs-11 form-group">
         <ul className="list-group">
           <div className="list-group-item active"><p className="list-group-item-heading">Sub Surgical Packs of {surgvaluestate} selected</p></div>
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
       </div>
     </div>
    ) 
  }
}

export default Surgicalpacks