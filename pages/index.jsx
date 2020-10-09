import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import {
  Section,
  Title,
  Subtitle2,
  Box,
  SvgArrow,
  Mobile,
  ChildrenSlider,
  Contact,
  PricesSection,
  Header,
} from "src/components";
import { Link } from "react-scroll";

const Parallax = styled(Container)`
  overflow: hidden;
`;

const AlignText = styled.div`
  text-align: center;
  width: 100%;
`;

export default function Index() {
  return (
    <Parallax>
      <Header />
      <Section>
        <ChildrenSlider>
          <AlignText>
            <Title>Todo en un solo lugar</Title>
            <Subtitle2>
              Tus clientes, tus ganancias, incluso tus promociones
            </Subtitle2>
          </AlignText>
          <AlignText>
            <Title>Envía notificaciones </Title>
            <Subtitle2>avisos de turnos y descuentos</Subtitle2>
          </AlignText>
          <AlignText>
            <Title>No pierdas tiempo dando turnos</Title>
          </AlignText>
        </ChildrenSlider>
        <Mobile
          from={{
            left: 0,
            opacity: 1,
          }}
          to={{
            left: "0%",
            opacity: 1,
          }}
          ease="Power1.in"
          src="/login.png"
        />
        <Link
          activeClass="active"
          to="first"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <SvgArrow
            from={{
              opacity: 1,
            }}
            to={{
              opacity: 0,
            }}
            ease="Power1.in"
            width="80px"
            height="80px"
          />
        </Link>
      </Section>
      <Section id="first" height={`115vh`}>
        <Title
          boxOptions={{
            heightAuto: true,
          }}
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
        >
          Tus clientes eligen
        </Title>
        <Subtitle2
          boxOptions={{
            heightAuto: true,
            padding: "10px 0px 0px 0px",
          }}
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
        >
          Ellos mismos programan sus turnos, sin descargar una App.
        </Subtitle2>
        <Mobile
          from={{
            opacity: 0,
            left: "-15%",
          }}
          to={{
            left: "0%",
            opacity: 1,
          }}
          ease="Power1.in"
          src="/turnos.png"
        />
      </Section>
      <Section id="steps">
        <Title
          boxOptions={{
            heightAuto: true,
          }}
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
        >
          En 3 simples pasos
        </Title>
        <Mobile
          from={{
            opacity: 0,
            left: "50%",
          }}
          to={{
            opacity: 1,
            left: "0%",
          }}
          ease="Power1.in"
          src="/barber.png"
        />
      </Section>
      <Section>
        <Title
          boxOptions={{
            heightAuto: true,
          }}
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
        >
          1. Elegí el servicio
        </Title>
        <Mobile
          from={{
            opacity: 0,
            left: "-15%",
          }}
          to={{
            opacity: 1,
            left: "0%",
          }}
          ease="Power1.in"
          src="/1.png"
        />
      </Section>
      <Section>
        <Title
          boxOptions={{
            heightAuto: true,
          }}
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
        >
          2. Seleccioná día y horario
        </Title>
        <Mobile
          from={{
            opacity: 0,
            left: "50%",
          }}
          to={{
            opacity: 1,
            left: "0%",
          }}
          ease="Power1.in"
          src="/2.png"
        />
      </Section>
      <Section>
        <div id="section1"></div>
        <Title
          boxOptions={{
            heightAuto: true,
          }}
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
        >
          3. Confirmá
        </Title>
        <Mobile
          from={{
            opacity: 0,
            left: "-15%",
          }}
          to={{
            opacity: 1,
            left: "0%",
          }}
          ease="Power1.in"
          src="/3.png"
        />
      </Section>
      <PricesSection id="prices" />
      <Section id="contact" sceneOptions={{ triggerHook: "onEnter" }}>
        <Title
          boxOptions={{
            heightAuto: true,
          }}
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
        >
          Contacto
        </Title>
        <Box
          shadow={false}
          padding={25}
          height="auto"
          from={{
            top: "20%",
            opacity: 0,
          }}
          to={{
            top: "5%",
            opacity: 1,
          }}
          ease="Power1.in"
        >
          <Contact />
        </Box>
      </Section>
    </Parallax>
  );
}
