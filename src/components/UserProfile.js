import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function UserProfile() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Is Loading...</div>;
  }

  return (
    isAuthenticated && (
      <div className="user-profile">
        <img src={user.picture} alt="" />
        <h1>{user.name}</h1>
        <p>{user.email}</p>
        <p>{user.nickname}</p>
        <p>Updated At: {user.updated_at}</p>
      </div>
    )
  );
}

export default UserProfile;
