import React, { Component } from 'react'

class Cosmeticprods extends Component{
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
      alert(event.target.value)
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
              <div className="list-group-item active"><p className="list-group-item-heading">Cosmetic Procedure Select item</p></div>
              <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="27" defaultChecked={this.state.size === "27"}  onClick={this.props.handleRadioClick}/>Liposuction<br></br></li>
              <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="28" defaultChecked={this.state.size === "28"}  onClick={this.props.handleRadioClick}/>Rhinoplasty<br></br></li>
              <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="29" defaultChecked={this.state.size === "29"}  onClick={this.props.handleRadioClick}/>Breast augmentation<br></br></li>
              <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="30" defaultChecked={this.state.size === "30"}  onClick={this.props.handleRadioClick}/>Eyelid surgery<br></br></li>
              <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="31" defaultChecked={this.state.size === "31"}  onClick={this.props.handleRadioClick}/>Tummy tuck<br></br></li>
              <li className="list-group-item"><input name="choseSec" id="27" type="radio" value="32" defaultChecked={this.state.size === "32"}  onClick={this.props.handleRadioClick}/>Face lift<br></br></li>
            </ul>
          </div>
          </div>
          </div>
        </div>
      )
    }
}

export default Cosmeticprods