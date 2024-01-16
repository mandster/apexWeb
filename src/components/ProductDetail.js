import React from 'react';
import PropTypes from 'prop-types';
import { useParams } from 'react-router-dom';
import productsData from '../Products/productsData'; // Assuming you have a file with product data


const ProductDetail = () => {
  // Access the productId from route parameters using useParams
  const { productId } = useParams();
  console.log(productId)
  // Find the product based on the provided productId
  const product = productsData.find((p) => p.id === productId);

  // If product with the provided id is not found, you can handle it accordingly
  if (!product) {
    return <div>Product not found</div>;
  }

  const { name, image, description } = product;

  return (
    <div className="product-detail-container">
      <h1 className="product-name text-center">{name}</h1>
      <img src={image} alt={name} className="product-image" style={{ maxWidth: '500px' }} />
      <p className="product-description">{description}</p>
      <div className="related-products">
        <h2>Related Products</h2>
        <div className="suggestion-buttons">
          {/* Display suggestions as rounded buttons */}
          {productsData
            .filter((p) => p.id !== productId) // Exclude the current product from suggestions
            .map((suggestion) => (
              <button key={suggestion.id} className="rounded-btn">
                {suggestion.name}
              </button>
            ))}
        </div>
      </div>
    </div>
  );
};

ProductDetail.propTypes = {
  productId: PropTypes.string.isRequired,
};

export default ProductDetail;
