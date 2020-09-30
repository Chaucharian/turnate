import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { Typography as MaterialTypography } from "@material-ui/core";

const Typography = styled(MaterialTypography)`
  position: relative;
  font-size: 25px;
  font-weight: 400;
  font-family: Raleway;
  color: ${props.color ? props.color : `white`};
  @media screen and (max-width: 479px) {
    font-size: 15px;
  }
`;

const Subtitle = ({ color, children, ...options }) => (
  <Tween {...options}>
    <Typography color={color} variant={"p"}>
      {children}
    </Typography>
  </Tween>
);

export default Subtitle;
