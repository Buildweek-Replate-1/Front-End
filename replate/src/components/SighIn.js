import React, { useState } from "react";

const SigIn = () => {
  const [saved, setSaved] = useState([]);

  return (
    <form className="form container" onSubmit={onSubmit}>
      <div className="form-group submit">
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.password}</div>
        </div>
      </div>

      <div className="form-group inputs">
        <label>
          Username&nbsp;
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
            className="inputone"
          />
        </label>

        <label>
          Password&nbsp;
          <input
            value={values.password}
            onChange={onInputChange}
            name="username"
            type="text"
            className="inputone"
          />
        </label>
      </div>
    </form>
  );
};
export default SigIn;
