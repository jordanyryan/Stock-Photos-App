import React, { Component } from 'react';
import MainJumbo from './components/main-jumbo';
import PhotoGallery from './components/gallery';
import {connect} from 'react-redux';
import * as actions from './actions';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchPhotos('scenic');
  } 

  render() {
    return (
      <div className="App">
        <MainJumbo />
        <PhotoGallery photos={this.props.photos}/>
      </div>
    );
  }
}

function mapStateToProps({isOpen}) {
  return {isOpen}
}

export default connect(mapStateToProps, actions)(App);
