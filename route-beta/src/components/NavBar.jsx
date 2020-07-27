import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';

const NavBar = () => (
  <div>
    <Navbar color="dark" dark expand="sm" className="mb=5">
      <NavbarBrand href="/">Route Beta</NavbarBrand>
    </Navbar>
  </div>
);

export default NavBar;
