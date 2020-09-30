import React from "react";
import { Container } from "@material-ui/core";
import styled from "styled-components";
import { Section, Title, Subtitle, Image, SvgArrow } from "src/components";

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
        <AlignText>
          <Title>Todo en un solo lugar</Title>
          <Subtitle>
            Tus clientes, tus ganancias, hasta tus promomociones!
          </Subtitle>
        </AlignText>
        <Image
          from={{
            left: 0,
            opacity: 1,
          }}
          to={{
            left: "100%",
            opacity: 0,
          }}
          ease="Power1.in"
          src="/iphone.png"
        />
        <SvgArrow width="150px" height="100px" />
      </Section>
      <Section>
        <Title
          from={{
            left: 0,
          }}
          to={{
            left: "80%",
            // ease: "Circ.easeOutExpo",
            ease: "Power1.in",
          }}
        >
          Todos tus clientes en un solo lugar
        </Title>
        <Image
          from={{
            left: 0,
          }}
          to={{
            left: "20%",
            ease: "Power1.in",
          }}
          src="/iphone.png"
        />
      </Section>
      <Section>
        <Title
          position="0"
          from={{
            top: "50%",
            scale: 0,
          }}
          to={{
            top: "50%",
            scale: 1.5,
            // autoAlpha: 0.05,
            left: 300,
            ease: "Linear.easeNone",
          }}
        >
          Todos tus clientes en un solo lugar
        </Title>
        <Image src="/iphone.png" width="200px" height="400px" />
      </Section>
    </Parallax>
    // <Container maxWidth="sm">
    //   <Header title="EEEAA" />
    //   <Content></Content>
    //   {/* <Title>Home Page Title with styled-components</Title>
    //   <Box my={4}>
    //     <Typography variant="h4" component="h1" gutterBottom>
    //       Next.js v4-beta example
    //     </Typography>
    //     <Link href="/about" color="secondary">
    //       Go to the about page
    //     </Link>
    //   </Box> */}
    // </Container>
  );
}
