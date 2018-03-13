import React, {Component} from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hover: false
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

  render() {
    const overlayClass = this.state.hover ? "overlay" : "overlay d-none";
    const {photo, itemNum} = this.props
    return(

      <div onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} className="col-lg-4 col-md-6 col-sm-12 img-gal my-2">
        <div className="container-fluid p-0">
          <img className="img img-fluid" src={photo.src} alt={`galItem${itemNum}`}/>
          <div className={overlayClass}>
          </div>
        </div>
        
      </div>
    )
  }
}

export default Photo;