import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import {authenticate} from "../../public/auth";
import Image from 'next/image';
import Logo from '../../public/Logo.png';

const StyledNavbar = styled(Navbar)`
  padding: 0;
  background-color: #000000;
`;

export default function CustomNavbar(props) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  let { jungangActive, skkuActive, studyActive } = false;

  switch(router.pathname) {
    case "/center":
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
      console.log(res);
      if (res === true) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      };
    })
  }, []);

      
  return (
    <StyledNavbar collapseOnSelect expand="lg" variant="dark">
      <Container>
      <Navbar.Brand href="/"><Image src={Logo} alt="logo" width={(566.28/142)*70} height={70} margin={0} padding={0}/></Navbar.Brand>
        <Navbar.Brand href="#home"></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/center" active={jungangActive}>중앙</Nav.Link>
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