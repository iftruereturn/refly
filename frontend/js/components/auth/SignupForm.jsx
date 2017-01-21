import React, { Component, PropTypes } from 'react';

class SignupForm extends Component {
  static propTypes = {
    signup: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',
      username: '',
    };
  }

  processForm = (e) => {
    e.preventDefault();
    this.props.signup(this.state.email, this.state.password, this.state.username);
  }

  handleEmailChange = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handlePasswordChange = (e) => {
    this.setState({
      password: e.target.value,
    });
  }

  handleUsernameChange = (e) => {
    this.setState({
      username: e.target.value,
    });
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
            value={this.state.email}
            onChange={this.handleEmailChange}
          />
        </div>
        <div>
          <label htmlFor="password">password:</label>
          <input
            type="password"
            name="password"
            value={this.state.password}
            onChange={this.handlePasswordChange}
          />
        </div>
        <div>
          <label htmlFor="username">username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleUsernameChange}
          />
        </div>
        <input type="submit" value="Enter" />
      </form>
    );
  }
}

export default SignupForm;
