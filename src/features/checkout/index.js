import React from 'react';
import { connect } from 'react-redux';
import Cart from '../cart/index';
import CheckOutForm from './CheckoutForm.js';
import fetchApi from '../../modules/fetch-api';

class CheckOut extends React.Component {
  submitOrder = (values, cart) => {
    const { email, name } = values.order;
    fetchApi('post', 'http://localhost:3000/order', {
      order: {
        name,
        email,
        order_items_attributes: cart.map(item => ({
          product_id: item.id,
          qty: item.quantity
        }))
      }
    }).then(json => {
      if (json.errors) {
        alert('something went wrong');
        return;
      }
      document.location.href = `/order/${json.id}`;
      //this.props.history.push(`/order/${json.id}`);
      return;
    });
  };

  render() {
    return (
      <div>
        <div style={{ border: '1px solid black' }}>
          <Cart />
        </div>
        {window.localStorage.jwtToken ? (
          <div>
            <button>Submit Order</button>
          </div>
        ) : (
          <div>
            <button>Log In</button>
            <button>Sign Up</button>
          </div>
        )}
        {/* <div>
          <CheckOutForm
            onSubmit={values => this.submitOrder(values, this.props.cart)}
          />
        </div> */}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default connect(mapStateToProps)(CheckOut);
