import SocialIcons from "./SocialIcons";

const Contact = () => {
  return (
      <><h2 className="centered-text mt-5">Contact Us</h2><div className="contact-container">
      <div className="contact-column" id="1">
        <div className="address italics">
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
