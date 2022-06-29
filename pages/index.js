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
      <h1>멋사 공지를 한 눈에!</h1>
      <Carousel>
        <Carousel.Item>
          <Image src={Likelion} alt="center"/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src={SKKU} alt="skku"/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
        <Image src={Bgimg} alt="study"/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
}

export default UncontrolledExample;