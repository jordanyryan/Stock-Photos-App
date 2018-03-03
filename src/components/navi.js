import React, {Component} from 'react';
import SignIn from './modals/signin';
import SignUp from './modals/signup';


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
        </Collapse>
      </Navbar>
    )
  }
}

export default Navi;