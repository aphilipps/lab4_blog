import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import { Link } from 'react-router';

// import Welcome from './welcome';

// example class based component (smart component)
class Listview extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {};
  }


  componentWillMount() {
    this.props.fetchposts();
  }

  renderNotes() {
    return this.props.posts.map(post => {
      return (
        <li key={post.id}><Link to={`/posts/${post.id}`}>{post.title}</Link></li>
      );
    });
  }

  render() {
    console.log(this.props.posts);
    return (
      <div>
        <ul>
        {this.renderNotes()}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

export default connect(mapStateToProps, actions)(Listview);
