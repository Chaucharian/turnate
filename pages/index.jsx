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
  List,
  ContactForm,
} from "src/components";
import DoneIcon from "@material-ui/icons/Done";

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
            top: "20%",
            opacity: 0,
          }}
          to={{
            top: "5%",
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
              Básico
            </Subtitle>
            <Subtitle
              boxOptions={{
                heightAuto: true,
              }}
              fontOptions={{
                fontWeight: 500,
              }}
            >
              $1990ARS /mes
            </Subtitle>
            <List>
              <ul>
                <li>Turnos por mes</li>
                <li>Cant. de clientes</li>
                <li>Sitio web .com</li>
                <li>Notificaciones automáticas</li>
                <li>Envio de notificaciones personalizadas</li>
                <li>Visualización de métricas mensuales</li>
                <li>Galería de imágenes</li>
                <li>Personalización de los colores del sitio</li>
                <li>Visualización de turnos reservados</li>
                <li>Programación de días de descanso y franja horaria</li>
                <li>Actualizaciones</li>
                <li>Integraciones</li>
              </ul>
              <ul>
                <li>100</li>
                <li>Ilimitado</li>
                <li>
                  <DoneIcon />
                </li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li></li>
              </ul>
            </List>
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
            top: "20%",
            opacity: 0,
          }}
          to={{
            top: "5%",
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
            <Subtitle
              boxOptions={{
                heightAuto: true,
              }}
              fontOptions={{
                fontWeight: 500,
              }}
            >
              $3990ARS /mes
            </Subtitle>
            <List>
              <ul>
                <li>Turnos por mes</li>
                <li>Cant. de clientes</li>
                <li>Sitio web .com</li>
                <li>Notificaciones automáticas</li>
                <li>Envio de notificaciones personalizadas</li>
                <li>Visualización de métricas mensuales</li>
                <li>Galería de imágenes</li>
                <li>Personalización de los colores del sitio</li>
                <li>Visualización de turnos reservados</li>
                <li>Programación de días de descanso y franja horaria</li>
                <li>Actualizaciones</li>
                <li>Integraciones</li>
              </ul>
              <ul>
                <li>300</li>
                <li>Ilimitado</li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li></li>
                <li></li>
                <li>
                  <DoneIcon />
                </li>
                <li></li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li></li>
              </ul>
            </List>
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
            top: "20%",
            opacity: 0,
          }}
          to={{
            top: "5%",
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
            <Subtitle
              boxOptions={{
                heightAuto: true,
              }}
              fontOptions={{
                fontWeight: 500,
              }}
            >
              $4990ARS /mes
            </Subtitle>
            <List>
              <ul>
                <li>Turnos por mes</li>
                <li>Cant. de clientes</li>
                <li>Sitio web .com</li>
                <li>Notificaciones automáticas</li>
                <li>Envio de notificaciones personalizadas</li>
                <li>Visualización de métricas mensuales</li>
                <li>Galería de imágenes</li>
                <li>Personalización de los colores del sitio</li>
                <li>Visualización de turnos reservados</li>
                <li>Programación de días de descanso y franja horaria</li>
                <li>Actualizaciones</li>
                <li>Integraciones</li>
              </ul>
              <ul>
                <li>Ilimitado</li>
                <li>Ilimitado</li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
                <li>
                  <DoneIcon />
                </li>
              </ul>
            </List>
          </AlignText>
        </Box>
      </Section>
      <Section sceneOptions={{ triggerHook: "onEnter" }}>
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
          <ContactForm>
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              Ingresa tu email y nosotros te contactaremos
            </Subtitle2>
            <TextField />
            <Subtitle2
              boxOptions={{
                heightAuto: true,
              }}
            >
              O
            </Subtitle2>
            <WpButton />
          </ContactForm>
        </Box>
      </Section>
    </Parallax>
  );
}
