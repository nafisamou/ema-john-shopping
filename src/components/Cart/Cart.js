import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  // console.log(cart);
  let quantity = 0;
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    quantity = quantity + product.quantity;
    total = total + product.price * product.quantity;
    shipping = shipping + product.shipping * product.quantity;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + shipping + tax ;
  return (
    <div className="cart">
      <h4>Order Summary</h4>
      <p>
        <strong>Selected Items: </strong>{quantity} 
      </p>
      <p>
        <strong>Total Price: </strong> ${total}
      </p>
      <p>
        <strong>Total Shipping: </strong> ${shipping}
      </p>
      <p>
        <strong>Tax: </strong>${tax}
      </p>
      <h4>Grand Total: </h4>${grandTotal}
    </div>
  );
};

export default Cart;
