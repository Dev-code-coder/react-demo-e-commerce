import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';
import AddCart from '../components/AddCart';
import products from '../data/products.json'; 

const Home = () => {
  const [productData, setProductData] = useState(products);
  const [cart, setCart] = useState([]);
  

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  const getLoopData = ()=>{
    if(productData.length > 0){
      const repeatedData = [...products, ...products, ...products];
      setProductData(repeatedData)
    }
  }

useEffect(()=>{
getLoopData();
},[])

  return (
    <div className="product-list">
      {productData.map((product) => (
        <ProductCard key={product.id} product={product} handleAddToCart={handleAddToCart} />
      ))}
      {cart.length>0 && (
      <AddCart key={cart.id} cart={cart}/>
      )
    }
    </div>
  );
};

export default Home;
