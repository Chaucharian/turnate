import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";

const Content = styled.div`
  height: 110vh;
  margin-top: 70px;
`;

const Section = ({ children, ...options }) => (
  <Controller>
    <Scene indicators={false} duration="100%" triggerHook="onCenter">
      <Timeline position={0} playState="play">
        <Tween {...options}>
          <Content>{children}</Content>
        </Tween>
      </Timeline>
    </Scene>
  </Controller>
);

export default Section;
