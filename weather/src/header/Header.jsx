import React from 'react';
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';

const GithubForm = props => {
  return (
    <Navbar color="light" light expand="md">
      <NavbarBrand href="/">{props.children}</NavbarBrand>
      <Nav className="ml-auto" navbar>
        <NavItem>
          <NavLink href="/github">Github</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/weather">Weather</NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default GithubForm;
