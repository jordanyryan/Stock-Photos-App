import React, {Component} from 'react';

class SignIn extends Component {
  constructor(props) {
    super(props);

    this.state = {isOpen: false}
  }

  openModal() {
    this.setState({isOpen: true});
  }

  closeModal() {
    this.setState({isOpen: false});
  }

  render() {
    return(
      <div>Modal</div>
    )
  }
}

export default Modal;