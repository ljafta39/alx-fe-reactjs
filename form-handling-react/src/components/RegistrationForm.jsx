import React, { useState } from "react";

const RegistrationForm = () => {
  // Manage individual states for each field
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username || !email || !password) {
      setError("All fields are required.");
      return;
    }
    setError("");
    console.log("Form submitted successfully:", { username, email, password });
    // Simulate an API call
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input
          type="text"
          name="username"
          value={username} // Now this explicitly references "username"
          onChange={(e) => setUsername(e.target.value)} // Update "username" state
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={email} // Explicitly referencing "email"
          onChange={(e) => setEmail(e.target.value)} // Update "email" state
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password} // Explicitly referencing "password"
          onChange={(e) => setPassword(e.target.value)} // Update "password" state
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
