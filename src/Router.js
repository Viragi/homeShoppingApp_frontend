import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import checkoutpage from './Pages/CheckoutPage';
import OrdersPage from './Pages/OrdersPage';
import SignUpPage from './Pages/SignUpPage';
import LoginPage from './Pages/LoginPage';

const Router = () => (
  <Switch>
    <Route exact path="/" component={HomePage} />
    <Route exact path="/cart" component={CartPage} />
    <Route exact path="/checkout" component={checkoutpage} />
    <Route exact path="/signup" component={SignUpPage} />
    <Route exact path="/login" component={LoginPage} />
    <Route exact path="/logout" component={HomePage} />
    <Route path="/order/:id" component={OrdersPage} />
  </Switch>
);

export default Router;
