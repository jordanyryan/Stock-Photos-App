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
    let overlayClass = this.state.hover ? "overlay" : "overlay d-none";
    const {photo, itemNum} = this.props
    return(
      <div onMouseEnter={this.onMouseEnter.bind(this)} onMouseLeave={this.onMouseLeave.bind(this)} className="col-lg-4 col-md-6 col-sm-12 img-gal my-2">
        <img className="img img-fluid" src={photo.src} alt={`galItem${itemNum}`}/>
      </div>
    )
  }
}

export default Photo;