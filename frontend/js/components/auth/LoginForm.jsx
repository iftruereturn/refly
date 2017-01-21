import React, { Component, PropTypes } from 'react';

class LoginForm extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: '',
      password: '',
    };
  }

  processForm = (e) => {
    e.preventDefault();
    this.props.login(this.state.email, this.state.password);
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

  render() {
    return (
      <form onSubmit={this.processForm}>
        <h3>Log in</h3>
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
        <input type="submit" value="Enter" />
      </form>
    );
  }
}

export default LoginForm;
