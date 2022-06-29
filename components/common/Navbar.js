import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {authenticate} from "../../public/auth";

const StyledNavbar = styled(Navbar)`
  padding: 15px 0;
`;

export default function CustomNavbar(props) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let { jungangActive, skkuActive, studyActive } = false;

  switch(router.pathname) {
    case "/":
      jungangActive = true;
      break;
    case "/skku":
      skkuActive = true;
      break;
    case "/study":
      studyActive = true;
      break;
    default:
      break;
  };

  useEffect(()=>{
    authenticate().then((res)=>{
      if (res === true) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      };
    })
  }, []);

      
  return (
    <StyledNavbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">{props.name}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/" active={jungangActive}>중앙</Nav.Link>
            <Nav.Link href="/skku" active={skkuActive}>성대</Nav.Link>
            <Nav.Link href="/study" active={studyActive}>스터디</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated? <Nav.Link href="/admin">Admin</Nav.Link>: <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}
