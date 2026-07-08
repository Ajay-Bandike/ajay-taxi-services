import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <h2>Ajay Taxi Services</h2>

      <div className="nav-links">

        <Link to="/">Home</Link>

        <div className="dropdown">

          <span className="dropdown-title">
            Services ▼
          </span>

          <div className="dropdown-menu">

            <Link to="/services">
              Vehicle Pricing
            </Link>

            <Link to="/fleet">
              Fleet
            </Link>

            <Link to="/tours">
              Tour Packages
            </Link>

          </div>

        </div>

        <Link to="/about">About</Link>

        <Link to="/reviews">Reviews</Link>

        <Link to="/contact">Contact</Link>

      </div>
    </nav>
  );
}

export default Navbar;