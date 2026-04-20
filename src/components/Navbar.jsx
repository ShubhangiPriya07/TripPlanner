import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{ background: "#333", color: "white", padding: "10px" }}>
      <h2>Smart Trip Planner</h2>
      <Link to="/">Dashboard</Link> |{" "}
      <Link to="/login">Login</Link>
    </nav>
  );
}