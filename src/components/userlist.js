import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

// import Welcome from './welcome';

// example class based component (smart component)
class UserList extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }


  componentWillMount() {
    this.props.fetchusers();
  }

  renderUsers() {
    return this.props.users.map(user => {
      return (
        <li key={user.id}>
          <div className="userBox">
            <span>Username: {user.username}</span>
            <span>Email: {user.email}</span>
          </div>
        </li>
      );
    });
  }

  render() {
    return (
      <div>
        <ul>
        {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    users: state.users.all,
  };
}

export default connect(mapStateToProps, actions)(UserList);
