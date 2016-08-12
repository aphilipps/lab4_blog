import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { Link } from 'react-router';

// import Welcome from './welcome';

// example class based component (smart component)
class SignUp extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      email: '',
      password: '',
      name: '',
    };

    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onNameChange = this.onNameChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
    console.log(this.state.email);
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
    console.log(this.state.password);
  }

  onNameChange(event) {
    this.setState({ name: event.target.value });
    console.log(this.state.name);
  }

  onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.signupUser({ email: this.state.email, password: this.state.password, name: this.state.name });
    this.setState({
      email: '',
      password: '',
      name: '',
    });
  }

  render() {
    return (
      <div>
        <form className="newPost">
          <input type="text" value={this.state.email} name="Title" placeholder="Email" onChange={this.onEmailChange} />
          <input type="text" value={this.state.password} name="Title" placeholder="Password" onChange={this.onPasswordChange} />
          <input type="text" value={this.state.name} name="Title" placeholder="Name" onChange={this.onNameChange} />
          <button type="submit" onClick={this.onClick}>Create Account</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, actions)(SignUp);
