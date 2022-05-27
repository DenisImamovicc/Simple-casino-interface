import './App.css';
import LoginForm from './components/LoginForm';
import Casino from './components/Casino';
import { useState } from "react";

function App() {
  const [user, setUser] = useState({ userName: "", password: "" })
  const [err, setErr] = useState("")

  const login = details => {
    console.log(details);
  }

  const logout = () => {
    console.log("Logged out");
  }

  return (
    <div className="App">
      {(user.userName != "") ? (
        <Casino />
      ) : (
        <LoginForm Login={login} err={err}/>
      )}


    </div>
  );
}

export default App;
