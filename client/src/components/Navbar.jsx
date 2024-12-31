import "../styles/navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="brand">
          <img src="/vite.svg" alt="logo" />
          <h2>Mindstay</h2>
        </div>
        <nav>
          <Link to={"/"} className="link">
            Home
          </Link>
          <Link to={"/about"} className="link">
            About
          </Link>
          <Link to={"/contact"} className="link">
            Contact
          </Link>
          <Link to={"/products"} className="link">
            Products
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
