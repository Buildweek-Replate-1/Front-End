import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import FormSchema from "./SchemaForms/FormSchemaV";
import SubmitStyle from "./styles/RegisterStyle";

const valuesVolunteer = {
  username: "",
  volunteerName: "",
  phoneNumber: "",
  password: "",
};
const errorsVolunteer = {
  username: "",
  volunteerName: "",
  phoneNumber: "",
  password: "",
};
const initialVolunteer = [];
const initialDisabled = true;

const RegisterVolunteer = () => {
  const [volunteer, setVolunteer] = useState([initialVolunteer]);
  const [formValues, setFormValues] = useState(valuesVolunteer);
  const [formErrors, setFormErrors] = useState(errorsVolunteer);
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
        setFormValues(valuesVolunteer);
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
          [name]: err.errors,
        });
      });

    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const submit = (e) => {
    console.log(formValues);
    const newVolunteer = {
      username: formValues.username.trim(),
      volunteerName: formValues.volunteerName.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password.trim(),
    };
    postNewVolunteer(newVolunteer);
  };

  useEffect(() => {
    getVolunteer();
  }, []);

  useEffect(() => {
    FormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

  console.log(formValues);

  const onSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  const onInputChange = (evt) => {
    const { name, value } = evt.target;
    // debugger;
    inputChange(name, value);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <SubmitStyle>
        <div className="form-group submit">
          <div className="errors">
            <div>{formErrors.username}</div>
            <div>{formErrors.volunteerName}</div>
            <div>{formErrors.phoneNumber}</div>
            <div>{formErrors.password}</div>
          </div>
        </div>
        <div>
          <h3>Register Form -- volunteer</h3>
        </div>

        <div className="form-group inputs">
          <label>
            Username&nbsp;
            <input
              value={formValues.username}
              onChange={onInputChange}
              name="username"
              type="text"
              className="inputone"
            />
          </label>
          <label>
            Volunteer Name&nbsp;
            <input
              value={formValues.volunteerName}
              onChange={onInputChange}
              name="volunteerName"
              type="text"
              className="inputone"
            />
          </label>
          <label>
            Phone Number&nbsp;
            <input
              value={formValues.phoneNumber}
              onChange={onInputChange}
              name="phoneNumber"
              type="text"
              className="inputone"
            />
          </label>

          <label>
            Password&nbsp;
            <input
              value={formValues.password}
              onChange={onInputChange}
              name="password"
              type="text"
              className="inputone"
            />
          </label>
          <button disabled={disabled}>Sigh Up</button>
        </div>
      </SubmitStyle>
    </form>
  );
};
export default RegisterVolunteer;
