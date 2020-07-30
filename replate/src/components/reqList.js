import React from "react";
import data from "./requests.json";

function ReqList({ details }) {
  if (!details) {
    return <h3>Working fetching your data&apos;s details...</h3>;
  }
  return (
    <div className="reqList">
      <p>Type: {details.type}</p>
      <p>Amount: {details.amount}</p>
      <p>Preferred Pickup Time: {details.preferredPickupTime}</p>
      <div>__________</div>
    </div>
  );
}

export default ReqList;
