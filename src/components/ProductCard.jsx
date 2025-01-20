import React from 'react';
import { Link } from 'react-router-dom';
import './CompStyle/ProductCard.css';

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <div className="product-card">
      <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>${product.price}</p>
      <Link to={`/product/${product.id}`}>View Details</Link>
      <button
                className="add-to-cart"
                onClick={() => handleAddToCart(product)}
              >
                Add to Cart
              </button>
    </div>
  );
};

export default ProductCard;
