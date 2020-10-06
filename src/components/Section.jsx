import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Content = styled.div`
  height: ${({ height }) => (height ? height : `110vh`)};
  margin-top: ${({ marginTop }) => (marginTop ? marginTop : `70`)}px;
`;

const Section = ({ height, marginTop, children, sceneOptions, ...options }) => (
  <Controller>
    <Scene
      indicators={false}
      duration={500}
      triggerHook="onCenter"
      {...sceneOptions}
    >
      <Timeline position={0} playState="play">
        <Tween {...options}>
          <Content height={height} marginTop={marginTop}>
            {children}
          </Content>
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

export default Section;
