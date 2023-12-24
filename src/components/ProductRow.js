import { Link } from "react-router-dom";
import slide2 from "../image/starters.jpg";
import slide3 from "../image/controlswitches.jpg";
import slide4 from "../image/submersiblepanels.jpg";
import "../styles.css"; // Import your styles if needed

const ProductRow = () => {
  const products = [
    {
      id: "Starters",
      name: "Electric Motor Starters",
      thumbnail: slide2,
      description: "Switching and safety devices",
    },
    {
      id: "ControlSwitches",
      name: "L.T. Control Switches",
      thumbnail: slide3,
      description: "Heavy duty switching and controlling devices",
    },
    {
      id: "SubmersiblePanels",
      name: "Submersible Panels",
      thumbnail: slide4,
      description: "Device to control and protect submersible pumps",
    },
  ];

  return (
    <div className="product-row">
      {products.map((product) => (
        <Link to={`/Product/${product.id}`} key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.name} className="thumbnail" />
          <div className="thumb-description"><div className="thumb-name">{ product.name} </div>{product.description}</div>
        </Link>
      ))}
    </div>
  );
};

export default ProductRow;
