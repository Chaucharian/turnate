import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import TransitionMounted from "./TransitionMounted";

const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const Container2 = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  width: 360px;
  height: 100%;
`;

const MobileBackground = styled.img`
  position: absolute;
  top: 10%;
  width: 260px;
  height: auto;
  left: 10%;
  @media screen and (min-width: 360px) {
    left: 13%;
  }
  //   ${({ width }) => (width ? `width: ${width} ;` : ``)}
  //   ${({ height }) => (height ? `height: ${height} ;` : ``)}
`;

const Img = styled.img`
  position: absolute;
  width: 360px;
  height: auto;
  //   ${({ width }) => (width ? `width: ${width} ;` : ``)}
  //   ${({ height }) => (height ? `height: ${height} ;` : ``)}
`;

const Mobile = ({ src, alt, width, height, ...options }) => (
  <TransitionMounted time={5}>
    <Tween {...options}>
      <Container>
        <Container2>
          <MobileBackground src={src} width={width} height={height} />
          <Img src="/iphone.png" alt={alt} width={width} height={height} />
        </Container2>
      </Container>
    </Tween>
  </TransitionMounted>
);

export default Mobile;
