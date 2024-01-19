import panelsp from "../image/submersiblepanelsp.jpg";
import paneltp from "../image/submersibletp.jpg";
import panelauto from "../image/submersiblepanels.jpg";

const SubmersiblePanels = () => {
  return (
    <>
      <header>
        <h2 className="centered-text">Submersible Pump Control Panel</h2>
      </header>

      {/* <img className="centered" src="your-big-image.jpg" alt="Big Image" /> */}

      <div className="description">
        <p>
          A <b>Submersible Pump Control Panel </b> is an electrical control
          system designed for managing and protecting submersible pumps.
          Submersible pumps are typically used for pumping water from wells,
          boreholes, or other submerged sources. The control panel plays a
          crucial role in monitoring and controlling the operation of the
          submersible pump to ensure efficient and safe water pumping.
        </p>
      </div>

      <div className="variant-container">
        <div className="product-description">
          <p>
            <b>Apex Single Phase Submersible Pump Control Panel </b>is useful
            where the appliance in question is uses Single Phase connection up
            to 5 H.P.
          </p>
        </div>
        <div className="float-child2 float-right mb-4">
          <img
            src={panelsp}
            alt="Apex Single Phase Submersible Pump Control Panel"
            className="product-image"
          />
        </div>

        <div className="product-description">
          <p>
            <b>Apex Three Phase Submersible Pump Control Panel </b>is used where
            the connection is Three Phase up tp 10H.P.
          </p>
        </div>
        <div className="float-child2 float-right">
          <img
            src={paneltp}
            alt="Apex Three Phase Submersible Pump Control Panel"
            className="product-image"
          />
        </div>
        <div className="product-description">
          <p>
            <b>Apex Automatic Submersible Pump Control Panel </b>are used for
            protection of Heavy Duty Three Phase Submersible-Pumps upto 30 H.P.
            These panels start the pump in star position and when the pump gains
            its rated speed they automatically transfer it from star to delta
            position.
          </p>
        </div>
        <div className="float-child2 float-right mt-4">
          <img
            src={panelauto}
            alt="Apex Automatic Submersible Pump Control Panel"
            className="product-image"
          />
        </div>
      </div>
    </>
  );
};

export default SubmersiblePanels;
