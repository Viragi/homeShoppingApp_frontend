import React from 'react';
import AddButton from './Add-btn';
import RemoveButton from './Remov-btn';

export default function ProducListItem(props) {
  return (
    <div className="productlistitem">
      <h3>{props.product.name}</h3>
      <div>
        <img height={100} src={props.product.image} />
      </div>
      <div>{props.product.description}</div>
      <div>${props.product.price}</div>
      <AddButton
        addToCart={props.addToCart}
        product={props.product}
        cartItem={props.cartItem}
      />

      {props.cartItem ? (
        <RemoveButton
          cartItem={props.cartItem}
          removeFromCart={props.removeFromCart}
          product={props.product}
        />
      ) : null}
    </div>
  );
}
