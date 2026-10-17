
import { Link, NavLink } from 'react-router';

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="brand">
        <span className="brand-icon">🍹</span>
        Mocktail<span className="brand-accent">Menu</span>
      </Link>

      <div className="nav-links">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/drinks">Menu</NavLink>
        <NavLink to="/favourites">Favourites ♥</NavLink>
      </div>
    </nav>
  );
}

export default Navbar;
