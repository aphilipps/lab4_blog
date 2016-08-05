import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
// import { Link } from 'react-router';

// import Welcome from './welcome';

// example class based component (smart component)
class New extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      title: '',
      tags: '',
      content: '',
    };

    this.onTitleChange = this.onTitleChange.bind(this);
    this.onTagsChange = this.onTagsChange.bind(this);
    this.onContentChange = this.onContentChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
    console.log(this.state.title);
  }

  onTagsChange(event) {
    this.setState({ tags: event.target.value });
    console.log(this.state.tags);
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
    console.log(this.state.content);
  }

  onClick(event) {
    event.preventDefault();
    event.stopPropagation();
    this.props.createPost(this.state.title, this.state.tags, this.state.content);
    // this.props.onCreateNoteClick(this.state.noteTitle);
    this.setState({ title: '' });
    this.setState({ tags: '' });
    this.setState({ content: '' });
  }

  render() {
    return (
      <div>
        <form className="newPost">
          <input type="text" value={this.state.title} name="Title" placeholder="New Post Title" onChange={this.onTitleChange} />
          <input type="text" value={this.state.tags} name="Title" placeholder="New Post Tags" onChange={this.onTagsChange} />
          <input type="text" value={this.state.content} name="Title" placeholder="New Post Content" onChange={this.onContentChange} />
          <button type="submit" onClick={this.onClick}>Create Post</button>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: state.posts.all,
  };
}

export default connect(mapStateToProps, actions)(New);
