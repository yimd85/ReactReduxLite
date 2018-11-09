import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { createPost } from '../actions';

class PostsNew extends Component {
    
    onSubmit(values) {
        // console.log(values);
        this.props.createPost(values);
    }

    renderField(field) {
        // console.log(field);
        const { meta: { touched, error } } = field; 
        const className = `form-group ${touched && error ? 'has-danger' : ''}`;

        return (
            <div className={className}>
                <label>{field.label}</label>
                <input 
                    // this ... field input means to wire up 
                    // onChange, onFocus, onBlur
                    className='form-control'
                    type='text'
                    {...field.input}
                />
                <div className='text-help'>
                    { touched ? error : ''}
                </div>
            </div>
        );
    }


    render() {
        const { handleSubmit } = this.props;


        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                    label='Title for Post'
                    name='title'
                    // test='test'
                    // test2 = 'test2'
                    component={this.renderField}
                />
                <Field
                    label='Categories'
                    name='categories'
                    // test='test'
                    // test2 = 'test2'
                    component={this.renderField}
                />
                <Field
                    label='Post Content'
                    name='content'
                    // test='test'
                    // test2 = 'test2'
                    component={this.renderField}
                />
                <button type='submit' className='btn btn-primary'>Submit</button>
                <Link to='/' className='btn btn-danger'>Cancel</Link>
            </form>
        );
    }
}

function validate(values) {
    const errors = {};
    //console.log(values); -> {title: 'test', categories: 'alkdfjad', content: 'dtst'}
    if (!values.title) {
        errors.title = 'Enter a title';
    }
    if (!values.categories) {
        errors.categories = 'Enter some categories';
    }
    if (!values.content) {
        errors.content = 'Enter some content';
    }
    //validate the inputs from the 'values' object
    //if errors is empty, the form is fine to submit
    return errors; 
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(
    connect(null, { createPost })(PostsNew)
);
