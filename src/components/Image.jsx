import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";

const Img = styled.img`
  position: relative;
  width: 100%;
  height: auto;
`;

const Image = ({ src, width, height, ...options }) => (
  <Tween {...options}>
    <Img src={src} width={width} height={height} />
  </Tween>
);

export default Image;
