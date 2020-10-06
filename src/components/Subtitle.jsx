import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { Typography as MaterialTypography } from "@material-ui/core";
import TransitionMounted from "./TransitionMounted";

const Typography = styled(MaterialTypography)`
  position: relative;
  font-size: 40px;
  font-weight: ${({ fontWeight }) => (fontWeight ? fontWeight : `600`)};
  font-family: Raleway;
  color: ${({ color }) => (color ? color : `white`)};

  @media screen and (max-width: 479px) {
    font-size: 30px;
  }
`;

const Subtitle = ({ color, boxOptions, children, fontOptions, ...options }) => (
  <TransitionMounted {...boxOptions}>
    <Tween {...options}>
      <Typography color={color} variant={"subtitle1"} {...fontOptions}>
        {children}
      </Typography>
    </Tween>
  </TransitionMounted>
);

export default Subtitle;
