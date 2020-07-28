import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Register from "./Register";
import SighIn from "./SighIn";
import Header from "./Header";

function App() {
  return (
    <div className="FormSighs">
      <Header />
      <Switch>
        {/* <Route path="/sighin" component={() => <SighIn />} />
        <Route path="/register" component={() => <Register />} /> */}
      </Switch>
    </div>
  );
}

export default App;
