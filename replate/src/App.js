import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <Route path="/">
        <Home />
      </Route>
    </div>
  );
}

export default App;
