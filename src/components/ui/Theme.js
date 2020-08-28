import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

const jackGreen = "#549065";
const jackBlack = "#000b11";
const jackPurple = "#950067";
const jackGray = "#544b3a";
const jackBlue = "#90a1d5";

const theme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      primary: {
        main: jackGreen,
      },
      secondary: {
        main: jackBlack,
      },
      common: {
        green: jackGreen,
        black: jackBlack,
        purple: jackPurple,
        gray: jackGray,
        blue: jackBlue,
      },
    },
    typography: {
      h3: {
        color: jackGreen,
      },
      h4: {
        color: jackGreen,
      },
    },
  })
);

export default theme;
