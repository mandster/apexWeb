import logo from "../image/Apex_logo_23.png";
import "../styles.css";
import Nav from "./Nav";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="row-container">
        <Link to="/Careers" className="link">
          Careers
        </Link>
        <Link to="/Contact" className="link">
          Contact us
        </Link>
      </div>
      <div className="header">
          <div className="logo-container">
        <Link to="/">
            <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
        </Link>
          </div>
          <div>
       < Nav />
          </div>
      </div>
      <div className="nav-bottom"></div>
    </>
  );
};

export default Header;
