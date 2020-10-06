import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { Typography as MaterialTypography } from "@material-ui/core";
import TransitionMounted from "./TransitionMounted";

const Typography = styled(MaterialTypography)`
  position: relative;
  font-size: 30px;
  font-weight: 400;
  font-family: Raleway;
  color: ${({ color }) => (color ? color : `white`)};

  @media screen and (max-width: 479px) {
    font-size: 20px;
  }
`;

const Subtitle2 = ({ color, boxOptions, children, ...options }) => (
  <TransitionMounted {...boxOptions}>
    <Tween {...options}>
      <Typography color={color} variant={"body1"}>
        {children}
      </Typography>
    </Tween>
  </TransitionMounted>
);

export default Subtitle2;
