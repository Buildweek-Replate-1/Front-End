import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import RegisterBusiness from "./RegisterBusiness";
import RegisterVolunteer from "./RegisterVolunteer";
import Header from "./Header";

function Home() {
  return (
    <div className="FormSighs">
      <Header />
      <RegisterBusiness />
      <RegisterVolunteer />
    </div>
  );
}

export default Home;
