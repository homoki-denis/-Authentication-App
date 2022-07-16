import "./App.scss";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";
import { useAuth0 } from "@auth0/auth0-react";

function App() {
  const { isAuthenticated } = useAuth0();
  return (
    <div className="App">
      {!isAuthenticated && (
        <div>
          <h1>User Login Authentication</h1>
          <p>Please Login To View Your Data</p>
        </div>
      )}
      <LoginButton />
      <UserProfile />
      <LogoutButton />
    </div>
  );
}

export default App;
