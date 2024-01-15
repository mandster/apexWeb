import Navbar from './Navbar';
import logo from "../image/Apex_logo_23.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="nav-area">
        <Link to="/" className="logo">
        <img src={logo} alt="APEX ELECTRICALS" className="main-logo" />
        </Link>
        <Navbar />
      </div>
    </header>
  );
};

export default Header;  
