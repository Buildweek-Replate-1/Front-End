import Home from "./components/Home";
import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import './App.css';
// import PrivateRoute from './components/PrivateRoute';
import Registration from './components/Registration';
import Login from './components/Login';
//import Business from './components/business/Business';

// Business-specific Components
import RegisterBusiness from './components/RegisterBusiness';
import BusForm from './components/business/BusDashboard';
import BCard from './components/business/BCard';

// Volunteer-specific Components
import RegisterVolunteer from './components/RegisterVolunteer';
import VDashboard from './components/volunteer/VDashboard';
import VCard from './components/volunteer/VCard';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route exact path='/login' component={Login} /> */}
        <Route exact path="/">
            <Home />
        </Route>
        <Route path='/register' component={Registration} />
        {/* <Route path='/business' component={Business} /> */}
        <Route path='/volunteer' component={VDashboard} />
        <Route path='/business' component={BusForm} />
        <Route path='/RegisterBusiness' component={RegisterBusiness} />
        <Route path='/RegisterVolunteer' component={RegisterVolunteer} />
        <Route path ='/business/pickups/:id' component={BCard} />
        <Route path ='/volunteer/pickups/:id' component={VCard} />
      </BrowserRouter>
    </div>
  );
}

export default App;
