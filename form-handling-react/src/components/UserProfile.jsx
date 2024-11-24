import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
  const { username } = useParams();

  return (
    <div>
      <h2>User Profile</h2>
      <p>Welcome, {username}!</p>
    </div>
  );
};

export default UserProfile;
