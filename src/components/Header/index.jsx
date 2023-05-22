import logo from "../../assets/images/logo.svg";

export function Header() {
  return (
    <header>
      <img src={logo} alt="Logo Icon" />
      <nav>
        <ul>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </ul>
      </nav>
      <div id="authentication">
        <ul>
          <button>Login</button>
          <button>Sign Up</button>
        </ul>
      </div>
    </header>
  );
}
