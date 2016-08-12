import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

// import Welcome from './welcome';

// example class based component (smart component)
class NavBar extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {

    };

    // this.onEmailChange = this.onEmailChange.bind(this);
    // this.onPasswordChange = this.onPasswordChange.bind(this);
    // this.onClick = this.onClick.bind(this);
  }
  //
  // onEmailChange(event) {
  //   this.setState({ email: event.target.value });
  //   console.log(this.state.email);
  // }
  //
  // onPasswordChange(event) {
  //   this.setState({ password: event.target.value });
  //   console.log(this.state.password);
  // }
  //
  // onClick(event) {
  //   event.preventDefault();
  //   event.stopPropagation();
    // this.props.signinUser(this.state.email, this.state.password);
  //   this.setState({ email: '' });
  //   this.setState({ password: '' });
  // }

  renderSignOut() {
    if (this.props.authenticated) {
      return <span onClick={this.props.signoutUser}>Sign Out</span>;
    } else {
      return (
        <div>
          <span className="navitem"><Link to="signin">Sign In</Link></span>
          <span className="navitem"><Link to="signup">Sign Up</Link></span>
        </div>
      );
    }
  }

  render() {
    return (
      <div>
        <nav id="nav">
          <span><Link to="/" className="navitem" >My Blog</Link> </span>
          <span className="navitem"><Link to="posts/new">New post</Link></span>
          {this.renderSignOut()}
        </nav>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    authenticated: state.auth.authenticated,
  };
}

export default connect(mapStateToProps, actions)(NavBar);
