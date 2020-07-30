import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import FormSchema from "./SchemaForms/FormSchemaPickUp";
import SubmitStyle from "./styles/RegisterStyle";

const valuesPickUp = {
  type: "",
  amount: "",
  preferredPickupTime: "",
};
const errorsPickUp = {
  type: "",
  amount: "",
  preferredPickupTime: "",
};
const initialPickUp = [];
const initialDisabled = true;

const RegisterPickUp = () => {
  const [pickUp, setPickUp] = useState([initialPickUp]);
  const [formValues, setFormValues] = useState(valuesPickUp);
  const [formErrors, setFormErrors] = useState(errorsPickUp);
  const [disabled, setDisabled] = useState(initialDisabled);

  const getPickUp = () => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setPickUp(response.data.data);
        console.log("DATA is", response.data.data);
      })
      .catch((err) => console.log("err GET PickUp", err));
  };
  const postNewPickUp = (newPickUp) => {
    console.log("Submitted values: ", newPickUp);

    axios
      .post("http://localhost:3000/", newPickUp)
      .then((res) => {
        setPickUp([res.data, ...pickUp]);
        setFormValues(valuesPickUp);
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
    // console.log(formValues);
    const newPickUp = {
      type: formValues.type.trim(),
      amount: formValues.amount.trim(),
      preferredPickupTime: formValues.preferredPickupTime.trim(),
    };

    postNewPickUp(newPickUp);
  };

  useEffect(() => {
    getPickUp();
  }, []);

  useEffect(() => {
    FormSchema.isValid(formValues).then((valid) => {
      setDisabled(!valid);
    });
  }, [formValues]);

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
        <div className="errors">
          <div>{formErrors.type}</div>
          <div>{formErrors.amount}</div>
          <div>{formErrors.preferredPickupTime}</div>
        </div>

        <div>
          <h3>Business pickup request form</h3>
        </div>
        <div className="form-group inputs">
          <label>
            Type&nbsp;
            <select
              value={formValues.type}
              onChange={onInputChange}
              name="type"
            >
              <option value="">- Select an type -</option>
              <option value="drinks">Drinks</option>
              <option value="appetizers">Appetizers</option>
              <option value="saladSoup">Salads and Soups</option>
              <option value="mainDishes">Main Dishes</option>
              <option value="desserts">Desserts</option>
            </select>
          </label>

          <label>
            Amount&nbsp;
            <input
              value={formValues.amount}
              onChange={onInputChange}
              name="amount"
              type="text"
              className="inputone"
            />
          </label>

          <label>
            Preferred Pickup Time&nbsp;
            <input
              value={formValues.preferredPickupTime}
              onChange={onInputChange}
              name="preferredPickupTime"
              type="text"
              className="inputone"
            />
          </label>
          <button disabled={disabled}>Submit Pick Up</button>
        </div>
      </SubmitStyle>
    </form>
  );
};
export default RegisterPickUp;
