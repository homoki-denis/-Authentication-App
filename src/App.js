import "./App.scss";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <div className="App">
      <LoginButton />
      <UserProfile />
      <LogoutButton />
    </div>
  );
}

export default App;
