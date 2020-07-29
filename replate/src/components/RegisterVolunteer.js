import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Switch, Route } from "react-router-dom";
import FormSchema from "./FormSchema";
import SubmitStyle from "./styles/RegisterStyle";

const values = {
  username: "",
  volunteerName: "",
  phoneNumber: "",
  password: "",
};
const errors = {
  username: "",
  volunteerName: "",
  phoneNumber: "",
  password: "",
};
const initialVolunteer = [];
const initialDisabled = true;

const RegisterVolunteer = () => {
  const [volunteer, setVolunteer] = useState([initialVolunteer]);
  const [formValues, setFormValues] = useState(values); // object
  const [formErrors, setFormErrors] = useState(errors); // object
  const [disabled, setDisabled] = useState(initialDisabled);

  const getVolunteer = () => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setVolunteer(response.data.data);
        console.log("DATA is", response.data.data);
      })
      .catch((err) => console.log("err GET Volunteer", err));
  };

  const postNewVolunteer = (newVolunteer) => {
    axios
      .post("http://localhost:3000/", newVolunteer)
      .then((res) => {
        setVolunteer([res.data, ...volunteer]);
        setFormValues(values);
      })
      .catch((err) => console.log("err POST forms", err));
  };

  const inputChange = (name, value) => {
    yup
      .reach(FormSchema, name)
      .validate(value)
      .then((valid) => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = (e) => {
    console.log(formValues);
  };
  useEffect(() => {
    getVolunteer();
  }, []);

  useEffect(() => {
    FormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  console.log(values);

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    console.log(name, value);
    // debugger;
    inputChange(name, value);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <SubmitStyle>
        <div className="form-group submit">
          <div className="errors">
            <div>{errors.username}</div>
            <div>{errors.volunteerName}</div>
            <div>{errors.phoneNumber}</div>
            <div>{errors.password}</div>
          </div>
        </div>
        <div>
          <h3>Register Form -- volunteer</h3>
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
            Volunteer Name&nbsp;
            <input
              value={values.volunteerName}
              onChange={onInputChange}
              name="volunteerName"
              type="text"
              className="inputone"
            />
          </label>
          <label>
            Phone Number&nbsp;
            <input
              value={values.phoneNumber}
              onChange={onInputChange}
              name="phoneNumber"
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
          <button disabled={disabled}>submit</button>
        </div>
      </SubmitStyle>
    </form>
  );
};
export default RegisterVolunteer;
