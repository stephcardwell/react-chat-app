import './App.css';
import { auth } from ".//Firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Nav from "./Components/Nav";
import Welcome from "./Components/Welcome";
import Chatbox from "./Components/Chatbox";

function App() {
  const [user] = useAuthState(auth);
  
  return (
    <div className="App">
      <Nav />
      {user ? <Chatbox /> : <Welcome />}
    </div>
  );
}

export default App;
