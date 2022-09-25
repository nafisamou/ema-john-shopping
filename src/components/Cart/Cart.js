import React from "react";
import "./Cart.css";
const Cart = (props) => {
  const { cart } = props;
  console.log(cart);
  let total = 0;
  let shipping = 0;
  for (const product of cart) {
    total = total + product.price;
    shipping = shipping + product.shipping;
  }
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = (total + shipping + tax);
  return (
    <div className="cart">
      <h4> Order Summary</h4>
      <p>
        <strong>Selected Items:</strong> {cart.length}
      </p>
      <p>
        <strong>Total Price: ${total} </strong>
      </p>
      <p>
        <strong>Total Shipping: ${shipping}</strong>
      </p>
      <p>
        <strong>Tax: ${tax}</strong>
      </p>
      <h4>Grand Total: ${grandTotal}</h4>
    </div>
  );
};

export default Cart;
