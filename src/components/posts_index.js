import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions'
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPost(post) {
    console.log('post', post)
    return (
      <li key={post.id}>{post.title}</li>
    );
  }
  render() {
    if (!this.props.posts) {
      return <div>No posts yet</div>
    }
    console.log('posts', this.props.posts);
    return (
      <div><ul>{_.values(this.props.posts)}</ul></div>
    );
  }
}

function mapStateToProps({posts}) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
