  
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";
import RegisterPickUp from "../PickUpRequest";

// Added imports from Peter
import {connect} from 'react-redux';
import {getPendingPickups, updatePickup} from '../../actions/allActions';
import BHead from './BHead';
import BPending from './BPending';
import BAssigned from './BAssigned';
import BComplete from './BComplete';
import OrderForm from './OrderForm';



function BusForm(props) {
  useEffect(() => {
    props.getPendingPickups();
    console.log('BusForm foodType check:', props.pickups);
  }, []);

  /*
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    
  });

  const [buttonDisabled, setButtonDisabled] = useState("");
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    submit: false,
  });
  const [post, setPost] = useState([]);
  const formSchema = Yup.object().shape({
    name: Yup
      .string()
      .required("Enter your name here please")
      .min(2, "Your email must be longer than 2 characters"),
    email: Yup.string(),
    submit: Yup.boolean(),
  });

  useEffect(() => {
    console.log("a form state change has been made");
    formSchema.isValid(formState).then((valid) => {
      setButtonDisabled(!valid);
    });
  });

  const inputChange = (e) => {
    const { name, value } = e.target;
    Yup.reach(formSchema, name)
        .validate(value)
        .then(() => {
            setErrors({
                ...errors,
                [name]: "",
            });
        })
        .catch((err) => {
            setErrors({
                ...errors,
                [name]: err.errors[0],
            });
        });
    setFormState({
        ...formState,
        [name]: value,
    });
};
  const formSubmit = (e) => {
    e.preventDefault();
    axios
      .post("??????????", formState)
      .then((res) => {
        setPost(res.data);
        console.log("success", post);
        setFormState({
          name: "",
          email: "",
        });
      })
      .catch((err) => {
        console.log(err.response);
      });
  };
  */

  return (
    <div style={{width: '100%', height: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
      {/* From Peter: I'm not sure which of my team members to apologize to, but I had no alternative than to delete the form created here.
          Even commenting them out and creating a new div outside of it wasn't allowed. I know you had styling implemented.
          But at least the functionality of the login form that used to be here is now on the Front-End base page.
      */}
            <div style={{width: '100%', height: '16%'}}>
                <BHead />
            </div>
            <div style={{display: 'flex', height: '84%', width: '100%'}}>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box', background: '#2F323A', color: '#D9332A'}}><OrderForm /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box', background: '#9EAA4E'}}><BPending /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box'}}><BAssigned /></div>
                <div style={{width: '25%', height: '100%', boxSizing: 'border-box', background: '#464133', color: 'white'}}><BComplete /></div>
            </div>
    </div>
  );
};

const mapStateToProps = state => {
    return {
        //username: state.currentUser.username,
        pickups: state.pickups
    };
};

export default connect(mapStateToProps, {getPendingPickups, updatePickup})(BusForm);
