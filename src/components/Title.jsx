import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";
import { Typography as MaterialTypography } from "@material-ui/core";
import { useMounted } from "src/hooks";

const Typography = styled(MaterialTypography)`
  position: relative;
  font-size: 68px;
  font-weight: 800;
  font-family: Raleway;
  color: ${({ color }) => (color ? color : `white`)};
  opacity: 0;
  -webkit-transition: opacity 2s ease-in-out;
  -moz-transition: opacity 2s ease-in-out;
  -ms-transition: opacity 2s ease-in-out;
  -o-transition: opacity 2s ease-in-out;
  transition: opacity 2s ease-in-out;
  ${({ transition }) => (transition ? `opacity: 1;` : ``)}
  @media screen and (max-width: 479px) {
    font-size: 50px;
  }
`;

const Title = ({ children, ...options }) => {
  const mounted = useMounted();
  return (
    <Tween {...options}>
      <Typography transition={mounted} variant={"h1"}>
        {children}
      </Typography>
    </Tween>
  );
};

export default Title;
