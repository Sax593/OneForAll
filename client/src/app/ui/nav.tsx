export default function Nav() {
  return (
    <nav className="flex flex-row place-content-center w-4/5 h-8">
      <section>
        <h1>One For All</h1>
      </section>
      <section>
        <ul className="flex flex-row">
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
