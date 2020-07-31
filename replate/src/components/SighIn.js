import React, { useState } from "react";
import { checkPropTypes } from "prop-types";

//Unit 3 imports
import {Link, useHistory} from 'react-router-dom';
import {loginRequest} from '../actions/allActions';
import {connect} from 'react-redux';


const SighIn = props => {
  const [user, setUser] = useState({ accountType: "", username: "", password: "" });
  const history = useHistory();

  //Unit 3 moved NameChange to FormChange
  const NameChange = (event) => {
    setUser({ ...user, username: event.target.value });
  };

  //Unit 3 moved PasswordChange to FormChange
  const PasswordChange = (event) => {
    setUser({ ...user, password: event.target.value });
  };

  const FormChange = (event) => {
    setUser({...user, [event.target.name]: event.target.value});
  };

  const Submit = (event) => {
    event.preventDefault();
    console.log(user);

    //Unit 3 Code below
    localStorage.setItem('username', user.username);
    props.loginRequest(user);
    if(user.accountType === 'business') {
      history.push('/business')
    } else if(user.accountType === 'volunteer') {
      history.push('/volunteer');
    }
  };

  return (
    <div className="sighIn">
      <form onSubmit={Submit}>
        <label>
          Account Type:
          <select name='accountType' onChange={FormChange}>
            <option>--- Select ---</option>
            <option value='business'>Business</option>
            <option value='volunteer'>Volunteer</option>
          </select>
        </label>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={FormChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={user.password}
            onChange={FormChange}
          />
        </label>
        <button>Sigh In</button>
      </form>
    </div>
  );
};

// Unit 3 code below
const mapStateToProps = state => {
    return {
        username: state.currentUser.username,
        id: state.currentUser.id
    };
};

export default connect(mapStateToProps, {loginRequest})(SighIn);
