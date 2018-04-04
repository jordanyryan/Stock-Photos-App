import React, { Component } from 'react';
import Photo from './photo';
import {connect} from 'react-redux';

class PhotoGallery extends Component {
  renderPhotos() {
    return this.props.photos.map((photo, i) => {
      return (
        <Photo photo={photo} key={i} itemNum={i}/>
      )
    })
  }
  
  render() {
    const header = this.props.header ? <h3 className="text-center">{this.props.header}</h3> : "";
    return(
      <div className="container gal-container">
        <div className="row-container">
        {header}
          <div className="row img-row mx-0 py-3">
            {this.renderPhotos()}
          </div>
        </div>
      </div>
    )
  }
}


export default PhotoGallery;