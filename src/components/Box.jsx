import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import TransitionMounted from "./TransitionMounted";

const Container = styled.div`
  ${({ color, width, height }) => `
    position: relative;
    display: flex;
    justify-content: center;
    padding: 10px;
    width: ${width ? width : `100%`};
    height: ${height ? height : `100%`};
    border-radius: 25px;
    box-shadow: 0px 0px 10px rgb(255 255 255 / 20%);
    background-color: black;
`}
`;

const Box = ({ color, width, height, children, ...options }) => (
  <TransitionMounted time={5}>
    <Tween {...options}>
      <Container color={color} width={width} height={height}>
        {children}
      </Container>
    </Tween>
  </TransitionMounted>
);

export default Box;
