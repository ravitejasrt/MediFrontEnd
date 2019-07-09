import React, { Component } from 'react'



class Interadiology extends Component{
  constructor(){
    super()
    this.state = {
      size: '27',
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
    <option key={i+'z'}>{dynamicdata.int_proc_name}</option>
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
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Angiography<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Balloon Angioplasty<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Biliary Drainage And Stenting<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Central Venous Access<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Chemoembolisation<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Embolisation<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Fallopian Tube Catheterisation<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Gastrostomy Tube<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Hemodialysis Access Maintenance<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Hereditary Hemorrhagic Telangiectasia (HHT)<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Needle Biopsy<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Radiofrequency Ablation (RFA)<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Stent<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Stent Graft<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Thrombolysis<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Transjugular Intrahepatic Portosystemic Shunt (TIPS)<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Uterine Artery Embolisation<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Uterine Fibroid Embolisation<br></br></li>
            <li className="list-group-item text-left"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Vertebroplasty<br></br></li>
         </ul>
       </div>
       </div>
     </div>
    ) 
  }
}

export default Interadiology