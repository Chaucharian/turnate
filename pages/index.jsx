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
  Image,
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
        <Link
          activeClass="active"
          to="first"
          spy={true}
          smooth={true}
          duration={1000}
        >
          <ChildrenSlider>
            <AlignText>
              <Image
                alt="Sistema de turnos web"
                width="100%"
                height="100%"
                src="/center_logo.png"
              />
              <Subtitle2>Sistema de turnos 100% web e intuitivo</Subtitle2>
            </AlignText>
            <AlignText>
              <Title>Todo en un solo lugar</Title>
              <Subtitle2>
                Tus clientes, tus ganancias, incluso tus promociones
              </Subtitle2>
              <Image
                alt="Programa tus horarios con un click"
                src="/viewer.png"
              />
            </AlignText>
            <AlignText>
              <Title>Programa tus horarios con un click</Title>
              <Subtitle2>y deja que el sistema se encargue de todo</Subtitle2>
              <Image
                alt="Programa tus horarios con un click"
                src="/schedule.png"
              />
            </AlignText>
            <AlignText>
              <Title>Envía notificaciones </Title>
              <Subtitle2>avisos de turnos y descuentos</Subtitle2>
              <Image alt="¡Envia notificaciones!" src="/notification.png" />
            </AlignText>
            <AlignText>
              <Title>No pierdas tiempo dando turnos</Title>
              <Subtitle2>concentrate en tu negocio</Subtitle2>
            </AlignText>
          </ChildrenSlider>
          <SvgArrow width="80px" height="80px" />
        </Link>
      </Section>
      <Section
        id="first"
        sceneOptions={{ triggerHook: "onEnter" }}
        height={`115vh`}
      >
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
        <Image
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
        <Image
          from={{
            opacity: 0,
            left: "50%",
          }}
          to={{
            opacity: 1,
            left: "0%",
          }}
          ease="Power1.in"
          src="/reservar.png"
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
        <Image
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
        <Image
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
        <Image
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
