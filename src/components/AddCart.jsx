import React from 'react';
import './CompStyle/AddCart.css'

const ProductCard = ({ cart}) => {
  return (
    <div className="cart-notification">
    <p>Added to Cart!</p>
    <ul>
      {cart.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </div>
  );
};

export default ProductCard;
