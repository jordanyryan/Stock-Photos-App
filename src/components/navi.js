import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as actions from  '../actions';
import SignIn from './modals/signin';
import SignUp from './modals/signup';
import {Link} from 'react-router-dom';
  

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';


class Navi extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  renderLinks() {
    if (!this.props.authenticated) {
      return (
        <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="#">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <SignIn history={this.props.history}/>
          </NavItem>
          <NavItem>
            <SignUp history={this.props.history}/>
          </NavItem>
        </Nav>
      )
    } else {
      return (
      <Nav className="ml-auto" navbar>
          <NavItem>
              <NavLink href="#">About Us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Contact Us</NavLink>
          </NavItem>
          <NavItem>
            <Link to="/users" className="nav-link">Profile</Link>
          </NavItem>
          <NavItem>
            <NavLink href="#" onClick={this.props.signoutUser}>Sign Out</NavLink>
          </NavItem>
        </Nav>
      )
    }
  }


  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="dark" dark expand="sm">
        <NavbarBrand className="text-white" href="/">JD-Photos</NavbarBrand>
        <NavbarToggler onClick={this.toggle}/>
        <Collapse className="text-white" isOpen={this.state.isOpen} navbar>
          {this.renderLinks()}
        </Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps({auth}) {
  return {authenticated: auth.authenticated};
}

export default connect(mapStateToProps, actions)(Navi);