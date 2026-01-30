import { Link, useNavigate } from "react-router-dom";
import { getCurrentUser, logoutUser } from "../Utils/Auth";


function Navbar() {
  return (
    <header className="navbar">
      <h1 className="logo">Trendora</h1>

      <nav>
        <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/wishlist">Wishlist ❤️</Link>
        <Link to="/cart">Cart 🛒</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Sign Up</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
