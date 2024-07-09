import React from 'react';
import { Link } from 'react-router-dom';
import CartItem from './CartItem';


function Cart({ cart }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      {cart.length === 0 ? (
        <p>Your cart is empty</p>
      ) : (
        cart.map((product, index) => (
          <CartItem key={index} product={product} />
        ))
      )}
      <div className="total">
        <p>Total: ${total}</p>
      </div>
      <Link to="/">Return to store</Link>
    </div>
  );
}

export default Cart;
