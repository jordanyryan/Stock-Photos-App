import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';

class Gallery extends Component {
  
  createGallery() {
    return _.map(_.chunk(this.props.photos, 3), photos => {
      return (
        <div className="row row-div mt-4">
        {_.map(photos, photo => {
          return (
            <div className="col-md-4 gallery-div">
              <img className="img-responsive gallery-img" src={photo.urls.full}/>
            </div>
          )
        })}
      </div>
    )})
  }

  render() {
    console.log(this.props.photos[1] ? this.createGallery() : "")
    return(
      <div className="container m-auto">
        {this.createGallery()}
      </div>
    )
  }
}

function mapStateToProps({photos}) {
  return {photos};
}

export default connect(mapStateToProps)(Gallery);