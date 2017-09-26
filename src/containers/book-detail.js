import React, {Component} from 'react';
import {connect} from 'react-redux';
//import { selectBook } from '../actions/index';
//import { bindActionCreators } from 'redux';

class BookDetail extends Component {
  render() {
    if (!this.props.active_book)
      return <div>Select a book to get started</div>

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.active_book.title}</div>
        <div>Pages: {this.props.active_book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {active_book: state.active_book}
}

/*
function mapDispatchToProps(dispatch) {
  // whenever selectBook is called, result should be passed to
  // all our reducers
  return bindActionCreators({ selectBook }, dispatch);
}

// Promote BookList from a component to a container
export default connect(mapStateToProps, mapDispatchToProps)(BookList);*/
export default connect(mapStateToProps)(BookDetail);
