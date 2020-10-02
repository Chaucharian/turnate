import React from "react";
import App from "next/app";
import Head from "next/head";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import theme from "../src/theme";

class MyApp extends App {
  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <>
        <Head>
          <title>Te Anoto</title>
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
          />

          <link
            href="https://fonts.googleapis.com/css?family=Raleway:400,500,700|Source+Sans+Pro:300,400,700|Alegreya+Sans+SC|Kreon|Montserrat:400,400i,700,800,900,900i|Anton|Lobster|Abril+Fatface|Anton|Lobster&display=swap"
            rel="stylesheet"
          />
        </Head>
        <StylesProvider injectFirst>
          <ThemeProvider theme={theme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
          </ThemeProvider>
        </StylesProvider>
      </>
    );
  }
}

export default MyApp;
