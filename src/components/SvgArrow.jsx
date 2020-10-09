import React from "react";
import styled from "styled-components";
import { Tween } from "react-gsap";

const SvgContainer = styled.div`
  position: absolute;
  left: 40%;
  bottom: 0%;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    left: 46.5%;
  }
`;

const SvgAnimation = styled.div`
  position: relative;
  animation-duration: 3s;
  animation-name: slidein;
  animation-iteration-count: infinite;

  @keyframes slidein {
    from {
      opacity: 1;
    }

    to {
      opacity: 0;
    }
  }
`;

const Svg = styled.svg`
  fill: white;
`;

const SvgTween = ({ src, width, height, ...options }) => (
  <Tween {...options}>
    <SvgContainer width={width}>
      <SvgAnimation>
        <Svg
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          width={width ? width : "960px"}
          height={height ? height : "560px"}
          viewBox="0 0 960 560"
          enable-background="new 0 0 960 560"
        >
          <g id="Rounded_Rectangle_33_copy_4_1_">
            <path
              d="M480,344.181L268.869,131.889c-15.756-15.859-41.3-15.859-57.054,0c-15.754,15.857-15.754,41.57,0,57.431l237.632,238.937
		c8.395,8.451,19.562,12.254,30.553,11.698c10.993,0.556,22.159-3.247,30.555-11.698l237.631-238.937
		c15.756-15.86,15.756-41.571,0-57.431s-41.299-15.859-57.051,0L480,344.181z"
            />
          </g>
        </Svg>
      </SvgAnimation>
    </SvgContainer>
  </Tween>
);

export default SvgTween;
