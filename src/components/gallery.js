import React, { Component } from 'react';
import {connect} from 'react-redux';

class PhotoGallery extends Component {
  renderPhotos() {
    return this.props.photos.map((photo, i) => {
      return (
        <div key={i} className="col-lg-4 col-md-6 col-sm-12 img-gal my-2">
          <img className="img img-fluid" src={photo.src} alt={`galItem${i}`}/>
        </div>
      )
    })
  }
  
  render() {
    return(
      <div className="container gal-container">
        <div className="row-container">
          <div className="row img-row mx-0 py-3 justify-content-between">
            {this.renderPhotos()}
          </div>
        </div>
      </div>
    )
  }
}

function mapStateToProps({photos}) {
  return {photos};
}

export default connect(mapStateToProps)(PhotoGallery);