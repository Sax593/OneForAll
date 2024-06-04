import "./navbar.css";

export default function Nav() {
  return (
    <nav className="navbar_background">
      <section className="navbar_logo">
        <h1>One For All</h1>
      </section>
      <section className="navbar_list_section">
        <ul className="navbar_list">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/answer">F.A.Q</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
        </ul>
      </section>
    </nav>
  );
}
