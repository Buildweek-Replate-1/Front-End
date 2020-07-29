import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import { Switch, Route } from "react-router-dom";
import FormSchema from "./FormSchema";
import SubmitStyle from "./styles/RegisterStyle";

const values = {
  username: "",
  businessName: "",
  businessAddress: "",
  phoneNumber: "",
  password: "",
};
const errors = {
  username: "",
  businessName: "",
  businessAddress: "",
  phoneNumber: "",
  password: "",
};
const initialBusiness = [];
const initialDisabled = true;

const RegisterBusiness = () => {
  const [business, setBusiness] = useState([initialBusiness]);
  const [formValues, setFormValues] = useState(values); // object
  const [formErrors, setFormErrors] = useState(errors); // object
  const [disabled, setDisabled] = useState(initialDisabled);

  const getBusiness = () => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setBusiness(response.data.data);
        console.log("DATA is", response.data.data);
      })
      .catch((err) => console.log("err GET Business", err));
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
    const newBusiness = {
      username: formValues.username.trim(),
      businessName: formValues.businessName.trim(),
      businessAddress: formValues.businessAddress.trim(),
      password: formValues.password.trim(),
    };

    postNewBusiness(newBusiness);
  };

  const postNewBusiness = (newBusiness) => {
    axios
      .post("http://localhost:3000/", newBusiness)
      .then((res) => {
        setBusiness([res.data, ...business]);
        setFormValues(values);
      })
      .catch((err) => console.log("err POST forms", err));
  };

  useEffect(() => {
    getBusiness();
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
    debugger;
    inputChange(name, value);
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <SubmitStyle>
        <div className="errors">
          <div>{errors.username}</div>
          <div>{errors.businessName}</div>
          <div>{errors.businessAddress}</div>
          <div>{errors.phoneNumber}</div>
          <div>{errors.password}</div>
        </div>

        <div>
          <h3>Register Form -- business</h3>
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
            Business Name&nbsp;
            <input
              value={values.businessName}
              onChange={onInputChange}
              name="businessName"
              type="text"
              className="inputone"
            />
          </label>
          <label>
            Business Address&nbsp;
            <input
              value={values.businessAddress}
              onChange={onInputChange}
              name="phoneNumber"
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
export default RegisterBusiness;
