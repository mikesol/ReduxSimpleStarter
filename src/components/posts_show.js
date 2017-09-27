import React, { Component } from 'react';
import {connect} from 'react-redux';
import {fetchPost, deletePost} from '../actions';
import {Link} from 'react-router-dom';

class PostsShow extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }
  componentDidMount() {
    this.props.fetchPost(this.props.match.params.id);
  }
  onClick() {
    console.log('calling delete function');
    this.props.deletePost(this.props.post.id, () => {
      this.props.history.push('/');
      return this.props.post.id;
    });
  }
  render() {
    if (!this.props.post) {
      return <div>Loading...</div>
    }
    const { title, categories, content } = this.props.post;
    return (
      <div>
        <Link to="/">back to index</Link>
          <button
            className="btn btn-danger pull-xs-right"
            onClick={this.onClick}>
              Delete
          </button>
        <h3>{title}</h3>
        <h6>Categories: {categories}</h6>
        <p>{content}</p>
      </div>
    );
  }
}

function mapStateToProps({posts}, ownProps) {
  return { post: posts[ownProps.match.params.id]};
}

export default connect(mapStateToProps, {fetchPost, deletePost})(PostsShow);
