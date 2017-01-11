import React, { Component, PropTypes } from 'react';

class LoginForm extends Component {
  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  processForm(event) {
    event.preventDefault();

  }

  render() {
    return (
      <form action="/" onSubmit={this.processForm}>
        <div>
          email: <input type="text" name="email" />
        </div>
        <div>
          password: <input type="text" name="password" />
        </div>
      </form>
    );
  }
}

export default LoginForm;
