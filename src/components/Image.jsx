import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import TransitionMounted from "./TransitionMounted";

const Container = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 30px;
`;

const Image = ({ src, alt, width = 260, height, ...options }) => (
  <TransitionMounted time={5}>
    <Tween {...options}>
      <Container>
        <img alt={alt} src={src} width={width} height={height} />
      </Container>
    </Tween>
  </TransitionMounted>
);

export default Image;
