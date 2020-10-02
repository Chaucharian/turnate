import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import {
  Section,
  Title,
  Subtitle,
  Image,
  SvgArrow,
  Mobile,
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
        <AlignText>
          <Title>Todo en un solo lugar</Title>
          <Subtitle>
            Tus clientes, tus ganancias, incluso tus promociones
          </Subtitle>
        </AlignText>
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
      {/* <Section>
        <Title
          from={{
            left: "-90%",
          }}
          to={{
            left: "0%",
          }}
          ease="Power1.in"
        >
          Facilitale la vida a tus clientes y a vos
        </Title>
      </Section> */}
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
          Ellos mismos programan sus turnos, en cualquier momento, en cualquier
          lugar y sin descargar una App.
        </Subtitle>
        <Mobile
          from={{
            opacity: 0,
            left: "-50%",
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
          1. Elegi el servicio
        </Title>
        <Mobile
          from={{
            left: "-130%",
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
          2. Elegi el dia y la hora
        </Title>
        <Mobile
          from={{
            left: "130%",
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
          3. Confirma
        </Title>
        <Mobile
          from={{
            left: "-130%",
          }}
          to={{
            left: "10%",
          }}
          ease="Power1.in"
          src="/3.png"
        />
      </Section>
    </Parallax>
  );
}
