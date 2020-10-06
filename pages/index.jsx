import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import {
  Section,
  Title,
  Subtitle,
  Subtitle2,
  Box,
  SvgArrow,
  Mobile,
  ChildrenSlider,
  WpButton,
  TextField,
} from "src/components";

const Parallax = styled(Container)`
  overflow: hidden;
`;

const AlignText = styled.div`
  text-align: center;
`;

export default function Index() {
  return (
    <Parallax>
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
      <Section height={`115vh`}>
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
            left: "130%",
          }}
          to={{
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
            left: "-130%",
          }}
          to={{
            left: "0%",
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
            left: "0%",
          }}
          ease="Power1.in"
          src="/3.png"
        />
      </Section>
      <Section
        height={"100%"}
        marginTop={`0`}
        sceneOptions={{ offset: 200, triggerHook: "onEnter" }}
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
          Precios
        </Title>
        <Box
          from={{
            // left: "-50%",
            top: "20%",
            opacity: 0,
          }}
          to={{
            top: "5%",
            // left: "0%",
            opacity: 1,
          }}
          ease="Power1.in"
        >
          <AlignText>
            <Subtitle
              boxOptions={{
                heightAuto: true,
              }}
            >
              Basico
            </Subtitle>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Clientes ilimitados
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              <b>100</b> turnos por mes
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Sitio web <b>.com</b>
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Notificación automatica un dia antes y una hora antes del turno
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Enviar notificaciones personalizadas a todos tus clientes.
              (Ofertas, promociones, descuentos)
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Visualizacion de metricas mensuales
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Galeria de imagenes
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Personaliza los colores del sitio
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Visualizacion de turnos reservados
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Programacion de dias de descanso y franja horaria
            </Subtitle2>
          </AlignText>
        </Box>
      </Section>
      <Section
        height={"100%"}
        marginTop={`0`}
        sceneOptions={{ triggerHook: "onEnter" }}
      >
        <Box
          from={{
            // left: "-50%",
            top: "20%",
            opacity: 0,
          }}
          to={{
            top: "5%",
            // left: "0%",
            opacity: 1,
          }}
          ease="Power1.in"
        >
          <AlignText>
            <Subtitle
              boxOptions={{
                heightAuto: true,
              }}
            >
              Pro
            </Subtitle>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Clientes ilimitados
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              <b>300</b> turnos por mes
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Sitio web <b>.com</b>
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Notificación automatica un dia antes y una hora antes del turno
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Enviar notificaciones personalizadas a todos tus clientes.
              (Ofertas, promociones, descuentos)
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Visualizacion de metricas mensuales
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Galeria de imagenes
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Visualizacion de turnos reservados
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Programacion de dias de descanso y franja horaria
            </Subtitle2>
          </AlignText>
        </Box>
      </Section>
      <Section
        marginTop={`0`}
        height={"100%"}
        sceneOptions={{ triggerHook: "onEnter" }}
      >
        <Box
          from={{
            // left: "-50%",
            top: "20%",
            opacity: 0,
          }}
          to={{
            top: "5%",
            // left: "0%",
            opacity: 1,
          }}
          ease="Power1.in"
        >
          <AlignText>
            <Subtitle
              boxOptions={{
                heightAuto: true,
              }}
            >
              Premium
            </Subtitle>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Clientes ilimitados
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              <b>Ilimitados</b> turnos por mes
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Sitio web <b>.com</b>
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Notificación automatica un dia antes y una hora antes del turno
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Enviar notificaciones personalizadas a todos tus clientes.
              (Ofertas, promociones, descuentos)
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Visualizacion de metricas mensuales
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Galeria de imagenes
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Personaliza los colores del sitio
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Visualizacion de turnos reservados
            </Subtitle2>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Programacion de dias de descanso y franja horaria
            </Subtitle2>
          </AlignText>
        </Box>
      </Section>
    </Parallax>
  );
}
