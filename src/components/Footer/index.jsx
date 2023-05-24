import { MyFooter, Links, SocialMedia } from "./styled";
import logo from "../../assets/images/logo.svg";
import facebook from "../../assets/images/icon-facebook.svg";
import twitter from "../../assets/images/icon-twitter.svg";
import pinterest from "../../assets/images/icon-pinterest.svg";
import instagram from "../../assets/images/icon-instagram.svg";

export function Footer() {
  return (
    <MyFooter>
      <img src={logo} alt="Logo Icon" />
      <div>
        <Links>
          <h3>Features</h3>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </Links>
        <Links>
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </Links>
        <Links>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </Links>
      </div>
      <SocialMedia>
        <a href="">
          <img src={facebook} alt="Icon Facebook" />
        </a>
        <a href="">
          <img src={twitter} alt="Icon Twitter" />
        </a>
        <a href="">
          <img src={pinterest} alt="Icon Pinterest" />
        </a>
        <a href="">
          <img src={instagram} alt="Icon Instagram" />
        </a>
      </SocialMedia>
    </MyFooter>
  );
}
