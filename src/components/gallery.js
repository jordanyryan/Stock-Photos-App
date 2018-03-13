import React, { Component } from 'react';
import {connect} from 'react-redux';
import Gallery from 'react-photo-gallery';

class PhotoGallery extends Component {
  renderPhotos() {
    return this.props.photos.map(photo => {
      return (
        <div className="col-lg-4 col-md-6 col-sm-12 img-gal my-3">
          <img className="img img-fluid img-border" src={photo.src} alt=""/>
        </div>
      )
    })
  }
  
  render() {
    return(
        <div className="row img-row mx-0 py-3">
          {this.renderPhotos()}
        </div>
    )
  }
}

function mapStateToProps({photos}) {
  return {photos};
}

export default connect(mapStateToProps)(PhotoGallery);