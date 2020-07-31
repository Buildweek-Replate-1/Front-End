import React from "react";
import SighIn from "./SighIn";
import SighStyle from "./styles/HomeStyle";

function Header() {
  return (
    <div className="header">
      <SighStyle>
        <div>
          <h1>Replate</h1>
          <SighIn />
        </div>
      </SighStyle>
    </div>
  );
}

export default Header;

