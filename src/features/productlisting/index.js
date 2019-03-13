import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import ProductListItem from './Product-list-item';
//import fetchApi from '../../modules/fetch-api.js';
import SortBy from './SortBy';

class ProductListing extends React.Component {
  componentDidMount() {
    this.handleAPIcall();
  }

  handleAPIcall = value => {
    const { loadProducts } = this.props;
    axios.get(`http://localhost:3000/products?sortby=${value}`).then(res => {
      console.log('JJJSSSONN', res);
      loadProducts(res.data);
    });
  };

  render() {
    return (
      <div>
        <div>
          <SortBy handleAPIcall={this.handleAPIcall} />
        </div>
        <div className="productlisting">
          {this.props.products.map(product => {
            return (
              <ProductListItem
                product={product}
                addToCart={this.props.addToCart}
                removeFromCart={this.props.removeFromCart}
                cartItem={
                  this.props.cart.filter(item => item.id === product.id)[0]
                }
              />
            );
          })}
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart,
    products: state.products
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadProducts: products => {
      dispatch({ type: 'LOAD', payload: products });
    },
    addToCart: item => {
      dispatch({ type: 'ADD', payload: item });
    },
    removeFromCart: item => {
      dispatch({ type: 'REMOVE', payload: item });
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListing);
