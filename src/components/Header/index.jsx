import { MyHeader, NavigationBar, Authentication } from "./styled";
import logo from "../../assets/images/logo.svg";
import PopoverDemo from "../Popover";

export function Header() {
  // const [activeSidebar, setActiveSidebar] = useState(false);

  // function showSidebar() {
  //   setActiveSidebar(!activeSidebar);
  // }

  console.log();

  return (
    <MyHeader>
      <img src={logo} alt="Logo Icon" />
      <header>
        <NavigationBar>
          <li>Features</li>
          <li>Pricing</li>
          <li>Resources</li>
        </NavigationBar>
        <Authentication>
          <PopoverDemo />
          {/* <Link to="/login">Login</Link>
          <Link to="/register">Sign Up</Link> */}
        </Authentication>
        {/* <Bars onClick={showSidebar}>
          <div></div>
          <div></div>
          <div></div>
        </Bars> */}
      </header>
      {/* <Sidebar active={activeSidebar}>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Pricing</a>
        </li>
        <li>
          <a href="">Resources</a>
        </li>
        <hr />
        <li>
          <Link to="/login">Login</Link>
        </li>
        <li>
          <Link to="/register">Sign Up</Link>
        </li>
      </Sidebar> */}
    </MyHeader>
  );
}
