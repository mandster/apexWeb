import SocialIcons from "./SocialIcons";
import logo from "../image/Apex_logo_23.png";

const Contact = () => {
  return (
      <><h2 className="centered-text mt-4">Contact Us</h2><div className="contact-container">
      <div className="contact-column" id="1">
        <div className="address italics">
          <p>
            <img src={logo} alt="APEX ELECTRICALS" className="footer-logo" />
          </p>
          <p>Apex House E-18 Industrial Area</p>
          <p>Jalandhar - 144004, Punjab, India</p>
        </div>
        <div className="contact-details italics">
          <p>Email: sales@apexelectricals.com</p>
          <p>Phone: +91 181 2290463</p>
          <p>Mobile: +91 9988600162</p>
        </div>
      </div>
      <div className="contact-column centered-text" id="2">
        <h5>Follow us on:</h5>
        <SocialIcons />
      </div>
    </div></>
  );
};

export default Contact;
