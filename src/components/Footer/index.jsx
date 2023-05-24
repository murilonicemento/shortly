import { MyFooter } from "./styled";
import logo from "../../assets/images/logo.svg";

export function Footer() {
  return (
    <MyFooter>
      <img src={logo} alt="Logo Icon" />
      <div>
        <span>
          <h3></h3>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </span>
        <span>
          <h3></h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </span>
        <span>
          <h3></h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </span>
      </div>
      <div>
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
      </div>
    </MyFooter>
  );
}
