import "./App.scss";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <h1>User Login Authentication</h1>
      <p>Please Login To View Your Data</p>
      <LoginButton />
      <UserProfile />
      <LogoutButton />
    </div>
  );
}

export default App;
