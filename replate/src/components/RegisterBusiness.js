import React, { useState, useEffect } from "react";
import axios from "axios";
import * as yup from "yup";
import FormSchema from "./SchemaForms/FormSchemaB";
import SubmitStyle from "./styles/RegisterStyle";

// Unit 3 imports
import {useHistory} from 'react-router-dom';
import {registerRequest} from '../actions/allActions';
import {connect} from 'react-redux';
//import {FETCHING_DATA, CREATE_NEW_ACCT} from '../actions/allActions';
//import axiosWithAuth from '../utils/axiosWithAuth';

const valuesBusiness = {
  username: "",
  businessName: "",
  businessAddress: "",
  phoneNumber: "",
  password: "",
};
const errorsBusiness = {
  username: "",
  businessName: "",
  businessAddress: "",
  phoneNumber: "",
  password: "",
};
const initialBusiness = [];
const initialDisabled = true;

const RegisterBusiness = props => {
  const [business, setBusiness] = useState([initialBusiness]);
  const [formValues, setFormValues] = useState(valuesBusiness);
  const [formErrors, setFormErrors] = useState(errorsBusiness);
  const [disabled, setDisabled] = useState(initialDisabled);
  const history = useHistory();

  const getBusiness = () => {
    axios
      .get("http://localhost:3000/")
      .then((response) => {
        setBusiness(response.data.data);
        console.log("DATA is", response.data.data);
      })
      .catch((err) => console.log("err GET Business", err));
  };
  const postNewBusiness = (newBusiness) => {
    // Unit 3 changed axios to axiosWithAuth() and changed POST endpoint
    console.log('REG-BSN data test:', newBusiness);
    // Console Log testing shows we're able to get to submit() and populate object correctly, but call to this function doesn't happen
    // Will use connect instead to dispatch via actions to reducer. Will have to comment out this axios

    /*
    dispatch({type: FETCHING_DATA})
    axiosWithAuth()
      .post("/register", newBusiness)
      .then((res) => {
        dispatch({type: CREATE_NEW_ACCT});
        //setBusiness([res.data, ...business]);
        //setFormValues(valuesBusiness);
        history.push('/business');
      })
      .catch((err) => console.log("err POST forms", err));
      */

      props.registerRequest(newBusiness);
      props.history.push('/business');
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
    const newBusiness = {
      username: formValues.username.trim(),
      businessName: formValues.businessName.trim(),
      businessAddress: formValues.businessAddress.trim(),
      phoneNumber: formValues.phoneNumber.trim(),
      password: formValues.password.trim(),
      // Unit 3 added accountType for API
      accountType: 'business'
    };
    // Unit 3 debug test output
    console.log('NEW-BSN OBJ:', newBusiness);

    postNewBusiness(newBusiness);
  };

  useEffect(() => {
    getBusiness();
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

  // Unit 3 Code below
  const backToHome = evt => {
    evt.preventDefault();
    history.push('/');
  };

  return (
    <form className="form container" onSubmit={onSubmit}>
      <SubmitStyle>
        <div className="errors">
          <div>{formErrors.username}</div>
          <div>{formErrors.businessName}</div>
          <div>{formErrors.businessAddress}</div>
          <div>{formErrors.phoneNumber}</div>
          <div>{formErrors.password}</div>
        </div>

        <div>
          <h3>Register Form -- business</h3>
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
            Business Name&nbsp;
            <input
              value={formValues.businessName}
              onChange={onInputChange}
              name="businessName"
              type="text"
              className="inputone"
            />
          </label>
          <label>
            Business Address&nbsp;
            <input
              value={formValues.businessAddress}
              onChange={onInputChange}
              name="businessAddress"
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
          <input type='button' value='Already have an account' style={{background: 'olivedrab', color: 'red', marginTop: '10px'}} onClick={backToHome} />
        </div>
      </SubmitStyle>
    </form>
  );
};

const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id
    };
};

export default connect(mapStateToProps, {registerRequest})(RegisterBusiness);
