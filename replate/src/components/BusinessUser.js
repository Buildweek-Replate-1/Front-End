import React from "react";

function BusinessUser({ details }) {
  if (!details) {
    return <h3>Working fetching your businessUser&apos;s details...</h3>;
  }

  return (
    <div className="businessUser container">
      <h2>{details.username}</h2>
      <p>Business Name: {details.businessName}</p>
      <p>Business Address: {details.businessAddress}</p>
      <p>Phone Number: {details.phoneNumber}</p>
      <p>Password: {details.password}</p>
    </div>
  );
}

export default BusinessUser;
