import React, { Component } from "react";
import {
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
  NavDropdown
} from "react-bootstrap";

export class Header extends Component {
  render() {
    return (
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">Django React</Navbar.Brand>
        <Nav className="mr-auto">
          <Nav.Link href="#home">Link</Nav.Link>
          <Nav.Link href="#features">Some Link</Nav.Link>
          <Nav.Link href="#pricing">Some Other Link</Nav.Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Button variant="outline-info">Search</Button>
        </Form>
      </Navbar>
    );
  }
}

export default Header;
