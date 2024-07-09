import React from "react";
import contactor16 from "../image/contactor16.jpg";
import contactor22 from "../image/contactor22.jpg";
import contactor38 from "../image/contactor38.jpg";
import contactorChannel from "../image/contactorchannel.jpg";
import contactorChannel2 from "../image/contactorchannel2.jpg";
import "../styles.css";

const Contactors = () => {
  return (
    <>
      <header>
        <h3 className="centered-text">Air Break Contactors</h3>
      </header>
      <div className="description">
        <p>
          A <b>Contactor</b> is the heart of motor starters and many other
          important electrical installations and panels. They make or break the
          connections after receiving signals from either Over-Load Relays or
          any other mechanism. Being capable of performing millions of
          operations, they have Silver Alloys as contacts and the outer body is
          heat resistant. They consist of a Solenoid Coil, a Core (set), and
          Contacts.
        </p>
        <div>
          Contactors are used to control electric motors, lighting, heating,
          capacitor banks, and other electrical loads.
        </div>
        <ul className="custom-list">
          <li>High electrical and mechanical life Noise-free and chatter-free operation</li>
          <li>Heat resistant outer body</li>
          <li>Special protection to personal from live parts</li>
          <li>Replacement of Coil and contacts extremely easy</li>
          <li>Proper marking on power and auxiliary terminals for error-free wiring.</li>
        </ul>
      </div>
      <div className="variant-container">
        <div className="variant-item">
          <div className="float-child2">
            <img
              src={contactorChannel}
              alt="Apex 'COMMANDER' series Contactor"
              className="product-image"
            />
            <img
              src={contactorChannel2}
              alt="Apex 'COMMANDER' series Contactor"
              className="product-image"
            />
          </div>
          <div className="product-description">
            <div>
              <b>Apex COMMANDER Contactor</b> series has a modular design.
              Designed to perform in rugged conditions, it comes ready with
              1NO+1NC arrangement and various NO/NC arrangements using auxiliary
              contact blocks. These auxiliary contact blocks are quick and simple
              to mount. Apex Single Phase Submersible Pump Control Panel is useful
              where the appliance in question is uses Single Phase connection up
              to 5 H.P.
            </div>
            <div>
              Also, the design specifically emphasizes minimizing cost. The parts
              are very easy to replace, which brings down the down-time, hence
              cutting costs sharply.
            </div>
          </div>
        </div>
        <div className="variant-item">
          <div className="float-child2">
            <img
              src={contactor16}
              alt="Apex Three Phase Submersible Pump Control Panel"
              className="product-image"
            />
          </div>
          <div className="product-description">
            <p>
              <b>Apex Three Phase Submersible Pump Control Panel</b> is used where
              the connection is Three Phase up to 10 H.P.
            </p>
          </div>
        </div>
        <div className="variant-item">
          <div className="float-child2">
            <img
              src={contactor22}
              alt="Apex Automatic Submersible Pump Control Panel"
              className="product-image"
            />
            <img
              src={contactor38}
              alt="Apex Automatic Submersible Pump Control Panel"
              className="product-image"
            />
          </div>
          <div className="product-description">
            <p>
              <b>Apex Automatic Submersible Pump Control Panel</b> is used for
              protection of Heavy Duty Three Phase Submersible-Pumps up to 30 H.P.
              These panels start the pump in star position and when the pump gains
              its rated speed they automatically transfer it from star to delta
              position.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contactors;
