import React from 'react';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import './App.css';

import PrivateRoute from './components/PrivateRoute';
import Registration from './components/Registration';
import Login from './components/Login';
import VDashboard from './components/volunteer/VDashboard';
import BDashboard from './components/business/BDashboard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Registration} />
        <Route path='/business' component={BDashboard} />
        <Route path='/volunteer' component={VDashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
