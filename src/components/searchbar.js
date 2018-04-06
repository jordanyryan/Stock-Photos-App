import React, { Component } from 'react';
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
        <h2 className="text-white text-left display-4 indie">Free Stock Photos</h2>
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




export default connect(null, actions)(SearchBar)




