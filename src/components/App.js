import React, { useState } from "react";
import "../styles/App.css";
import { signUpFormValidation } from "../utils/validation";

const App = () => {
  const [error, setError] = useState({});

  const validate = (event) => {
    event.preventDefault();

    const errors = signUpFormValidation({
      email: event.target.email.value,
      password: event.target.password.value,
      name: event.target.name.value,
    });
    setError(errors);
  };

  return (
    <>
      <form onSubmit={validate}>
        <div>
          <label>
            Name :
            <input id="name" type="text" name="name" />
          </label>
          {error.name == null || error.name == "" ? null : error.name}
        </div>
        <br />
        <div>
          <label>
            Email :
            <input id="email" type="text" name="email" />
          </label>
          {error.email == null || error.email == "" ? null : error.email}
        </div>
        <br />
        <div>
          <label>
            Password :
            <input id="password" type="text" name="password" />
          </label>
          {error.password == null || error.password == ""
            ? null
            : error.password}
        </div>
        <br />
        <div>
          <label>
            Consent :
            <input id="consent" type="checkbox" name="consent" />
          </label>
        </div>
        <br />
        <div>
          <button type="submit">Signup</button>
        </div>
      </form>
    </>
  );
};

export default App;
