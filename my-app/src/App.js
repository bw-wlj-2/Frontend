import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Test from './components/TestLogin';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/' component={Test}/>
          <PrivateRoute path='/dashboard'/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
