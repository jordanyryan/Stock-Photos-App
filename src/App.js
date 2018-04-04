import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from './actions';
import MainJumbo from './components/main-jumbo';
import PhotoGallery from './components/gallery';
import './App.css';

class App extends Component {
  componentWillMount() {
    this.props.fetchPhotos('scenic')
    if(localStorage.getItem('token')) this.props.fetchUser();
  } 

  render() {
    console.log(this.props.photos)
    return (
      <div className="App">
        <MainJumbo history={this.props.history}/>
        <PhotoGallery photos={this.props.photos}/>
      </div>
    );
  }
}

function mapStateToProps({photos}) {
  return {photos};
}

export default connect(mapStateToProps, actions)(App);
