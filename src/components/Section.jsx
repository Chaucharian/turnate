import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Content = styled.div`
  height: ${({ height }) => (height ? height : `110vh`)};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : `70`)}px;

  ${({ noMedia }) =>
    noMedia
      ? ``
      : `  @media screen and (max-width: 350px) {
    height: 130vh;
  }`}
`;

const Section = ({
  id,
  height,
  noMedia,
  marginTop,
  children,
  sceneOptions,
  ...options
}) => (
  <Controller>
    <div id={id}></div>
    <Scene
      indicators={false}
      duration={500}
      triggerHook="onCenter"
      {...sceneOptions}
    >
      <Timeline position={0} playState="play">
        <Tween {...options}>
          <Content noMedia={noMedia} height={height} marginTop={marginTop}>
            {children}
          </Content>
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

export default Section;
