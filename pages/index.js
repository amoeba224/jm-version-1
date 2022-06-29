/* eslint-disable react-hooks/exhaustive-deps */
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/common/Navbar'
import styled from '@emotion/styled';
import Image from 'next/image';
import Likelion from '../public/likelionuniv.png';
import SKKU from '../public/skku.jpg';
import Bgimg from '../public/bgimg1.jpg';
import StyledFooter from '../components/common/Footer';
import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice"/>
      <Box>
        <h1>멋사 공지 한눈에!</h1>
        <h4>여러가지 공지를 모두 확인하세요.</h4>
        <p></p>
        <SizedCarousel>
          <Carousel>
            <Carousel.Item>
              <Image src={Likelion} alt="center"/>
              <Carousel.Caption>
                <h3>중앙 공지</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={SKKU} alt="skku"/>
              <Carousel.Caption>
                <h3>성대 공지</h3>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={Bgimg} alt="study"/>
              <Carousel.Caption>
                <h3>스터디 공지</h3>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </SizedCarousel>
        <StyledFooter></StyledFooter>
      </Box>
    </>
  );
}

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 70px;`

const SizedCarousel = styled.div`
  width: 300px;
  height: 380px;
  `


export default UncontrolledExample;