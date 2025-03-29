import { useState } from "react";

const Signin = () => {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [userage, setUserage] = useState("");
  const [ageError, setAgeError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const isValidForm = validateForm();
    if (isValidForm) {
      console.log("Form submitted");
    }
  };

  const validateForm = () => {
    let isValid = true;

    // Validate username
    if (username.length < 3) {
      setUsernameError("Username must be at least 3 characters long.");
      isValid = false;
    } else {
      setUsernameError("");
    }

    // Validate email
    const emailRegex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    } else {
      setEmailError("");
    }

    // Validate password
    if (password.length < 6 || password.length > 15) {
      setPasswordError("Password must be at least 6 characters long.");
      isValid = false;
    } else {
      setPasswordError("");
    }

    // Validate age
    if (userage < 18 || userage > 99) {
      setAgeError("Age must be between 18 and 99.");
      isValid = false;
    } else {
      setAgeError("");
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
          name="username"
          onChange={(event) => setUsername(event.target.value)}
          required
          minLength="3"
          maxLength="15"
        />
        <div style={{ color: "red" }}>{usernameError}</div>

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          onChange={(event) => setEmail(event.target.value)}
          required
        />
        <div style={{ color: "red" }}>{emailError}</div>

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={(event) => setPassword(event.target.value)}
          required
          minLength="6"
        />
        <div style={{ color: "red" }}>{passwordError}</div>

        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          onChange={(event) => setUserage(event.target.valueAsNumber)}
          min="18"
          max="99"
        />
        <div style={{ color: "red" }}>{ageError}</div>

        <input type="submit" value="Register" />
      </form>
    </div>
  );
};

export default Signin;
