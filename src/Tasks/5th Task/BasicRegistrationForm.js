import React, { useState } from "react";
import styles from "./BasicRegistrationForm.module.css";

const BasicRegistrationForm = () => {

  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);
  //firstname function
  const handleFirstNameChange = (e) => {
    const firstNameString = e.target.value;
    setValues({ ...values, firstName: firstNameString });
  };
  //lastname function
  const handleLastNameChange = (e) => {
    const lastNameString = e.target.value;
    setValues({ ...values, lastName: lastNameString });
  };
  //email function
  const handleEmailChange = (e) => {
    const emailString = e.target.value;
    setValues({ ...values, email: emailString });
  }
  //submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    if(values.firstName.length > 0 && values.lastName.length > 0 && values.email.length > 0){
        
        setValid(true);
        
    }
    setSubmitted(true);
    
  };
  return (
    <div className={styles.formcontainer}>
      <form className={styles.registerform} onSubmit={handleSubmit}>
        {submitted && valid ? (
          <div className={styles.successmessage}>
            Success! Thank you for registering
          </div>
        ) : null}
        <input
          className={styles.formfield}
          onChange={handleFirstNameChange}
          type="text"
          name="first_name"
          value={values.firstName}
          placeholder="First Name"
        />
        {submitted && !values.firstName ? <span>Please enter first name</span> : null}

        <input
          className={styles.formfield}
          onChange={handleLastNameChange}
          type="text"
          name="last_name"
          value={values.lastName}
          placeholder="Last Name"
        />
        {submitted && !values.lastName ? <span>Please enter last name</span> : null}
        <input
          className={styles.formfield}
          onChange={handleEmailChange}
          type="text"
          name="email"
          value={values.email}
          placeholder="Email"
        />
        {submitted && !values.email ? <span>Please enter email</span> : null}
        <button className= {styles.formfield} type="submit">
          Register
        </button>
      </form>
    </div>
  );
};

export default BasicRegistrationForm;
