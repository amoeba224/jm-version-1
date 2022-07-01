/* eslint-disable react-hooks/exhaustive-deps */
import "bootstrap/dist/css/bootstrap.min.css";
import CustomNavbar from "../components/common/Navbar";
import styled from "@emotion/styled";
import Image from "next/image";
import Likelion from "../public/likelionuniv.png";
import SKKU from "../public/skku.jpg";
import Bgimg from "../public/bgimg1.jpg";
import StyledFooter from "../components/common/Footer";
import Carousel from "react-bootstrap/Carousel";
import Link from "next/link";

function UncontrolledExample() {
  return (
    <StyledBody>
      <CustomNavbar name="Likelion SKKU Notice" />
      <Box>
        <h1>멋사 공지 한눈에!</h1>
        <h4>여러가지 공지를 모두 확인하세요.</h4>
        <p></p>
        <SizedCarousel>
          <Carousel>
            <Carousel.Item>
              <Link href="/center">
                <StyledImage src={Likelion} alt="center" />
              </Link>
              <Carousel.Caption>
                <Styledh3>중앙 공지</Styledh3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link href="/skku">
                <StyledImage src={SKKU} alt="skku" />
              </Link>
              <Carousel.Caption>
                <Styledh3>성대 공지</Styledh3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <Link href="/study">
                <StyledImage src={Bgimg} alt="study" />
              </Link>
              <Carousel.Caption>
                <Styledh3>스터디 공지</Styledh3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </SizedCarousel>
        <StyledFooter></StyledFooter>
      </Box>
    </StyledBody>
  );
}

const StyledBody = styled.div`
  display:flex; 
  flex-direction:column; 
  height: 100vh;
`

const Box = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
`;

const SizedCarousel = styled.div`
  width: 300px;
  height: 380px;
`;
const StyledImage = styled(Image)`
  border-radius: 25px;
  cursor: pointer;
`;

const Styledh3 = styled.h5`
  background-color: #ff9e1b;
  width: auto;
  border-radius: 20px;
  color: black;
  width: 120px;
  margin-left: 45px;
`;

export default UncontrolledExample;
