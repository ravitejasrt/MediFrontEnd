import React, { Component } from 'react';

class Steps extends Component {

    render() {
        return (
            <div className="row form-steps">
                <div className={"col-xs-3 " + (this.props.step > 0 ? 'active' : '')}>
                    <i className="fa fa-map-marker" aria-hidden="true"></i><br/>Location</div>
                <div className={"col-xs-3 " + (this.props.step > 1 ? 'active' : '')}>
                    <i className="fa fa-hospital-o" aria-hidden="true"></i><br/>Services</div>
                <div className={"col-xs-3 " + (this.props.step > 2 ? 'active' : '')}>
                    <i className="fa fa-heartbeat" aria-hidden="true"></i><br/>Hospitals</div>
                <div className={"col-xs-3 " + (this.props.step > 3 ? 'active' : '')}>
                    <i className="fa fa-bed" aria-hidden="true"></i><br/>Wards</div>                    
                <div className={"col-xs-3 " + (this.props.step > 4 ? 'active' : '')}>
                    <i className="fa fa-sign-in" aria-hidden="true"></i><br/>Login</div>
                <div className={"col-xs-3 " + (this.props.step > 5 ? 'active' : '')}>
                    <i className="fa fa-newspaper-o" aria-hidden="true"></i><br/>App Details</div>                    
                <div className={"col-xs-3 " + (this.props.step > 6 ? 'active' : '')}>
                    <i className="fa fa fa-credit-card" aria-hidden="true"></i><br/>Payments</div>
            </div>
        )
    }
}

export default Steps;
