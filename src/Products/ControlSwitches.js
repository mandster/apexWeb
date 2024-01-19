import control32 from "../image/controlswitch32.jpg";
import control63 from "../image/rf63.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const ControlSwitches = () => {
  return (
    <>
      <header>
        <h2 className="centered-text">L.T. Control Switches</h2>
      </header>

      {/* <img className="centered" src="your-big-image.jpg" alt="Big Image" /> */}
      <div className="description">
        <div>
          <b>L.T. Control Switches</b> or Low Tension Control Switches have
          various types and uses. They are used to control the function of
          motors or switching on/off, reversing the devices.
        </div>
        <div>
          The contacts used are alloys that provide long life and millions of
          operations without any problem. Choice can be made according to two
          parameters viz. load of your application and function.
        </div>
        <div>
          We manufacture Switches in two capacities 32 Amps and 63 Amps which
          suit the most low voltage needs. Different configurations manufactured
          by us are as follows:
          <ul className="custom-list">
            <li>
              <i className="fas fa-caret-right"></i> On-Off Switches
            </li>
            <li>
              <i className="fas fa-caret-right"></i> Forward-Reverse Switches
            </li>
            <li>
              <i className="fas fa-caret-right"></i> Forward-Reverse Pole
              Changing Switches
            </li>
            <li>
              <i className="fas fa-caret-right"></i> Change-Over Switches
            </li>
            <li>
              <i className="fas fa-caret-right"></i> Star-Delta Switches
            </li>
            <li>
              <i className="fas fa-caret-right"></i> Phase Changer Switches
            </li>
          </ul>
        </div>
        <div className="variant-container">
          <div className="product-description">
            <p>
              <b>Apex L.T Control Switches 32 A </b>
            </p>
          </div>
          <div className="float-child2 float-right mb-4">
            <img
              src={control32}
              alt="Apex L.T Control Switches 32 A"
              className="product-image"
            />
          </div>
          <div className="product-description">
            <p>
              <b>Apex L.T Control Switches 63 A </b>
            </p>
          </div>
          <div className="float-child2 float-right mb-4">
            <img
              src={control63}
              alt="Apex L.T Control Switches 63 A"
              className="product-image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ControlSwitches;
