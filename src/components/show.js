import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Textarea from 'react-textarea-autosize';
import marked from 'marked';
// import { Link } from 'react-router';

// import Welcome from './welcome';

// example class based component (smart component)
class Show extends Component {
  constructor(props) {
    super(props);

    // init component state here
    this.state = {
      isEditing: false,
      editingTitle: false,
      content: '',
    };
    this.onDeleteClick = this.onDeleteClick.bind(this);
    this.changeEdit = this.changeEdit.bind(this);
  }

  componentWillMount() {
    this.props.fetchpost(this.props.params.id);
  }

  onTextChange(event) {
    this.setState({ content: event.target.value });
    console.log(this.state.content);
  }

  onDeleteClick() {
    this.props.deletePost(this.props.params.id);
  }

  editMode() {
    if (this.state.isEditing) {
      return <Textarea onChange={text => this.onTextChange(text)} value={this.state.content} />;
    } else {
      return <div dangerouslySetInnerHTML={{ __html: marked(this.props.currentPost.content || '') }} />;
    }
  }

  editSymbol() {
    if (this.state.isEditing) {
      return <i className="fa fa-check" onClick={this.changeEdit} aria-hidden="true"></i>;
    } else {
      return <i className="fa fa-pencil" onClick={this.changeEdit} aria-hidden="true"></i>;
    }
  }

  changeEdit(event) {
    if (this.state.isEditing) {
      this.props.updatePost(this.props.params.id, this.state.title, this.state.tags, this.state.content);
      console.log('updating post');
      // this.props.fetchpost(this.props.params.id);
    } else {
      this.setState({
        content: this.props.currentPost.content,
      });
    }

    this.setState({
      isEditing: !this.state.isEditing,
    });
  }

  render() {
    if (!this.props.currentPost) {
      return (
        <div>Loading</div>
      );
    } else {
      return (
        <div>
          <h1>{this.props.currentPost.title}</h1>
          <h3>Tags: {this.props.currentPost.tags}</h3>
          <i className="fa fa-trash-o" onClick={this.onDeleteClick} aria-hidden="true"></i>
          {this.editSymbol()}
          {this.editMode()}
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
