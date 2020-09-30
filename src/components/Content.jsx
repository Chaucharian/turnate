import React from "react";
import styled from "styled-components";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Timeline } from "react-gsap";
import Title from "./Title";
import Image from "./Image";

const ParallaxStyled = styled.div`
  .section {
    height: 110vh;
  }
  .parallax {
    height: 100vh;
    position: absolute;
    overflow: hidden;
    img {
      width: 100%;
      height: auto;
      position: absolute;
    }
    h2 {
      position: absolute;
      left: 200px;
      text-shadow: 2px 8px 6px rgba(0, 0, 0, 0.2),
        0px -5px 35px rgba(255, 255, 255, 0.3);
    }
  }
`;

const Parallax = () => (
  <ParallaxStyled>
    <Controller>
      <Scene indicators={false} duration="200%" triggerHook="onEnter">
        <Timeline wrapper={<div className="parallax" />}>
          <div className="section">
            <Title
              position="0"
              from={{
                top: "50%",
                scale: 0,
              }}
              to={{
                top: "50%",
                scale: 1.5,
                autoAlpha: 0.05,
                left: 300,
                ease: "Linear.easeNone",
              }}
            >
              Todos tus clientes en un solo lugar
            </Title>
          </div>
          <Image src="/iphone.png" width="200px" height="400px" />
          {/* <Tween
            position="0"
            from={{
              yPercent: -50,
            }}
            to={{
              yPercent: 0,
            }}
          >
            <img src="https://placeimg.com/1000/1000/nature" alt="" />
          </Tween>
          <Tween
            position="0"
            from={{
              top: "0%",
              scale: 1,
            }}
            to={{
              top: "90%",
              scale: 4,
            }}
          >
            <h2>Traemos lo mejor pa vo!</h2>
          </Tween> */}
        </Timeline>
      </Scene>
      <div className="section"></div>
      <div className="section"></div>
    </Controller>
  </ParallaxStyled>
);

export default Parallax;
