import React from "react";
import { Switch, Route, Link } from "react-router-dom";
import RegisterBusiness from "./RegisterBusiness";
import RegisterVolunteer from "./RegisterVolunteer";
import RegisterPickUp from "./PickUpRequest";
import Header from "./Header";
import SighStyle from "./styles/HomeStyle";

function Home() {
  return (
    <div className="FormSighs">
      <SighStyle>
        <Header />
        <section>
          <div className="main"></div>
          <div className="buttons">
            <Link to="/RegisterBusiness">
              <button> Register for Business </button>
            </Link>
            <Link to="/RegisterVolunteer">
              <button>Register for Volunteer</button>
            </Link>
            {/* Unit 3 Moved the Routes below to App.js */}
            {/* <Switch>
              <Route
                exact
                path="/RegisterBusiness"
                component={RegisterBusiness}
              />
              <Route
                exact
                path="/RegisterVolunteer"
                component={RegisterVolunteer}
              />
            </Switch> */}
          </div>
        </section>
      </SighStyle>
      {/* Unit 3 moving <RegisterPickup> to Business Dashboard */}
      {/* <RegisterPickUp /> */}
    </div>
  );
}

export default Home;
