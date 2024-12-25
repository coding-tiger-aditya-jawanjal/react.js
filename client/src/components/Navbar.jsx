import "../styles/navbar.css";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="brand">
          <img src="/vite.svg" alt="logo" />
          <h2>Mindstay</h2>
        </div>
        <nav>
          <span>Home</span>
          <span>About</span>
          <span>Contact</span>
          <span>Projects</span>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
