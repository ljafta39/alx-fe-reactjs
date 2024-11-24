import React, { useState } from "react";

const RegistrationForm = () => {
  // Manage individual states for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({}); // Object to manage errors for each field

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};

    // Validate username
    if (!username) {
      newErrors.username = "Username is required.";
    }

    // Validate email
    if (!email) {
      newErrors.email = "Email is required.";
    }

    // Validate password
    if (!password) {
      newErrors.password = "Password is required.";
    }

    // Update errors state
    setErrors(newErrors);

    // Stop submission if there are errors
    if (Object.keys(newErrors).length > 0) {
      return;
    }

    // If no errors, simulate a successful submission
    console.log("Form submitted successfully:", { username, email, password });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {errors.username && <p style={{ color: "red" }}>{errors.username}</p>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errors.password && <p style={{ color: "red" }}>{errors.password}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
