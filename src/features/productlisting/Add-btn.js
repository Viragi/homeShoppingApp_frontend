import React from 'react';

export default function AddButton(props) {
  return (
    <div>
      <button onClick={() => props.addToCart(props.product)}>
        Add to Cart({(props.cartItem && props.cartItem.quantity) || 0})
      </button>
      {props.cartItem && props.cartItem.quantity > 0}
    </div>
  );
}
