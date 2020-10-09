import React, { useState } from "react";
import styled from "styled-components";
import Title from "./Title";
import Subtitle from "./Subtitle";
import Box from "./Box";
import List from "./List";
import DoneIcon from "@material-ui/icons/Done";
import Section from "./Section";
import { useMediaQuery, Grid } from "@material-ui/core";

const AlignText = styled.div`
  text-align: center;
  width: 100%;
`;

const Content = styled.div`
  .MuiGrid-container {
    justify-content: space-around;
  }
  .MuiGrid-grid-sm-4 {
    flex-basis: 31.333333%;
  }
`;

const PricesSection = ({ id }) => {
  const desktop = useMediaQuery("(min-width:600px)");

  return (
    <Content>
      {!desktop ? (
        <>
          <Section
            id={id}
            noMedia
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
                  $1.990ARS /mes
                </Subtitle>
                <List>
                  <ul>
                    <li>Turnos por mes</li>
                    <li>Cant. de clientes</li>
                    <li>Cant. de servicios</li>
                    <li>Sitio web .com</li>
                    <li>Acceso directo desde el dispositivo</li>
                    <li>Notificaciones automáticas</li>
                    <li>Envío de notificaciones personalizadas</li>
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
                    <li>5</li>
                    <li>
                      <DoneIcon />
                    </li>
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
            noMedia
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
                  $3.499ARS /mes
                </Subtitle>
                <List>
                  <ul>
                    <li>Turnos por mes</li>
                    <li>Cant. de clientes</li>
                    <li>Cant. de servicios</li>
                    <li>Sitio web .com</li>
                    <li>Acceso directo desde el dispositivo</li>
                    <li>Notificaciones automáticas</li>
                    <li>Envío de notificaciones personalizadas</li>
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
                    <li>15</li>
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
            noMedia
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
                  $4.499ARS /mes
                </Subtitle>
                <List>
                  <ul>
                    <li>Turnos por mes</li>
                    <li>Cant. de clientes</li>
                    <li>Cant. de servicios</li>
                    <li>Sitio web .com</li>
                    <li>Acceso directo desde el dispositivo</li>
                    <li>Notificaciones automáticas</li>
                    <li>Envío de notificaciones personalizadas</li>
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
                    <li>Consultar</li>
                  </ul>
                </List>
              </AlignText>
            </Box>
          </Section>
        </>
      ) : (
        <Section
          id={id}
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
          <Grid container>
            <Grid item sm={4}>
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
                    $1.990ARS /mes
                  </Subtitle>
                  <List>
                    <ul>
                      <li>Turnos por mes</li>
                      <li>Cant. de clientes</li>
                      <li>Sitio web .com</li>
                      <li>Acceso directo desde el dispositivo</li>
                      <li>Notificaciones automáticas</li>
                      <li>Envío de notificaciones personalizadas</li>
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
            </Grid>
            <Grid item sm={4}>
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
                    $3.499ARS /mes
                  </Subtitle>
                  <List>
                    <ul>
                      <li>Turnos por mes</li>
                      <li>Cant. de clientes</li>
                      <li>Sitio web .com</li>
                      <li>Acceso directo desde el dispositivo</li>
                      <li>Notificaciones automáticas</li>
                      <li>Envío de notificaciones personalizadas</li>
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
            </Grid>
            <Grid item sm={4}>
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
                    $4.499ARS /mes
                  </Subtitle>
                  <List>
                    <ul>
                      <li>Turnos por mes</li>
                      <li>Cant. de clientes</li>
                      <li>Sitio web .com</li>
                      <li>Acceso directo desde el dispositivo</li>
                      <li>Notificaciones automáticas</li>
                      <li>Envío de notificaciones personalizadas</li>
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
                      <li>Consultar</li>
                    </ul>
                  </List>
                </AlignText>
              </Box>
            </Grid>
          </Grid>
        </Section>
      )}
    </Content>
  );
};

export default PricesSection;
