import { createTheme } from "@material-ui/core";

const theme = createTheme({
  fonts: {
    primary: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 600,
    },
    secondary: {
      fontFamily: "'Quicksand', sans-serif",
      fontWeight: 700,
    },
    tertiary: {
      fontFamily: "'Bona Nova', serif",
    },
  },
  colors: {
    primary: "#353535",
    secondary: "#3c6e71",
    tertiary: "#ffffff",
    quarternary: "#d9d9d9",
    quinary: "#284b63",
  },
});

export default theme;
