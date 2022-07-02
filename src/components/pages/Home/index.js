import { Link } from "react-router-dom";
import './styles.css';

export default function Home() {
  return (
    <div className="home">
      <h1 className="logo">Manage your invertory professionally</h1>
      <nav className="navbar-tabs">
        <Link to="/signup">Sign up</Link> |{" "}
        <Link to="/login">Login</Link> 
      </nav>
    </div>
  );
}

