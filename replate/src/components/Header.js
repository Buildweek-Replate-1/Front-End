import React from "react";
import { Link } from "react-router-dom";
import SighIn from "./SighIn";
import SighStyle from "./styles/HomeStyle";

function Header() {
  return (
    <div>
      <SighStyle>
        <div className="header">
          <h1>Re-plate</h1>
          <SighIn />
        </div>
        <div className="buttons">
          <div className="main"></div>
          <Link to="/RegisterBusiness">
            <button> Register for Business </button>
          </Link>
          <Link to="/RegisterVolunteer">
            <button>Register for Volunteer</button>
          </Link>
        </div>
      </SighStyle>
    </div>
  );
}

export default Header;
