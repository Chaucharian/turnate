import React from "react";
import { Container } from "@material-ui/core";
import { Section, Header } from "../src/components";
import styled from "styled-components";
import Title from "components/Title";
import Image from "components/Image";

const Parallax = styled(Container)`
  overflow: hidden;
`;

export default function Index() {
  return (
    <Parallax>
      <Section>
        <Title
          from={{
            left: "60%",
          }}
          to={{
            left: "10%",
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
