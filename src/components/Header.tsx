function Header() {
  return (
    <header className="topbar">
      <div className="brand">
        <span className="adyen-logo">adyen</span>
        <span className="docs-label">docs</span>
      </div>

      <nav className="top-nav">
        <button>Payments⌄</button>
        <button>Platforms⌄</button>
        <button>In-person⌄</button>
        <button>Business users</button>
        <button>API reference</button>
        <button>Resources⌄</button>
      </nav>

      <div className="top-actions">
        <div className="search-box">
          <span>⌕</span>
          <input placeholder="Search docs..." />
          <span>⌘K</span>
        </div>

        <button className="login-btn">Log in</button>
        <button className="create-btn">Create account</button>
      </div>
    </header>
  );
}

export default Header;