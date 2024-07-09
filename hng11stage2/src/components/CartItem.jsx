import React from 'react';

function CartItem({ product }) {
  return (
    <div className="cart-item">
      <p>{product.name} - ${product.price}</p>
    </div>
  );
}

export default CartItem;
