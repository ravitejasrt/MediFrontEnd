import React, { Component } from 'react';

class Location extends Component {
    
    constructor(props) {
      super(props)
      this.state = {
          data: [],
          value: ''
      }
    }

    componentDidMount() {
        return fetch('https://rest-medi-app.herokuapp.com/medi/all')
          .then((response) => response.json())
          .then((responseJson) => {   
            this.setState({
              data:responseJson
            })
     //       console.log(this.state.data)
        })
    }  

    render() {
        const citieslist=this.state.data.map((dynamicdata,i)=>
        <option key={i+'z'}>{dynamicdata.city}</option>
        )        
        return (
            <div className="form-card">
                <div className="form-group">
                 {this.props.location}
                </div>
                <div className="form-group">
                    <label>Select City</label>
                    <span className="pull-right text-danger"><small>{this.props.locationError}</small></span>
                    <select className="form-control"
                           type="text"
                           id="location"
                           value={this.props.location}
                           onChange={this.props.onChange}>
                     <option>select</option>
                     {citieslist}
                    </select>
                </div>

                <div className="form-group">
                    <button className="btn btn-success"
                            onClick={this.props.next}>Next</button>
                </div>
            </div>
        )
    }
}

export default Location;
