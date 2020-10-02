import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#000",
    },
    secondary: {
      main: "#FFF",
    },
    error: {
      main: red.A400,
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        html: {
          background: "#000",
        },
        body: {
          backgroundColor: "#000",
          // background: "linear-gradient(141deg, #000 0%, #000 51%, #292828 75%)",
        },
      },
    },
  },
});

export default theme;
