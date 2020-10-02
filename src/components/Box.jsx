import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import TransitionMounted from "./TransitionMounted";

const Container = styled.div`
  ${({ color }) => `
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: ${color ? color : `white`};
`}
`;

const Box = ({ color, width, height, children, ...options }) => (
  <TransitionMounted time={5}>
    <Tween {...options}>
      <Container color={color}>{children}</Container>
    </Tween>
  </TransitionMounted>
);

export default Box;
