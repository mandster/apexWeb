
import dolclassic from "../image/dolclassic.jpg";
import dolcompact from "../image/dolcompact.jpg";


const DirectOnlineStarters = () => {
  return (
    <>
      <header>
        <h1 className="centered-text">Direct Online Starters</h1>
      </header>

      {/* <img className="centered" src="your-big-image.jpg" alt="Big Image" /> */}

      <div className="description">
        <p>Direct Online Starters (DOL Starters) are a type of motor starter used in electrical systems to initiate the operation of electric motors. These starters provide a simple and straightforward method of starting motors by directly connecting them to the power supply without any initial voltage reduction or soft-start mechanism.

</p> <p>Direct Online Starters are characterized by their simplicity, cost-effectiveness, and ease of installation. However, they may cause a higher initial current surge, which can lead to mechanical stress on the motor and the connected electrical network. As a result, DOL starters are commonly used for smaller motors or applications where the mechanical load and electrical network can accommodate the sudden starting current.
</p>
 </div>

      <div className="variant-container">
        <div className="product-description">
          <p>DOL Compact is small in size but still packs a punch. It has a specially made Contactor and Relay in order to deliver untiring service for years and years.</p>
          </div>
         
          <div className="float-child2 float-right mb-4">   

          <img src={dolcompact} alt="Direct onine Compact" className="product-image" />
        </div>
        <div> </div>
         
        <div className="product-description">
         <p>DOL classic is our flagship model that has been used widely and known for it robust performance for decades now. It has gone through many uprgradations since it's introduction and still stands tall amongst it's competition.</p>
          </div>
         
         <div className="float-child2 float-right">   
          <img src={dolclassic} alt="Direct Online Classic" className="product-image" />
        </div>
      </div>
    </>
  );
};

export default DirectOnlineStarters;
