import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router';
import { browserHistory } from 'react-router';

// import Welcome from './welcome';

// example class based component (smart component)
export default function (ComposedComponent) {
  class RequireAuth extends Component {

    componentWillMount() {
      if (!this.props.authenticated) {
        browserHistory.push('/signin');
      }
    }

    componentWillUpdate(nextProps) {
      if (!nextProps.authenticated) {
        browserHistory.push('/signin');
      }
    }

    render() {
      return (
        <div>
          <ComposedComponent {...this.props} />
        </div>
      );
    }
}

  function mapStateToProps(state) {
    return {
      authenticated: state.auth.authenticated,
    };
  }
  return connect(mapStateToProps, null)(RequireAuth);
}
