import dnvLogo from "../image/dnv_logo.png";
import { Link } from "react-router-dom";
import "../styles.css";
import ContactCard from "./ContactCard";
import SocialIcons from "./SocialIcons";

const Footer = () => {
  return (
    <>
      <div className="footer">
  
        <div className="quick-links-column">
          <h2>Quick links</h2>
          <Link className="no-decor" to="/Product/Starters">Motor Starters</Link>
          <br></br>
          <Link className="no-decor" to="/Product/ControlSwitches">
            L.T. Control Switches
          </Link>
          <br></br>
          <Link  className="no-decor" to="/Product/SubmersiblePanels">
            Submersible Panels
          </Link>
          <br></br>
          <Link  className="no-decor" to="/Product/PanelAccessories">Accessories</Link>
        </div>
        <div className="follow-us-column">
          <ContactCard />
        </div>

        <div className="follow-us-column">
          <h2>Visit us on</h2>
          <SocialIcons />
          <div className="footer-col xxs-text mt-5">

             <img src={ dnvLogo} alt="Apex ISO 9001" className="dnv-logo"></img>
            <br></br>
            ISO 9001, by DNV
        </div>

        </div>
      </div>
      <div className="centered-text medium-text footer-bed">
        Copyright @2024 Apex Electricals
      </div>
    </>
  );
};

export default Footer;
