import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchBar extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      inputValue: ''
    };

    this.onInputChange = this.onInputChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }

  onInputChange(e) {
    const { value } = e.target;

    this.setState({
      inputValue: value
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    this.props.fetchPhotos(this.state.inputValue);
    this.setState({inputValue: ""})
  }

  render() {
    const { inputValue } = this.state;
    
    return (
      <div className='input-wrapper'>
        <form onSubmit={this.handleFormSubmit} autoComplete="off">
          <input
            id="main-search-input"
            onChange={this.onInputChange}
            placeholder='Search Photos...'
            value={inputValue}
            spellCheck={false}
            />
        </form>
        <span className='input-highlight'>
          { inputValue.replace(/ /g, "\u00a0") }
        </span>
      </div>
    );
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
  form: 'search'
})(connect(null, actions)(SearchBar))




