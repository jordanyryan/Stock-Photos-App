import React, { Component } from 'react';
import {connect} from 'react-redux';
import Gallery from 'react-photo-gallery';

class PhotoGallery extends Component {
  
  render() {
    return(
      <Gallery photos={this.props.photos}/>
    )
  }
}

function mapStateToProps({photos}) {
  return {photos};
}

export default connect(mapStateToProps)(PhotoGallery);