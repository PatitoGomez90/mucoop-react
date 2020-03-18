import React from "react";
import "pure-react-carousel/dist/react-carousel.es.css";
import { CarouselProvider, Image, Slide, Slider } from "pure-react-carousel";

import styled from "styled-components";

const Img = styled(Image).attrs(props => ({
  src: props.imgSrc
}))`
  width: 350px;
  height: 160px;
`;

const Caption = styled.div`
  width: 350px;
  height: 230px;
  position: absolute;
  margin: auto;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 2000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ImageCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1}
    naturalSlideHeight={0.44}
    totalSlides={3}
    isPlaying={true}
    interval={3500}
    playDirection="forward"
  >
    <Slider style={{ position: "relative" }}>
      <Slide tag="a" index={0}>
        <Image src="/images/slider1.png" />
        <Caption>
          <h1
            style={{
              color: "white",
              textShadow: "3px 3px 0px rgba(0,0,0,0.7)",
              textAlign: "center"
            }}
          >
            Bienvenidos a Mucoop
          </h1>
          <Img imgSrc="/images/logo.png" />
        </Caption>
      </Slide>
      <Slide tag="a" index={1}>
        <Image src="http://cdn.20m.es/img2/recortes/2016/08/16/329033-944-626.jpg?v=20160927195310" />
        <Caption>
          <h1
            style={{
              color: "white",
              textShadow: "3px 3px 0px rgba(0,0,0,0.7)",
              textAlign: "center"
            }}
          >
            Bienvenidos a Mucoop
          </h1>
          <Img imgSrc="/images/logo.png" />
        </Caption>
      </Slide>
      <Slide tag="a" index={2}>
        <Image src="/images/slider3.jpg" />
        <Caption>
          <h1
            style={{
              color: "white",
              textShadow: "3px 3px 0px rgba(0,0,0,0.7)",
              textAlign: "center"
            }}
          >
            Bienvenidos a Mucoop
          </h1>
          <Img imgSrc="/images/logo.png" />
        </Caption>
      </Slide>
    </Slider>
  </CarouselProvider>
);

export default ImageCarousel;
