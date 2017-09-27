import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPosts } from '../actions'
import _ from 'lodash';

class PostsIndex extends Component {
  componentDidMount() {
    this.props.fetchPosts();
  }
  renderPost(post) {
    console.log('post', post)
    return (
      <li className="list-group-item" key={post.id}>{post.title}</li>
    );
  }
  render() {
    if (!this.props.posts) {
      return <div>No posts yet</div>
    }
    console.log('posts', this.props.posts);
    return (
      <div>
        <div className="text-xs-right">
          <Link className="btn btn-primary" to="/posts/new">Add a Post</Link>
        </div>
        <h3>My Posts</h3>
        <ul className="list-group">
        {_.values(this.props.posts).map(post => this.renderPost(post))}
        </ul>
     </div>
    );
  }
}

function mapStateToProps({posts}) {
  return { posts };
}

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);
