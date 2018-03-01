import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class SearchBar extends Component {

  renderField(field) {
    const {touched, error} = field.meta;
    const className=`input-group mb-3 m-auto ${touched && error ? 'has-danger' : ''}`;
    return (  
      <div className="container d-flex justify-content-center">
        <div className={className}>
          <input
            aria-label="Recipient's username" 
            aria-describedby="basic-addon2"
            placeholder="Search for photos..."
            type={field.type}
            {...field.input}
          />
          <div className="input-group-append">
            <button className="btn" type="button"><i className="fa fa-search"></i></button>
          </div>
        </div>
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>

    )
  }

  renderAlert() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.error}
        </div>
      );
    }
  }

  handleFormSubmit({search}) {
    console.log(search)
  }

  render() {
    const {handleSubmit} = this.props;

    return(
      <div className="container mt-5">
        <form id="search-form" className="form-inline" onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <Field
                name="search"
                type="text"
                component={this.renderField}
              />
              {this.renderAlert()}
          
        </form>
      </div>
        
      
    )
  }
}


function validate(values) {
  // values --> Values in input fields as object at time of submit
  const errors = {};

  // then validate inputs
  if (!values.search) {
    errors.search = "Enter a Term!";
  }
  // if errors is empty, form is fine to submit
  // if errors has any properties, redux form assumes invalid
  return errors;
}


export default reduxForm({
  validate,
  form: 'signin'
})(
  connect(null)(SearchBar))




