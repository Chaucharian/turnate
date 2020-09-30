import { createMuiTheme } from "@material-ui/core/styles";
import { red } from "@material-ui/core/colors";

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#556cd6",
    },
    secondary: {
      main: "#19857b",
    },
    error: {
      main: red.A400,
    },
  },

  overrides: {
    MuiCssBaseline: {
      "@global": {
        body: {
          background: "linear-gradient(141deg, #000 0%, #000 51%, #292828 75%)",
          // "linear-gradient(141deg, #0fb8ad 0%, #1fc8db 51%, #2cb5e8 75%)",
        },
      },
    },
  },
});

export default theme;
