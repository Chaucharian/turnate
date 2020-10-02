import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Content = styled.div`
  height: ${({ height }) => (height ? height : `110`)}vh;
  margin-top: 70px;
`;

const Section = ({ height, children, ...options }) => (
  <Controller>
    <Scene indicators={false} duration="100%" triggerHook="onCenter">
      <Timeline position={0} playState="play">
        <Tween {...options}>
          <Content height={height}>{children}</Content>
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

export default Section;
