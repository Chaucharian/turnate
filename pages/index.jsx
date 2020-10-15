import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import {
  Section,
  Title,
  Subtitle2,
  Box,
  SvgArrow,
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

const VideoContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 20px;
  video {
    width: 100%;
    max-width: 400px;
    height: 500px;
  }
`;

const AlignText = styled.div`
  text-align: center;
  width: 100%;
`;

export default function Index() {
  return (
    <Parallax>
      <Header />
      <Section noMedia={true} height="130vh">
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
              <Subtitle2>Sistema de turnos online</Subtitle2>
            </AlignText>
            <AlignText>
              <Title>Todo en un solo lugar</Title>
              <Subtitle2>
                tus clientes, tus ganancias, incluso tus promociones
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
        <AlignText>
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
            ellos mismos programan sus turnos, sin descargar una App.
          </Subtitle2>
        </AlignText>

        <Image
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
          src="/turnos.png"
        />
      </Section>
      <Section id="steps">
        <AlignText>
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
        </AlignText>

        <Image
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
          src="/reservar.png"
        />
      </Section>
      <Section>
        <AlignText>
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
        </AlignText>

        <Image
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
          src="/1.png"
        />
      </Section>
      <Section>
        <AlignText>
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
        </AlignText>

        <Image
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
          src="/2.png"
        />
      </Section>
      <Section>
        <AlignText>
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
        </AlignText>
        <Image
          from={{
            opacity: 0,
          }}
          to={{
            opacity: 1,
          }}
          ease="Power1.in"
          src="/3.png"
        />
      </Section>
      <Section id="demo">
        <AlignText>
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
            Y así de fácil
          </Title>
        </AlignText>
        <VideoContainer>
          <video controls autoPlay loop>
            <source src="/demo.mp4" type="video/mp4" />
            Sorry, your browser doesn't support embedded videos.
          </video>
        </VideoContainer>
      </Section>
      <PricesSection id="prices" />
      <Section id="contact" sceneOptions={{ triggerHook: "onEnter" }}>
        <AlignText>
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
        </AlignText>

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
