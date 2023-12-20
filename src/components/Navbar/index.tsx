import { Link } from "react-router-dom";
import "./index.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <Link to="/"><img src="/logo.png" alt="Logo" className="logo" /></Link>
      </div>
      <div className="nav-buttons">
        <Link to="/videos"><button className="nav-button">Library</button></Link>
        <Link to="/dashboard"><button className="nav-button">Account</button></Link>
        <button className="nav-button login-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
