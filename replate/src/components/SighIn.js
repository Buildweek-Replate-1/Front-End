import React, { useState } from "react";

const SighIn = () => {
  const [user, setUser] = useState({ username: "", password: "" });

  const NameChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  const PasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const Submit = (event) => {
    event.preventDefault();
    console.log(user);
  };

  return (
    <div className="sighIn">
      <form onSubmit={(event) => Submit(event)}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            onChange={(event) => NameChange(event)}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            onChange={(event) => PasswordChange(event)}
          />
        </label>
        <button>Sigh In</button>
      </form>
    </div>
  );
};
export default SighIn;
