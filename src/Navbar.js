import Search from "./Search";

function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🎬</span>
        <h1>MovieHunt</h1>
      </div>
      {children}
    </nav>
  );
}

export default Navbar;
