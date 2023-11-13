import "./index.css"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img src="logo.png" alt="Logo" className="logo" />
      </div>
      <div className="nav-buttons">
        <button className="nav-button">Library</button>
        <button className="nav-button">Accounts</button>
        <button className="nav-button">Features</button>
        <button className="nav-button login-button">Login</button>
      </div>
    </div>
  );
};

export default Navbar;
