import SocialIcons from "./SocialIcons";
import "./Contact.css";

const Contact = () => {
  return (
    <>
      <header>
        <h3 className="centered-text">Contact Us</h3>
      </header>
      <div className="contact-container">
        <div className="contact-column" id="1">
          <div className="address italics">
            <p>Apex House E-18 Industrial Area</p>
            <p>Jalandhar - 144004, Punjab, India</p>
          </div>
          <div className="contact-details italics">
            <p><b>Email:</b> <a href="mailto:sales@apexelectricals.com">sales@apexelectricals.com </a></p>
            <p><b>Phone:</b> +91 181 2290463</p>
            <p><b>Mobile:</b> +91 9988600162</p>
          </div>
        </div>
        <div className="contact-column centered-text" id="2">
          <h5>Follow us on:</h5>
          <SocialIcons />
        </div>
      </div>
    </>
  );
};

export default Contact;
