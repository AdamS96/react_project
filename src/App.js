import {BrowserRouter, Route, Switch} from 'react-router-dom';
import InputDetails from './components/InputDetails/InputDetails';
import 'bootstrap/dist/css/bootstrap.min.css';
import Administrator from './components/Administrator/Administrator';
import ReadDetails from './components/ReadDetails/ReadDetails';
import DeleteDetails from './components/DeleteDetails/DeleteDetails';
import UpdateDetails from './components/UpdateDetails/UpdateDetails';
import InputDriverID from './components/InputDriverID/InputDriverID';
import ReadDriver from './components/ReadDriver/ReadDriver';
import Testwrite from './components/Testwrite/Testwrite';
import Testread from './components/Testread/Testread';
import React, { useState } from 'react'

function App() {
  


  return (
<div>
      <BrowserRouter>
        <div className="App">
          
          <div>
            <Route exact path="/" component={InputDetails} />
          </div>

          <div>
            <Route exact path="/administrator" component={Administrator} />
          </div>

          <div>
            <Route exact path="/readdetails" component={ReadDetails} />
          </div>

          <div>
            <Route exact path="/deletedetails" component={DeleteDetails} />
          </div>
          <div>
            <Route exact path="/updatedetails" component={UpdateDetails} />
          </div>
          <div>
            <Route exact path="/inputdriverid" component={InputDriverID} />
          </div>
          <div>
            <Route exact path="/readDriver/:name" component={ReadDriver} />
          </div>

        </div>

      </BrowserRouter>
    </div>

  );

  }
export default App;
