import starters from "../image/starters.jpg";
import dol from "../image/dolclassic.jpg";
import starDelta from "../image/asd.jpg";
import reverseForward from "../image/reversing.jpg";
import { Link } from "react-router-dom";

const Starters = () => {
  return (
    <main>
    <h3 className="centered-text  a-border para_background mt-3 mb-1">Motor Starters</h3>
       <div className=" centered-text"> <img src={ starters } alt="Apex Motor Starters" className="main-content-pic"/></div>
    <h5  className="centered-text">
      Robust motor control and protection devices
    </h5>
    <div className="a-paragraph p-3 m-5 pb-1 mb-1 mt-2">
      A motor starter is an electrical device used to start, stop, and protect electric motors. It typically consists of a combination of components that work together to control the flow of electricity to the motor and provide the necessary protection against overloads, short circuits, and other electrical faults.
        <br></br>
    The primary components of a motor starter include Contactors, Overload Relays among other components.
    </div>
    <div className="product-container">
        <Link className="no-decor" to="/ProductDetail/DolClassic">
      <div className=" p-4 centered-text">
        <img src={ dol } alt="Apex Direct Online Motor Starter"  className="thumbnail2"/>
        <br/>
      <span className="product-caption">Direct Online Motor Starters</span>
      </div></Link>
      <Link  className="no-decor" to="/Product/Starters/StarDeltaStarters">
      <div className=" p-4 centered-text">
        <img src={ starDelta } alt="Apex Star Delta Starter"  className="thumbnail2"/>
        <br/>
      <span className="product-caption">  Star Delta Starters</span>
      </div></Link>
        <Link className="no-decor"  to="/Product/Starters/ReverseForwardStarters">
      <div className=" p-4 centered-text">
        <img  src={ reverseForward }  alt="Apex Forward Reverse Starter"  className="thumbnail2"/>
        <br/>
      <span className="product-caption">  Star Delta Starters</span>      </div></Link>
    </div>
  </main>
  )
}

export default Starters
