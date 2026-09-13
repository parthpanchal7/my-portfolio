export default function Header() {
  return (
    <header className="site-header">
      <a className="logo-text" href="#">P@RTH</a>
      <nav className="nav">
        <a href="#work">Work</a>
        <a href="#journal">Notes</a>
        <a href="#about">About</a>
        <a href="#contact">Contact <span>↗</span></a>
      </nav>
    </header>
  );
}
