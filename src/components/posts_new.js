import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import _ from 'lodash';
import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';


class PostsNew extends Component {
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `form-group ${touched && error ? 'has-danger' : ''}`
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input className="form-control" type="text" {...field.input} />
        <div className="text-help">
        {touched ? error : ''}
        </div>
      </div>
    );
  }
  onSubmit(values) {
    console.log('on submit called', values);
  }
  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
        <h3>Make a Post</h3>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="Title" name="title" component={this.renderField}></Field>
          <Field label="Tags" name="categories" component={this.renderField}></Field>
          <Field label="Post Content" name="content" component={this.renderField}></Field>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};
  // if errors has *any* properties, redux form assumes form is invalid
  if (!values.title) {
    errors.title = "Enter a title!"
  }
  if (!values.categories) {
    errors.categories = "Enter some categories!"
  }
  if (!values.content) {
    errors.content = "Enter some content!"
  }
  return errors;
}

export default reduxForm({
  validate,
  // name of the form
  form: 'PostsNewForm'
})(PostsNew);
