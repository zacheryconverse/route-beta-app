import React, { Component } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
} from 'reactstrap';

class NavBar extends Component {
    state = {
      isOpen: false
    }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <NavBar
          color="dark"
          dark
          expand="sm"
          className="mb=5"
        >
          <Container>
            <NavbarBrand href="/">Route Beta</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <NavLink href="http://github.com/zacheryconverse">
                    Github
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </Container>
        </NavBar>
      </div>
    );
  }
}

export default NavBar;
