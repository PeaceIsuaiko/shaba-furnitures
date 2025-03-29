import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidForm = validateForm();
    if (isValidForm) {
      console.log("Login successful!");
    }
  };

  const validateForm = () => {
    let isValid = true;

    if (username.length < 3) {
      setUsernameError("Username incorrect");
      isValid = false;
    } else {
      setUsernameError("");
    }

    if (password.length < 6) {
      setPasswordError("Incorrect password");
      isValid = false;
    } else {
      setPasswordError("");
    }

    return isValid;
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          onChange={(event) => setUsername(event.target.value)}
          required
          minLength="3"
        />
        <div style={{ color: "red" }}>{usernameError}</div>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength="6"
        />
        <div style={{ color: "red" }}>{passwordError}</div>

        <input type="submit" value="Login" />
      </form>
    </div>
  );
};

export default Login;
