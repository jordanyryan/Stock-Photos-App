import React, {Component} from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      liked: false
    }
  }

  onMouseEnter() {
    this.setState({
      hover: true
    })
  }

  onMouseLeave() {
    this.setState({
      hover: false
    })
  }

  onHeartClick() {
    // Add to User's like Photos
    this.setState({
      liked: !this.state.liked
    })
  }

  render() {
    const overlayClass = this.state.hover ? "overlay d-flex flex-column justify-content-between" : "overlay hidden";
    const liked = this.state.liked ? "text-danger" : "text-white";
    const {photo, itemNum} = this.props
    return(

      <div  className="col-lg-4 col-md-6 col-sm-12 img-gal my-2">
        <div onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} className="container-fluid img-gal-container p-0">
          <img className="img img-fluid" src={photo.src} alt={`galItem${itemNum}`}/>
          <div className={overlayClass}>
            <h2>Image Content</h2>
            <div className="container img-icon-list h-25 align-items">
              <i onClick={this.onHeartClick.bind(this)} className={`fa fa-heart fa-3x ${liked} mx-4`}></i>
              <i className="fa fa-plus fa-3x text-white mx-4"></i>
              <i className="fa fa-comments fa-3x text-white mx-4"></i>
            </div>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Photo;