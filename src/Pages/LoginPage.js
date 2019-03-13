import React from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

function setAuthorizationToken(token) {
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}

class LoginPage extends React.Component {
  handleOnLogin = e => {
    e.preventDefault();
    const user = {
      name: document.getElementById('Loginname').value,
      password: document.getElementById('Loginpassword').value
    };
    axios.post('http://localhost:3000/login/login', { user }).then(res => {
      console.log(res.data.message);
      if (res.data.message == 'Logged In!') {
        localStorage.setItem('jwtToken', res.data.token);
        setAuthorizationToken(res.data.token);
        this.props.history.push('/');
      } else {
        this.props.history.push('/login');
      }
    });
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form action="#">
          <div>
            <label htmlFor="name">Username</label>
            <input type="text" name="name" id="Loginname" />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="Loginpassword" />
          </div>
          <div>
            <button onClick={this.handleOnLogin}>Login</button>
          </div>
        </form>
      </div>
    );
  }
}

export default LoginPage;
