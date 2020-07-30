import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import Header from "./Header";
import RegisterBusiness from "./RegisterBusiness";
import RegisterVolunteer from "./RegisterVolunteer";
import BusinessDashboard from "./BusinessDashboard";
// import SighStyle from "./styles/HomeStyle";

function Home() {
  return (
    <div className="FormSighs">
      <Switch>
        <Route exact path="/RegisterBusiness">
          <Header />
          <RegisterBusiness />
        </Route>

        <Route exact path="/RegisterVolunteer">
          <Header />
          <RegisterVolunteer />
        </Route>
        <Route exact path="/BusinessDashboard" component={BusinessDashboard} />
        <Route exact path="/" component={Header} />
      </Switch>
    </div>
  );
}

export default Home;
