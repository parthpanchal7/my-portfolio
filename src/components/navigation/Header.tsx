import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="logo-text" href="/">P@RTH</Link>
      <nav className="nav">
        <Link href="/#work">Work</Link>
        <Link href="/notes">Notes</Link>
        <Link href="/#about">About</Link>
        <Link href="/#contact">Contact <span>↗</span></Link>
      </nav>
    </header>
  );
}
