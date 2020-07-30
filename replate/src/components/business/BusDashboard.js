  
import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import * as Yup from "yup";
import axios from "axios";



function BusForm() {
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
  return (
    <BusSignUp className='signup'>
  
        <h2>Business Profile</h2>
        <h3>Login Form</h3>
      

      <form className='form-inline' onSubmit={formSubmit}>
        <div className="form-group">
            {/* //name */}
            <label htmlFor='name'>Name</label>
            <input
              className='input form-control'
              type='text'
              id='name'
              name='name'
              onChange={inputChange}
              value={formState.name}
            />
        </div>
                      {/* {errors.name.length > 0 ? (
                <p className='error'>{errors.name}</p>
              ) : null} */}
            

        <div className="form-group">
          {/* //email */}
          <label htmlFor='email'>Email</label>
          <input
            className='input form-control'
            type='email'
            id='email'
            name='email'
            onChange={inputChange}
            value={formState.email}
          />
        </div> 
            {/* {errors.email.length > 0 ? (
              <p className='error'>{errors.email}</p>
            ) : null} */}
          <button className='signup-btn btn btn-default' type='submit'>
              Sign Up
            </button>
               <p className='signup-small-font'></p>
                Already registared? Log in here{" "}
              {/* <Link to='/login' className='signup-link'>
                  here
        </Link> Log inlink can be added here if applicable */}

        </form>
      </BusSignUp>
    
  );
}

export default BusForm;
