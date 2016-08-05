import React, { Component } from 'react';
import { Link } from 'react-router';

// import Welcome from './welcome';

// example class based component (smart component)
class App extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }

  render() {
    return (
      <div id="base">
        <nav id="nav">
          <span><Link to="/" className="navitem" >My Blog</Link> </span>
          <span className="navitem"><Link to="posts/new">New post</Link></span>
        </nav>
        {this.props.children}
      </div>
    );
  }
}

export default App;
