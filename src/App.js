import React, { Component } from 'react';
import Registration from './components/Registration';
import {
    BrowserRouter as Router
  } from 'react-router-dom'

class App extends Component {

    render() {
        return (
          <Router>  
            <div id="root">
                <div className="col-sm-6 col-sm-offset-3">
                    <Registration/>
                </div>
            </div>
          </Router>
        )
    }
}

export default App;
