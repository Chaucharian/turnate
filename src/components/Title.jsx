import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { Typography as MaterialTypography } from "@material-ui/core";

const Typography = styled(MaterialTypography)`
  position: relative;
  font-size: 68px;
  font-weight: 800;
  font-family: Raleway;

  color: ${({ color }) => (color ? color : `white`)};
  @media screen and (max-width: 479px) {
    font-size: 50px;
  }
`;

const Title = ({ children, ...options }) => (
  <Tween {...options}>
    <Typography variant={"h1"}>{children}</Typography>
  </Tween>
);

export default Title;
