import React, { Component } from 'react';
import {connect} from 'react-redux';

class PhotoGallery extends Component {
  renderPhotos() {
    return this.props.photos.map((photo, i) => {
      return (
        <div key={i} className="col-lg-4 col-md-6 col-sm-12 img-gal my-3">
          <img className="img img-fluid img-border" src={photo.src} alt={`galItem${i}`}/>
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