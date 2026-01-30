import { useState } from "react";
import { loginUser } from "../Utils/Auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = loginUser(email, password);

    if (!user) {
      alert("Invalid credentials ❌");
      return;
    }

    localStorage.setItem("currentUser", JSON.stringify(user));
    alert("Login successful ✅");
    navigate("/");
  };

  return (
    <div className="auth">
      <h2>Login</h2>
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
