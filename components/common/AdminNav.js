import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";

const StyledNavbar = styled(Navbar)`
  padding: 15px 0;
`;

export default function AdminNavbar(props) {
  const router = useRouter();
  let { mainActive, createActive, editActive } = false;

  switch(router.pathname) {
    case "/admin":
      mainActive = true;
      break;
    case "/admin/create":
      createActive = true;
      break;
    case "/admin/edit":
      editActive = true;
      break;
    default:
      break;
  }

      
  return (
    <StyledNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/admin" active={mainActive}>Dashboard</Nav.Link>
            <Nav.Link href="/admin/edit" active={editActive}>Edit</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}
