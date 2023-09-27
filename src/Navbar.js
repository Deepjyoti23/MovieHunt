function Navbar({ children }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🎬</span>
        <h1>MovieHunt</h1>
      </div>
      <div>{children}</div>
    </nav>
  );
}

export default Navbar;
