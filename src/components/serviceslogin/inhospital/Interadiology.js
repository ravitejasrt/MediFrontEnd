import React, { Component } from 'react'



class Interadiology extends Component{
  constructor(){
    super()
    this.state = {
      size: '1',
      data: [],
      value: ''     
    }      
  }

  componentDidMount() {
    return fetch('http://localhost:8080/medi/user/intvenpacklist')
      .then((response) => response.json())
      .then((responseJson) => {   
        this.setState({
          data:responseJson
        })
        console.log(this.state.data)
    })
  }  

  handleRadioClick = event =>{
    this.setState({
      size: event.target.value
    })
    alert(`You chose the ${this.state.size} pizza.`)
  }      
    
  render(){
    const interradiolist=this.state.data.map((dynamicdata,i)=>
     <li key={i+'z'} className="list-group-item text-left"><input name="choseSec" id={dynamicdata.int_id} type="radio" value={dynamicdata.int_proc_name} defaultChecked={this.state.size}  onClick={this.handleRadioClick}/>{dynamicdata.int_proc_name}<br></br></li>    
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
         <div className="col-xs-6 col-md-6"></div>
       </div>
       <div className="row">
       <div className="col-xs-11 form-group">
         <ul className="list-group">
           <div className="list-group-item active"><p className="list-group-item-heading">Inteventional Radiology - Select item</p></div>
            {interradiolist}
         </ul>
       </div>
       </div>
     </div>
    ) 
  }
}

export default Interadiology