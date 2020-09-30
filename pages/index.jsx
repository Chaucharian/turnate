import React from "react";
import { Container } from "@material-ui/core";
import { Content, Header } from "../src/components";
import { Controller, Scene } from "react-scrollmagic";

export default function Index() {
  return (
    <Container>
      <Content></Content>
    </Container>
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
