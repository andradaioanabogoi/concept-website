import { red } from "@material-ui/core/colors";
import { createMuiTheme } from "@material-ui/core/styles";
// A custom theme for this app
const theme = createMuiTheme({
  shadows: ["none"],
  palette: {
    type: "light",
    primary: {
      main: "#61dafb",
      light: "#61dafb",
      dark: "#21a1c4",
    },
    secondary: {
      main: "#b5ecfb",
      light: "#61dafb",
      dark: "#21a1c4",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: "#282c34",
    },
  },
  overrides: {
    MuiPaper: {
      root: {
        padding: "20px 10px",
        backgroundColor: "#fff",
      },
    },
    MuiButton: {
      root: {
        margin: "5px",
      },
    },
  },
});
export default theme;
