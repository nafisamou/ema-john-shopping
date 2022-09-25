import React from "react";
import "./Product.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
  const { handleAddToCart, product } = props;
  const { name, img, seller, price, ratings } = product;
  return (
    <div className="product">
      <img src={img} alt="" />
      <div className="product-info">
        <p className="product-name">{name}</p>
        <p>Price: ${price}</p>
        <p>Manufacturer : {seller}</p>
        <p>Rating : {ratings} star </p>
      </div>
      <div className="btn-info">
        <button className="btn-cart" onClick={() => handleAddToCart(product)}>
          <p>Add to Cart</p>
          
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Product;
