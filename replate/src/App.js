import React from 'react';
import logo from './logo.svg';
import {BrowserRouter, Link, Switch, Route} from 'react-router-dom';
import './App.css';

import Registration from './components/Registration';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path='/' component={Login} />
        <Route path='/register' component={Registration} />
      </BrowserRouter>
    </div>
  );
}

export default App;
