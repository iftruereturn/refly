import React, { Component, PropTypes } from 'react';

class LoginForm extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  processForm(e) {
    e.preventDefault();
    this.props.login(this.email.value, this.password.value);
  }

  render() {
    return (
      <form onSubmit={this.processForm}>
        <h3>Log in</h3>
        <div>
          <label htmlFor="email">email:</label>
          <input
            type="text"
            name="email"
            ref={(input) => this.email = input}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            ref={(input) => this.password = input}
          />
        </div>
        <input type="submit" value="Enter" />
      </form>
    );
  }
}

export default LoginForm;
