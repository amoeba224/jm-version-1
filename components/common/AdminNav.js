import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";
import { useState } from "react";
import { useRouter } from "next/router";
import {logout} from "../../public/auth";

const StyledNavbar = styled(Navbar)`
  padding: 15px 0;
`;

export default function AdminNavbar(props) {
  const router = useRouter();
  let { mainActive, createActive, editActive } = false;

  const handleLogout = (e) => {
    e.preventDefault();
    logout().then(()=>{
      alert("로그아웃되었습니다.");
      router.push("/");
    }).catch((err)=>alert("유효하지 않은 요청입니다."));
  }

  switch(router.pathname) {
    case "/eventHorizon":
      mainActive = true;
      break;
    case "/eventHorizon/create":
      createActive = true;
      break;
    case "/eventHorizon/edit":
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
            <Nav.Link href="/eventHorizon" active={mainActive}>Dashboard</Nav.Link>
            <Nav.Link href="/eventHorizon/edit" active={editActive}>Edit</Nav.Link>
            <Nav.Link href="/eventHorizon/category" active={editActive}>Category</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}
