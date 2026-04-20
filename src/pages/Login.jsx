import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const { login, signup } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await login(email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSignup = async () => {
    try {
      await signup(email, password);
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="container">
      <h2>Login / Signup</h2>

      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={handleLogin}>Login</button>
      <button onClick={handleSignup}>Signup</button>
    </div>
  );
}