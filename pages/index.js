/* eslint-disable react-hooks/exhaustive-deps */
import 'bootstrap/dist/css/bootstrap.min.css';
import CustomNavbar from '../components/common/Navbar'
import styled from '@emotion/styled';
import Image from 'next/image';
import Likelion from '../public/likelionuniv.png';
import SKKU from '../public/skku.jpg';
import Bgimg from '../public/bgimg1.jpg';

import Carousel from 'react-bootstrap/Carousel';

function UncontrolledExample() {
  return (
    <>
      <CustomNavbar name="Likelion SKKU Notice"/>
      <Box>
        <h1>멋사 공지를 한 눈에!</h1>
        <h4>여러가지 공지를 모두 확인하세요.</h4>
        <br></br>
        <br></br>
        <SizedCarousel>
          <Carousel>
            <Carousel.Item>
              <Image src={Likelion} alt="center"/>
              <Carousel.Caption>
                <h3>중앙 공지</h3>
                <p>중앙 공지 내용</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={SKKU} alt="skku"/>
              <Carousel.Caption>
                <h3>성대 공지</h3>
                <p>성대 공지 내용</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <Image src={Bgimg} alt="study"/>
              <Carousel.Caption>
                <h3>스터디 공지</h3>
                <p>스터디 공지 내용</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </SizedCarousel>
      
      </Box>
    </>
  );
}

const Box = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-top: 100px;`

const SizedCarousel = styled.div`
  width: 500px;
  height: 200px;
  `

export default UncontrolledExample;