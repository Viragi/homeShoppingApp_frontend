import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import Router from './Router';
import axios from 'axios';
import { connect } from 'react-redux';

const Navigation = ({ cart }) => (
  <nav className="menu">
    <ul>
      <li>
        <NavLink to="/">Home </NavLink>
      </li>
      <li>
        <NavLink to="/cart">
          Cart{' '}
          {cart.reduce((sum, item) => {
            return sum + item.quantity;
          }, 0)}
        </NavLink>
      </li>
      <li>
        <NavLink to="/checkout"> Checkout</NavLink>
      </li>
      {window.localStorage.jwtToken ? (
        <li>
          <NavLink
            to="/logout"
            onClick={() => {
              localStorage.removeItem('jwtToken');
            }}
          >
            {' '}
            Logout
          </NavLink>
        </li>
      ) : (
        <span>
          <li>
            <NavLink to="/login"> Login</NavLink>
          </li>
          <li>
            <NavLink to="/SignUp"> SignUp</NavLink>
          </li>
        </span>
      )}
    </ul>
  </nav>
);

class App extends Component {
  componentDidMount() {
    if (window.localStorage.jwtToken) {
      console.log('JWTTOKEN', window.localStorage.jwtToken);
      axios.defaults.headers.common['Authorization'] = `Bearer ${
        window.localStorage.jwtToken
      }`;
    } else {
      delete axios.defaults.headers.common['Authorization'];
    }
  }

  render() {
    return (
      <div className="pagecontainer">
        <Navigation {...this.props} />
        <Router />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    cart: state.cart
  };
}

export default withRouter(connect(mapStateToProps)(App));
