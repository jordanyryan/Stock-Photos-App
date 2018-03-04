import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import * as actions from '../../actions';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter,NavLink } from 'reactstrap';

class SignIn extends Component {

  toggle() {
    this.props.toggleModal({isOpen: this.props.modal.isOpen, curModal: "signin"});    
  }

  renderField(field) {
    const {touched, error} = field.meta;
    const className=`form-group ${touched && error ? 'has-danger' : ''}`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <input
          className="form-control"
          type={field.type}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ""}
        </div>
      </div>
    )
  }

  renderAlert() {
    if (this.props.error) {
      return (
        <div className="alert alert-danger">
          <strong>Oops!</strong> {this.props.error}
        </div>
      );
    }
  }

  handleFormSubmit({email, password}) {
    this.props.signinUser({email, password}, () => {
      this.props.toggleModal({isOpen: this.props.modal.isOpen, curModal: "signin"})
      this.props.history.push('/');
    });
  }



  render() {
    const {handleSubmit} = this.props;
    return (
      <div>
        <NavLink href="#" onClick={this.toggle.bind(this)}>Sign In</NavLink>
        <Modal isOpen={this.props.modal.isOpen && this.props.modal.curModal === "signin"} toggle={this.toggle.bind(this)} >
          <ModalHeader toggle={this.toggle.bind(this)}>Sign In</ModalHeader>
          <ModalBody>
            <form onSubmit={handleSubmit(this.handleFormSubmit.bind(this))}>
              <Field
                label="Email:"
                name="email"
                type="text"
                component={this.renderField}
              />
              <Field
                label="Password:"
                name="password"
                component={this.renderField}
                type="password"
              />
              {this.renderAlert()}
              <Button color="primary" type="submit">Sign In</Button>
            </form>            
          </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.toggle.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

function validate(values) {
  // values --> Values in input fields as object at time of submit
  const errors = {};

  // then validate inputs
  if (!values.email) {
    errors.email = "Enter an email!";
  }
  if (!values.password) {
    errors.password = "Enter a password!"
  }
  // if errors is empty, form is fine to submit
  // if errors has any properties, redux form assumes invalid
  return errors;
}

function mapStateToProps({auth, modal}) {
  return {error: auth.error, modal: {isOpen: modal.isOpen, curModal: modal.curModal}};
}

export default reduxForm({
  validate,
  form: 'signin'
})(
  connect(mapStateToProps, actions)(SignIn)
)


