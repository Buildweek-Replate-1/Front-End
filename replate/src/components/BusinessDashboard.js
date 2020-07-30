import React from "react";
import RegisterPickUp from "./PickUpRequest";
import PickUpStyle from "./styles/PickUpStyle";
import data from "./requests.json";
import ReqList from "./reqList";

function BDashboard() {
  return (
    <div>
      <PickUpStyle>
        <div className="headerpickup">
          <h3>Business: Unum</h3>
          <button>Profile info</button>
          <button>Change Profile info</button>
        </div>
        <div className="bDashboard tabl">
          <RegisterPickUp />

          <div className="tabl">
            <h2>Pending requests</h2>
            <div className="reqList">
              {data.map((user) => {
                return <ReqList key={user.id} details={user} />;
              })}
            </div>
          </div>

          <div className="tabl">
            <h2>Assigned requests</h2>
            <div className="reqList"></div>
          </div>
          <div className="tabl">
            <h2>Comleted requests</h2>
            <div className="reqList"></div>
          </div>
        </div>
      </PickUpStyle>
    </div>
  );
}

export default BDashboard;
