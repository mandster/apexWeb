import React from "react";
import { Link } from "react-router-dom";
import slide1 from "../image/starters.jpg";
import slide2 from "../image/controlswitches.jpg";
import slide3 from "../image/submersiblepanels.jpg";
import slide4 from "../image/contactors.jpg";
import slide5 from "../image/allproducts.jpg";
import slide0 from "../image/allproducts.jpg";
import slide6 from "../image/allproducts.jpg";
import "../styles.css"; // Import your styles if needed

const Products = () => {
  const products = [

    {
      id: 0,
      name: "Electric Motor Starters",
      thumbnail: slide0,
      description: "Switching and safety devices",
    },
    {
      id: 1,
      name: "L.T. Control Switches",
      thumbnail: slide1,
      description: "Heavy duty switching and controlling devices",
    },
    {
      id: 2,
      name: "Submersible Panels",
      thumbnail: slide2,
      description: "Device to control and protect submersible pumps",
    },
    {
      id: 3,
      name: "Air Break Contactors",
      thumbnail: slide3,
      description: "Protection device used in electrical installations",
    },
    {
      id: 4,
      name: "Plug and Sockets",
      thumbnail: slide4,
      description: "Heavy duty plugs and sockets for various applications",
    },
    {
      id: 5,
      name: "Limit Switches",
      thumbnail: slide5,
      description: "Limit switches",
    },
    {
      id: 6,
      name: "Accessories",
      thumbnail: slide6,
      description: "Panel accessories",
    }  ];

    const columns = 2;
  const renderColumns = () => {
    const rows = [];
    const totalRows = Math.ceil(products.length / columns);
    console.log(totalRows);
    for (let i = 0; i < totalRows; i++) {
      const row = products.slice(i * columns, (i + 1) * columns).map((product) => (
        <Link to={`/product/${product.id}`} key={product.id} className="product-card">
          <img src={product.thumbnail} alt={product.name} className="thumbnail" />
          <div className="thumb-description">
            <div className="thumb-name">{product.name}</div>
            {product.description}
          </div>
        </Link>
      ));

      // Add empty placeholders if the last row has fewer items
      if (row.length < columns) {
        const emptyColumns = columns - row.length;
        for (let j = 0; j < emptyColumns; j++) {
          row.push(<div key={`empty-${j}`} className="empty-column"></div>);
        }
      }

      rows.push(<div className="row" key={i}>{row}</div>);
    }

    return rows;
  };

return  <><h3 className="centered-text mt-2"> Our Products </h3>
<div className="h-center centered-text">
<div className="product-row">{renderColumns()}</div></div></>;
};

export default Products;