import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

class PostsNew extends Component {
    renderField(field) {
        // console.log(field);
        return (
            <div className='form-group'>
                <label>{field.label}</label>
                <input 
                    // this ... field input means to wire up 
                    // onChange, onFocus, onBlur
                    className='form-control'
                    type='text'
                    {...field.input}
                />
                {field.meta.error}
            </div>
        );
    }

    render() {
        return (
            <form>
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
        errors.title = 'Enter some content';
    }
    //validate the inputs from the 'values' object
    //if errors is empty, the form is fine to submit
    return errors; 
}

export default reduxForm({
    validate,
    form: 'PostsNewForm'
})(PostsNew);
