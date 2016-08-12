import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';
// import { Link } from 'react-router';

// import Welcome from './welcome';

// example class based component (smart component)

function replaceComma(tags) {
  if (tags) {
    const tagString = tags.toString();
    const change = tagString.replace(',', ' ');

    return change;
  }
  return '';
}

class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      editing: false,
      title: '',
      tags: '',
      content: '',
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.changeContent = this.changeContent.bind(this);
  }

  componentWillMount() {
    this.props.fetchpost(this.props.params.id);
  }

  onTitleChange(event) {
    this.setState({ title: event.target.value });
    console.log(this.state.title);
  }

  onTagsChange(event) {
    const tagArray = event.target.value.split(' ');
    this.setState({ tags: tagArray });
  }

  onContentChange(event) {
    this.setState({ content: event.target.value });
    console.log(this.state.content);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id);
  }

  editTitle() {
    if (this.state.editing) {
      return <Textarea className="content" onChange={text => this.onTitleChange(text)} value={this.state.title} />;
    } else {
      return <h1 dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.title || '') }} />;
    }
  }
  editTags() {
    if (this.state.editing) {
      return <Textarea className="content" onChange={text => this.onTagsChange(text)} value={replaceComma(this.state.tags)} />;
    } else {
      return <h3> {replaceComma(this.props.currentPost.tags)} </h3>;
    }
  }

  editContent() {
    if (this.state.editing) {
      return <Textarea className="content" onChange={text => this.onContentChange(text)} value={this.state.content} />;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />;
    }
  }

  changeContent(event) {
    if (this.state.editing) {
      this.props.updatePost(this.props.params.id, this.state.title, this.state.tags, this.state.content);
      console.log('updating post');
      // this.props.fetchpost(this.props.params.id);
    } else {
      this.setState({
        title: this.props.currentPost.title,
        tags: this.props.currentPost.tags,
        content: this.props.currentPost.content,
      });
    }

    this.setState({
      editing: !this.state.editing,
    });
  }

  editSymbol() {
    if (this.state.editing) {
      return <button type="button" className="delete" onClick={this.changeContent}>Finished</button>;
    } else {
      return <button type="button" className="delete" onClick={this.changeContent}>Edit Post</button>;
    }
  }

  render() {
    if (!this.props.currentPost) {
      return (
        <div>Loading</div>
      );
    } else {
      return (
        <div className="post">
          {this.editTitle()}
          Author: {this.props.currentPost.author}
          {this.editTags()}
          <button type="button" className="delete" onClick={this.onDeleteClick}>Delete Post</button>
          {this.editSymbol()}
          {this.editContent()}
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    currentPost: state.posts.currentPost,
  };
}

export default connect(mapStateToProps, actions)(Show);
