import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products.json';

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));

  return (
    <div>
      <img src={process.env.PUBLIC_URL + product.image} alt={product.name} />
      <h1>{product.name}</h1>
      <p>${product.price}</p>
      <p>{product.description}</p>
    </div>
  );
};

export default ProductDetails;
