import React from 'react';
import axios from 'axios';
import { Redirect } from 'react-router';
class SignUpPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: ''
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSignUp = e => {
    e.preventDefault();
    const user = {
      name: this.state.name,
      password: this.state.password,
      email: this.state.email
    };
    console.log(user);
    axios.post('http://localhost:3000/SignUp', { user }).then(res => {
      // this.setState({
      //   name: '',
      //   password: '',
      //   email: ''
      // });
      this.props.history.push('/');
    });
  };

  render() {
    return (
      <div>
        <h1>SignUp</h1>
        <form action="#">
          <div>
            <label htmlFor="name">Username</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={this.handleChange}
              value={this.state.name}
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
            />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </div>
          <div>
            <button onClick={this.handleSignUp}>SignUp</button>
          </div>
        </form>
      </div>
    );
  }
}

export default SignUpPage;
