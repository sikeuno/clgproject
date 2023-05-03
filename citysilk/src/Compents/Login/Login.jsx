import React, { useState } from "react";
import "./styles.css";
function LoginSignup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isSignup, setIsSignup] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleToggleSignup = () => {
    setIsSignup(!isSignup);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    if (isSignup) {
      console.log("Confirm Password:", confirmPassword);
      // Perform signup logic
    } else {
      // Perform login logic
    }
  };

  return (
    <form className="login-signup" onSubmit={handleSubmit}>
      <label className="login-signup-label">
        Email:
        <input
          className="login-signup-label-input"
          type="email"
          value={email}
          onChange={handleEmailChange}
        />
      </label>
      <label className="login-signup-label">
        Password:
        <input
          className="login-signup-label-input"
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </label>
      {isSignup && (
        <label className="login-signup-label">
          Confirm Password:
          <input
            className="login-signup-label-input"
            type="password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
          />
        </label>
      )}
      <button className="login-signup-button" type="submit">
        {isSignup ? "Signup" : "Login"}
      </button>
      <button
        className="login-signup-toggle-button"
        type="button"
        onClick={handleToggleSignup}
      >
        {isSignup
          ? "Already have an account? Login"
          : "Don't have an account? Signup"}
      </button>
    </form>
  );
}

export default LoginSignup;
