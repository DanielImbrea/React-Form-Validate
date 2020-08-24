import React, {useState} from "react";
import "./index.css";

export default function App() {
  const [values, setValues] = useState({
    firstName: "",
    lastName:"",
    email: "",
  })

  const [submitted, setSubmitted] = useState(false)
  const [valid, setValid] = useState(false);
const handleFirstNameInputChange = e => {
  setValues({...values, firstName: e.target.value})
}

const handleLastNameInputChange = e => {
  setValues({...values, lastName: e.target.value})
}

const handleEmailInputChange = e => {
  setValues({ ...values, email: e.target.value });
};

const handleSubmit = e => {
  e.preventDefault();
  if(values.firstName && values.lastName && values.email) {
    setValid(true);
  }
  setSubmitted(true);
}

  return (
    <div class="form-container">
      <form class="register-form" onSubmit={handleSubmit}>
        {/* Uncomment the next line to show the success message */}
        {submitted && valid ? (
          <div class="success-message">
            Success! Thank you for registering
          </div>
        ) : null }
        <input
          value={values.firstName}
          onChange={handleFirstNameInputChange}
          id="first-name"
          class="form-field"
          type="text"
          placeholder="First Name"
          name="firstName"
        />
        {submitted && !values.firstName ?    <span>Please enter a first name</span> : null}
     

        {/* Uncomment the next line to show the error message */}
        {/*  */}
        <input
          values={values.lastName}
          onChange={handleLastNameInputChange}
          id="last-name"
          class="form-field"
          type="text"
          placeholder="Last Name"
          name="lastName"
        />
      {submitted && !values.lastName ? <span>Please enter a last name</span> : null}
        {/* Uncomment the next line to show the error message */}
        {/* <span id="last-name-error">Please enter a last name</span> */}
        <input
          onChange={handleEmailInputChange}
          values={values.email}
          id="email"
          class="form-field"
          type="text"
          placeholder="Email"
          name="email"
        />
        {submitted && !values.email ? <span>Please enter a first name</span> : null}
        
        {/* Uncomment the next line to show the error message */}
        {/* <span id="email-error">Please enter an email address</span> */}
        <button class="form-field" type="submit">
          Register
        </button>
      </form>
    </div>
  );
}
