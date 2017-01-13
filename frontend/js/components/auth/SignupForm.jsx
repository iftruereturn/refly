import React, { Component, PropTypes } from 'react';

class SignupForm extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
  }

  processForm(e) {
    e.preventDefault();
    this.props.signup(this.email.value, this.password.value, this.username.value);
  }

  render() {
    return (
      <form onSubmit={this.processForm}>
        <h3>Sign up</h3>
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
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            name="username"
            ref={(input) => this.username = input}
          />
        </div>
        <input type="submit" value="Enter" />
      </form>
    );
  }
}

export default SignupForm;
