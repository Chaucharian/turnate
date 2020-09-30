import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";

const Image = ({ src, width, height, ...options }) => (
  <Tween {...options}>
    <img src={src} width={width} height={height} />
  </Tween>
);

export default Image;
