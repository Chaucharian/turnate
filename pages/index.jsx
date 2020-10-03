import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import {
  Section,
  Title,
  Subtitle,
  Box,
  SvgArrow,
  Mobile,
  ChildrenSlider,
} from "src/components";

const Parallax = styled(Container)`
  overflow: hidden;
`;

const AlignText = styled.div`
  text-align: center;
`;

const TextContainer = styled.div`
  position: relative;
`;

export default function Index() {
  return (
    <Parallax>
      <Section>
        <ChildrenSlider>
          <AlignText>
            <Title>Todo en un solo lugar</Title>
            <Subtitle>
              Tus clientes, tus ganancias, incluso tus promociones
            </Subtitle>
          </AlignText>
          <AlignText>
            <Title>Envía notificaciones </Title>
            <Subtitle>avisos de turnos y descuentos</Subtitle>
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
      </Section>
      <Section height={115}>
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
        <Subtitle
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
        </Subtitle>
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
          En 3 simples pasos
        </Title>
        <Mobile
          from={{
            left: "-130%",
          }}
          to={{
            left: "10%",
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
            left: "130%",
          }}
          to={{
            left: "10%",
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
            left: "-130%",
          }}
          to={{
            left: "-10%",
          }}
          ease="Power1.in"
          src="/2.png"
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
          3. Confirmá
        </Title>
        <Mobile
          from={{
            left: "130%",
          }}
          to={{
            left: "10%",
          }}
          ease="Power1.in"
          src="/3.png"
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
          Si tu atencion es con turnos ¡es para vos!
        </Title>
        <Box
          from={{
            left: "-50%",
            top: "5%",
            opacity: 0,
          }}
          to={{
            top: "5%",
            left: "0%",
            opacity: 1,
          }}
          ease="Power1.in"
        >
          <Subtitle
            boxOptions={{
              heightAuto: true,
            }}
          >
            Si tu atencion es con turnos ¡es para vos!
          </Subtitle>
        </Box>
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
          Si tu atencion es con turnos ¡es para vos!
        </Title>
        <Box
          from={{
            left: "-50%",
            top: "5%",
            opacity: 0,
          }}
          to={{
            top: "5%",
            left: "0%",
            opacity: 1,
          }}
          ease="Power1.in"
        >
          <Subtitle
            boxOptions={{
              heightAuto: true,
            }}
          >
            Si tu atencion es con turnos ¡es para vos!
          </Subtitle>
        </Box>
      </Section>
    </Parallax>
  );
}
