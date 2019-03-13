const cartWithoutItem = (cart, item) =>
  cart.filter(item2 => item2.id !== item.id);

const itemInCart = (cart, item) => cart.filter(item2 => item2.id == item.id)[0];

const addToCart = (cart, item) => {
  const cartItem = itemInCart(cart, item);
  var newcart = cartWithoutItem(cart, item);
  if (cartItem === undefined) {
    newcart.push({ ...item, quantity: 1 });
  } else {
    newcart.push({ ...item, quantity: cartItem.quantity + 1 });
  }
  return newcart;
};

const removeFromCart = (cart, item) => {
  var newCart = cartWithoutItem(cart, item);
  if (item.quantity == 1) {
    return newCart;
  } else {
    newCart.push({ ...item, quantity: item.quantity - 1 });
  }
  return newCart;
};

const removeAllFromCart = (cart, item) => {
  var newCart = cartWithoutItem(cart, item);
  return newCart;
};

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD':
      console.log('fromadd', action.payload, state);
      return addToCart(state, action.payload);

    case 'REMOVE':
      return removeFromCart(state, action.payload);
    case 'REMOVE_ALL':
      return removeAllFromCart(state, action.payload);
    default:
      return state;
  }
};

export default cartReducer;
