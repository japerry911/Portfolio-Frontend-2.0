import React from "react";
import { ThemeProvider } from "@material-ui/core/styles";
import theme from "./ui/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <h1>hello</h1>
    </ThemeProvider>
  );
}

export default App;
