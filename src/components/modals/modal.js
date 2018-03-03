import React, {Component} from 'react';
import {connect} from 'react-redux';

class Modal extends Component {
  render() {
    if(this.props.isOpen === false) return null;

    return (
      <div>
        
      </div>
    )
  }
}

function mapStateToProps({isOpen}) {
  return {isOpen};
}

export default connect(mapStateToProps)(Modal)