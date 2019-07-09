import React, { Component } from 'react'

class Fertilityprods extends Component{
  constructor(){
    super()
    this.state = {
      size: '27'
    }      
  }

  handleRadioClick = event =>{
    this.setState({
      size: event.target.value
    })
    alert(`You chose the ${this.state.size} pizza.`)
  }    
    render(){
      return(
        <div className="form-card">
        <div className="row">
         <div className="col-xs-6 col-md6">
          <div className="input-group">
           <input type="text" className="form-control" placeholder="Search" id="txtSearch"/>
           <div className="input-group-btn">
             <button className="btn btn-primary" type="submit">
              <span className="glyphicon glyphicon-search"></span>
             </button>
           </div>
          </div>
        </div>
       </div>   
       <div className="row">
         <div className="col-xs-6 col-md-6"></div>
       </div>
       <div className="row">
       <div className="col-xs-6 col-md-6">
       <div className="form-group">
         <ul className="list-group">
           <div className="list-group-item active"><p className="list-group-item-heading">Fertility Procedure - Select service</p></div>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Ovulation Induction/Controlled Ovarian Stimulation<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Intrauterine insemination(IUI)<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Blastocyst Culture<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Assisted Hatching<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Laparoscopy<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Embryo Cryopreservation/Vitrification<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Frozen Embryo Transfer<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>IVM(Invitromaturation)<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Oocctye Freezing/Semen freezing(for cancer patients)<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>IMSI<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Sperm DNA Fragmentation Testing<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Egg Donation<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Embryo Donation<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>In Vitro Fertilization(IVF) and Embryo transfer<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Intra Cytoplasmic Sperm Injection(ICSI)<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Sperm Retrival Techniques(MESA,PESA,TESE,TESA)<br></br></li>
            <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.handleRadioClick}/>Hysteroscopy<br></br></li>
         </ul>
       </div>
       </div>
       </div>
     </div>        
      )
    }
}

export default Fertilityprods