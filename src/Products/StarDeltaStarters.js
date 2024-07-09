import msd from "../image/msd.jpg";
import asd from "../image/asd.jpg";

const StarDeltaStarters = () => {
  return (
    <>
      <header>
        <h3 className="centered-text">Star Delta Motor Starters</h3>
      </header>

      {/* <img className="centered" src="your-big-image.jpg" alt="Big Image" /> */}

      <div className="description">
        <p>
          A Star Delta Starter is an electrical motor starting mechanism that is
          commonly used to reduce the starting current of induction motors. It
          is particularly employed in applications where the initial high
          current drawn during motor startup could be problematic for the
          electrical system or cause mechanical stress on the motor itself.
        </p>
        <p>
          The Star Delta Starter operates in two main stages: the star
          connection and the delta connection. Initially, during the star
          connection, the motor windings are configured in a way that reduces
          the voltage applied to each winding, resulting in lower current and
          torque. This helps minimize the inrush current and allows for a
          smoother start. After a predetermined time or when the motor reaches a
          specific speed, the connection switches to the delta configuration,
          restoring the full voltage to the motor windings for normal operation.
        </p>
      </div>

      <div className="variant-container">
        <div className="product-description">
          <p>
            <b>Manual Star-Delta Starter </b> starts in &apos;Star&apos; state
            with push of green button on the front and using the handle it is
            moved to Delta state after desired interval.
          </p>
        </div>
        <div className="float-child2 float-right mb-4">
          <img
            src={asd}
            alt="Apex Manual Star Delta Motor Starter"
            className="product-image"
          />
        </div>

        <div className="product-description">
          <p>
            <b>Automatic Star-Delta Starter</b>is started in &apos;Star&apos;
            state by pushing the green button on the front and is automarically
            shifted to Delta state using an adjustable time relay.{" "}
          </p>
        </div>
        <div className="float-child2 float-right">
          <img
            src={msd}
            alt="Apex Automatic Star Delta Motor Starter"
            className="product-image"
          />
        </div>
      </div>
    </>
  );
};

export default StarDeltaStarters;
