import { Navbar, Container, Nav } from "react-bootstrap";
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
  const [imgWidth, setImgWidth] = useState((566.28/142)*70);
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
      if (res === true) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      };
    });
    if (
      navigator.userAgent.toLowerCase().indexOf("android") > 0 ||
      navigator.userAgent.toLowerCase().indexOf("ios") > 0 ||
      navigator.userAgent.toLowerCase().indexOf("iphone") > 0
    ) {
      setImgWidth(230);
    }
  }, []);

      
  return (
    <StyledNavbar collapseOnSelect expand="lg" variant="dark" >
      <Container>
      <Navbar.Brand href="/"><Image  src={Logo} alt="logo" width={imgWidth} height={70} margin={0} padding={0}/></Navbar.Brand>
        <Navbar.Brand id="likelionImg" href="#home"></Navbar.Brand>
        <Navbar.Toggle id="likelionToggle" aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/center" active={jungangActive}>중앙</Nav.Link>
            <Nav.Link href="/skku" active={skkuActive}>성대</Nav.Link>
            <Nav.Link href="/study" active={studyActive}>스터디</Nav.Link>
          </Nav>
          <Nav>
            {isAuthenticated? <Nav.Link href="/likegorilla">Admin</Nav.Link>: <Nav.Link href="/login">Login</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </StyledNavbar>
  );
}