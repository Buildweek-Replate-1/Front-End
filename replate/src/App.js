import Home from "./components/Home";
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
// import PrivateRoute from './components/PrivateRoute';
import Registration from './components/Registration';
import Login from './components/Login';
import VDashboard from './components/volunteer/VDashboard';

import BDashboard from "./components/business/BDashboard";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/login' component={Login} />
        <Route exact path="/">
            <Home />
        </Route>
        <Route path='/register' component={Registration} />
        <Route path='/volunteer' component={VDashboard} />
        <Route path='/business' component={BDashboard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
